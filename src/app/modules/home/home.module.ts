import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeLayoutComponent } from '../../layout/home-layout/home-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { SidenavComponent } from 'src/app/layout/home-layout/sidenav/sidenav.component';

@NgModule({
  declarations: [HomeComponent, HomeLayoutComponent, SidenavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ],
  exports: [HomeComponent, HomeLayoutComponent, SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeModule { }
