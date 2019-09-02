import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class SectionsModule { }
