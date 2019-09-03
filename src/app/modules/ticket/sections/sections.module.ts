import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    MatSidenavModule,
    FlexLayoutModule,
  ]
})
export class SectionsModule { }
