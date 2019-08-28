import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections.component';


const routes: Routes = [
  {
    path: '', 
    component: SectionsComponent,
    children: [
     {path: '', loadChildren: ()=>import('./section-list/section-list.module').then(sl=>sl.SectionListModule)},
     {path: ':sectionId', loadChildren: ()=>import('./section-detail/section-detail.module').then(sd=>sd.SectionDetailModule)}

    ],
    data: {title: 'Sessões'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
