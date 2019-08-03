import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routes/app-routing.module';
import { TitleComponent } from './ui/title/title.component';
import { AngularMaterialModule } from './modules/angular-material.module';



@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule

  ],
  exports: [TitleComponent]
})
export class CommomModule { }
