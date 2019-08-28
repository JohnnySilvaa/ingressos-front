import { Component, OnInit } from '@angular/core';


import { SectionModel } from '../../../../shared/models/section.model';
import { Observable, Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/shared/helpers/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { RoomModel } from 'src/app/shared/models/room.model';
import { SeatModel } from 'src/app/shared/models/seat.model';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss']
})
export class SectionDetailComponent implements OnInit {

  section$: Observable<SectionModel>
  room$: Observable<RoomModel>
  seat$: Observable<SeatModel>

  sectionId: string;
  roomId: string;
  seatId: string;

  subscriptions: Subscription[] = [];

  constructor(private fs: FirestoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(
      this.route.paramMap.subscribe(paramMap => {
        this.sectionId = paramMap.get('sectionId');
        this.section$ = this.fs.getSection(this.sectionId);
        console.log(this.section$)
      })
    );
    this.subscriptions.push(
      this.route.queryParamMap.subscribe(paramMap => {
        this.roomId = paramMap.get('roomId');
        this.seatId = paramMap.get('seatId');

        if (this.sectionId && this.roomId) {
          this.room$ = this.fs.getSectionRoom(this.sectionId, this.roomId);
        }
        if (this.sectionId && this.roomId && this.seatId) {
          this.seat$ = this.fs.getSectionSeat(
            this.sectionId,
            this.roomId,
            this.seatId
          );
        }
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    });
  }
}