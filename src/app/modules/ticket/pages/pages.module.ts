import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MovieModule } from './movie/movie.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MovieModule,
    HomeModule
  ],
  exports: [ 
    MovieModule,
    HomeModule]
})
export class PagesModule { }
