import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { SectionModel } from 'src/app/shared/models/section.model';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from 'src/app/services/section/section.service';
import { FormControl } from '@angular/forms';
import { ConfigSection } from 'src/app/shared/models/config-section';
import { take, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent implements OnInit, OnDestroy {
  
  subs: Subscription[] = [];
  section$: Observable<SectionModel>;
  fictionSelected = true;
  genreControl = new FormControl();
  genreList$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  sectionConfig$: Observable<ConfigSection>;
  sectionRating = 3;
  sectionStatus="Documentary"




  
  constructor(private router: ActivatedRoute, private sectionService: SectionService) { }
  
  ngOnInit() {
    this.subs.push(
      this.router.paramMap.subscribe(params => {
        const sectionId = params.get('sectionId');
        this.section$ = this.sectionService.getSection(sectionId);
      })
      );

      // Set Section Config
    this.sectionConfig$ = this.sectionService.getConfigSection();

    this.sectionConfig$.pipe(take(1)).subscribe(sectionConfig => {
      this.subs.push(
        this.genreControl.valueChanges.pipe(startWith('')).subscribe(value => {
          const filterValue = value ? value.toLowerCase() : '';
          if (this.fictionSelected) {
            this.genreList$.next(
              sectionConfig.fiction.filter(option =>
                option.toLowerCase().includes(filterValue)
              )
            );
          } else {
            this.genreList$.next(
              sectionConfig.nonFiction.filter(option =>
                option.toLowerCase().includes(filterValue)
              )
            );
          }
        })
      );
    });

    }
    
    ngOnDestroy(): void {
      this.subs.forEach(sub => {
        sub.unsubscribe();
      });
    }

    fictionChange(e) {
      this.fictionSelected = e.checked;
      this.genreControl.reset();
    }
  }
