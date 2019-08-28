import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionDetailComponent } from './section-detail.component';
import { SectionDrawerComponent } from '../section-drawer/section-drawer.component';


const routes: Routes = [
  {path: '', component: SectionDetailComponent},
  {path: '', component: SectionDrawerComponent, outlet:'section-drawer'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionDetailRoutingModule { }
