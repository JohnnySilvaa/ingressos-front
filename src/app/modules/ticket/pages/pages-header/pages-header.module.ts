import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesHeaderRoutingModule } from './pages-header-routing.module';
import { PagesHeaderComponent } from './pages-header.component';


@NgModule({
  declarations: [PagesHeaderComponent],
  imports: [
    CommonModule,
    PagesHeaderRoutingModule
  ]
})
export class PagesHeaderModule { }
