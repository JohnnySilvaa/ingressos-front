import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  constructor() { }
  showSectionsDrawer$ = new BehaviorSubject(false);

  ngOnInit() {
  }


  onSectionsDrawerActivate(e) {
    console.log("Route Activate")
    this.showSectionsDrawer$.next(true);
  }
  onSectionsDrawerDeactivate(e) {
    console.log("Route Deactivate")
    this.showSectionsDrawer$.next(false);
  }

}
