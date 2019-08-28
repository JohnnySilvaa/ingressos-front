import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/helpers/firestore.service';
import { Observable } from 'rxjs';
import { SectionModel } from 'src/app/shared/models/section.model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  sectionList: Observable<SectionModel[]>;

  constructor(private fs: FirestoreService) { }

  ngOnInit() {
    this.sectionList = this.fs.getSections();
  }

}
