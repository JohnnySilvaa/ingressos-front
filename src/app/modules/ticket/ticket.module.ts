import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MovieComponent } from './pages/movie/movie.component';
import { TicketRoutingModule } from './ticket-routing-module';
import { CreateMovieComponent } from './pages/movie/create-movie/create-movie.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';


@NgModule({
  declarations: [MovieComponent, CreateMovieComponent,],
  imports: [
    CommonModule,
    TicketRoutingModule,
    AngularMaterialModule

  ],
  exports: [MovieComponent, CreateMovieComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TicketModule {}
