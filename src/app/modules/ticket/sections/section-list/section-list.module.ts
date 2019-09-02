import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionListRoutingModule } from './section-list-routing.module';
import { SectionListComponent } from './section-list.component';
import { MatListModule, MatExpansionModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SectionListComponent],
  imports: [
    CommonModule,
    SectionListRoutingModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatToolbarModule
  ]
})
export class SectionListModule { }
