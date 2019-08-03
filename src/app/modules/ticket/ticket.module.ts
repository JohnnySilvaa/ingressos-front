import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MovieComponent } from './movie/movie.component';
import { TicketRoutingModule } from './ticket-routing-module';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';
import { AdminLayoutSidenavComponent } from 'src/app/layout/admin-layout/admin-layout-sidenav/admin-layout-sidenav.component';
import { TicketHomeComponent } from './ticket-home/ticket-home.component';


@NgModule({
  declarations: [MovieComponent, CreateMovieComponent, TicketHomeComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    AngularMaterialModule

  ],
  exports: [MovieComponent, CreateMovieComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TicketModule {}
