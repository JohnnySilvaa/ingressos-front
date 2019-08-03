import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/routes/app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminLayoutSidenavComponent } from './layout/admin-layout/admin-layout-sidenav/admin-layout-sidenav.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TitleComponent } from './shared/ui/title/title.component';
import { CommomModule } from './shared/commom.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AdminLayoutComponent,
    AdminLayoutSidenavComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommomModule,
    AngularMaterialModule
  ],
  exports: [AdminLayoutComponent, AdminLayoutSidenavComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer){
    overlayContainer.getContainerElement().classList.add('default-theme');
  }
}
