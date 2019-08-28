import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTreeComponent } from './section-tree.component';
import { SectionTreeRoutingModule } from './section-tree-routing.module';
import { MatTreeModule, MatProgressBarModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [SectionTreeComponent],
  imports: [
    CommonModule,
    SectionTreeRoutingModule,
    MatTreeModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [SectionTreeComponent]
})
export class SectionTreeModule { }
