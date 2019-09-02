import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionEditRoutingModule } from './section-edit-routing.module';
import { SectionEditComponent } from './section-edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SectionEditComponent],
  imports: [
    CommonModule,
    SectionEditRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule





  ]
})
export class SectionEditModule { }
