import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { SectionModel } from 'src/app/shared/models/section.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from 'src/app/services/section/section.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigSection } from 'src/app/shared/models/config-section';
import { take, startWith, map } from 'rxjs/operators';
import { Timestamp } from '@firebase/firestore-types';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.scss']
})
export class SectionEditComponent implements OnInit, OnDestroy {
  
  subs: Subscription[] = [];
  section$: Observable<SectionModel>;
  genreList$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  sectionConfig$: Observable<ConfigSection>;
  sectionForm: FormGroup;
  sectionId: string;


  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
    private fb: FormBuilder,
    private router: Router,
    ) { }
  
  ngOnInit() {
    this.subs.push(
      this.route.paramMap.subscribe(params => {
        this.sectionId = params.get('sectionId');
         this.rebuildForm();
      })
      );

      // Set Section Config
    this.sectionConfig$ = this.sectionService.getConfigSection();

    this.sectionConfig$.pipe(take(1)).subscribe(sectionConfig => {
      this.subs.push(
        this.sectionForm
        .get('genre')
        .valueChanges.pipe(startWith(''))
        .subscribe(value => {

          const filterValue = value ? value.toLowerCase() : '';
          if (this.sectionForm.get('fiction').value) {
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
    rebuildForm(){
      if(this.sectionForm){
        this.sectionForm.reset();
      }
      this.section$ = this.sectionService.getSection(this.sectionId);
       
      this.subs.push(
        this.section$
        .pipe(
          map(section => {
            
            console.log(section.status);
            if(section.time){
              const timeStamp = section.time as  Timestamp;
              section.time  = timeStamp.toDate();
            }
            return section;
          })
        )
        .subscribe(section => {
          this.sectionForm = this.fb.group({
            id: [section.id],
            name: [section.name, [Validators.required, Validators.maxLength(50)]],
            price: [section.price, Validators.required],
            time: [section.time],
            ageCategory: [section.ageCategory, Validators.required],
            fiction: [section.fiction || false, Validators.required],
            genre: [section.genre, Validators.required],
            hasAudio: [section.hasAudio],
            hasPhotos: [section.hasPhotos],
            hasVideos: [section.hasVideos],
            rating: [section.rating, Validators.required],
            status: [section.status, Validators.required],
          });
        })
      )
    }
    

    revert() {
      // this.rebuildForm();
    }

    fictionChange(e) {
      this.sectionForm.patchValue({ genre: '' }, { onlySelf: true });
    }
    ngOnDestroy(): void {
      this.subs.forEach(sub => {
        sub.unsubscribe();
      });
    }

    async saveSectionChanges(){
      const section = new SectionModel(this.sectionForm.value);
      await this.sectionService.updateSection(section);
      this.router.navigate(['/sections', this.sectionId])
    }
  }
