import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../../shared/modules/angular-material.module';
import { HomeLayoutComponent } from 'src/app/layout/home-layout/home-layout.component';
import { HomeLayoutSidenavComponent } from 'src/app/layout/home-layout/home-layout-sidenav/home-layout-sidenav.component';

@NgModule({
  declarations: [HomeComponent, HomeLayoutComponent, HomeLayoutSidenavComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
  ],
  exports: [HomeComponent, HomeLayoutComponent, HomeLayoutSidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeModule { }
