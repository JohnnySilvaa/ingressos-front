import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [MovieComponent, CreateMovieComponent],
  imports: [
    CommonModule,
    
  ]
})
export class MovieModule { }
