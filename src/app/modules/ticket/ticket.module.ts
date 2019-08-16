import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { TicketRoutingModule } from './ticket-routing-module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';

import { TicketComponent } from './ticket.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieService } from 'src/app/services/movie/movie.service';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [TicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
  

  ],
  exports: [TicketComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MovieService,]

})
export class TicketModule {}
