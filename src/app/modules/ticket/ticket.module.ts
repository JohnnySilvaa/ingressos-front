import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';
import { RouterModule } from '@angular/router';
import { TicketComponent } from './ticket.component';


@NgModule({
  declarations: [TicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [AngularMaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class TicketModule { }




