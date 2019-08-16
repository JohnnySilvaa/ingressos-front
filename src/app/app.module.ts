import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/routes/app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TitleService } from './shared/helpers/title.service';

import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CommomModule } from './shared/commom.module';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommomModule,
    AngularMaterialModule,
    HttpClientModule
    
  ],
  exports: [],
  providers: [
    Title,
    TitleService,
    AuthGuardService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(overlayContainer: OverlayContainer){
    overlayContainer.getContainerElement().classList.add('app-theme');
  }
}
