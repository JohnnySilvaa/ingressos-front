import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionDrawerComponent } from '../section-drawer/section-drawer.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('../section-list/section-list.module').then(sl=>sl.SectionListModule)},
  {path: ':sectionId', loadChildren: () => import('../section-detail/section-detail.module').then(sd=>sd.SectionDetailModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionTreeRoutingModule { }
