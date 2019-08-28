import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDrawerComponent } from './section-drawer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionTreeModule } from '../section-tree/section-tree.module';



@NgModule({
  declarations: [SectionDrawerComponent],
  imports: [
    CommonModule,
    SectionTreeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionDrawerModule { }
