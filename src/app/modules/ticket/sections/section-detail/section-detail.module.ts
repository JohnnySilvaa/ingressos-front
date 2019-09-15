import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionDetailRoutingModule } from './section-detail-routing.module';
import { SectionDetailComponent } from './section-detail.component';
import { SectionDrawerModule } from '../section-drawer/section-drawer.module';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [SectionDetailComponent],
  imports: [
    CommonModule,
    SectionDetailRoutingModule,
    SectionDrawerModule,
    FlexModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SectionDetailModule { }
