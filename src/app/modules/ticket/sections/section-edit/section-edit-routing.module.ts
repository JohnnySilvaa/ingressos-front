import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionEditComponent } from './section-edit.component';


const routes: Routes = [
  {
    path:'',
    component: SectionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionEditRoutingModule { }
