import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserSigninComponent } from './user-signin/user-signin.component';


@NgModule({
  declarations: [UserSigninComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
