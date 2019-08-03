import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    RouterModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
