import { Injectable, Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, merge, Subscription } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map, tap, take } from 'rxjs/operators';

import { FirestoreService } from 'src/app/shared/helpers/firestore.service';
import { SectionModel } from 'src/app/shared/models/section.model';
import { RoomModel } from 'src/app/shared/models/room.model';
import { SeatModel } from 'src/app/shared/models/seat.model';

export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false,
    public section?: SectionModel,
    public room?: RoomModel,
    public seat?: SeatModel
  ) {}
}

@Injectable()
export class DynamicDataSource {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);
  sectionTree = {};
  subscriptions: Subscription[] = [];
  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private treeControl: FlatTreeControl<DynamicFlatNode>,
    private route: ActivatedRoute,
    private fs: FirestoreService,
    private router: Router
  ) {
    /** Initial data from database */
    this.subscriptions.push(
      this.route.queryParams.subscribe(params => {
        console.log(params);
      })
    );
    this.subscriptions.push(
      this.route.paramMap.subscribe(paramMap => {
        const sectionId = paramMap.get('sectionId');
        this.fs.getSectionRooms(sectionId).subscribe(rooms => {
          const nodes: DynamicFlatNode[] = [];
          rooms.sort((a, b) => (a.sort < b.sort ? -1 : 1));
          rooms.forEach(room =>
            nodes.push(
              new DynamicFlatNode(
                room.name,
                0,
                true,
                false,
                { id: sectionId },
                room
              )
            )
          );
          this.data = nodes;
        });
      })
    );
  }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(
      map(() => this.data)
    );
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const index = this.data.indexOf(node);
    node.isLoading = true;
    if (expand) {
      this.subscriptions.push(
        this.fs
          .getSectionSeats(node.section.id, node.room.id)
          .subscribe(async seats => {
            console.log(seats);
            const nodes: DynamicFlatNode[] = [];
            seats.forEach(seat =>
              nodes.push(
                new DynamicFlatNode(
                  seat.id,
                  1,
                  false,
                  false,
                  node.section,
                  node.room,
                  seat
                )
              )
            );
            this.data.splice(index + 1, 0, ...nodes);
            this.dataChange.next(this.data);

            // Update query params on current chapter
            await this.router.navigate([], {
              relativeTo: this.route,
              queryParams: { roomId: node.room.id },
              queryParamsHandling: 'merge'
            });
            // Remove any left over section params
            await this.router.navigate([], {
              relativeTo: this.route,
              queryParams: { seatId: '' },
              queryParamsHandling: 'merge'
            });

            node.isLoading = false;
          })
      );
    } else {
      let count = 0;
      for (
        let i = index + 1;
        i < this.data.length && this.data[i].level > node.level;
        i++, count++
      ) {}
      this.data.splice(index + 1, count);
      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }
  }
}

@Component({
  selector: 'app-section-tree',
  templateUrl: './section-tree.component.html',
  styleUrls: ['./section-tree.component.scss']
})
export class SectionTreeComponent implements OnInit, OnDestroy {
  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;
  constructor(
    private route: ActivatedRoute,
    private fs: FirestoreService,
    private router: Router
  ) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new DynamicDataSource(
      this.treeControl,
      this.route,
      this.fs,
      this.router
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.dataSource.subscriptions.forEach(s => {
      s.unsubscribe();
    });
  }

  seat(node: DynamicFlatNode) {
    // Update query params on current chapter
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { seatId: node.seat.id },
      queryParamsHandling: 'merge'
    });
  }

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
