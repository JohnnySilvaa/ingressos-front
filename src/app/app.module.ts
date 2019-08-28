import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CommomModule } from './shared/commom.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './shared/routes/app-routing.module';
import { TitleService } from './shared/helpers/title.service';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { environment } from 'src/environments/environment';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';


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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // cofig keys firebase
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
    
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
