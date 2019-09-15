import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections.component';
import { AuthCanEditGuard } from 'src/app/shared/auth/auth-can-edit.guard';


const routes: Routes = [
  {
    path: '', 
    component: SectionsComponent,
    children: [
     {
       path: '', 
       loadChildren: ()=>import('./section-list/section-list.module')
       .then(sl=>sl.SectionListModule)
      },
      {
        path:'undefined',
        redirectTo: ''
      },
      {
        path:'new',
        redirectTo: 'undefined/edit'
      },
      {
        path: ':sectionId/edit', 
        loadChildren: ()=>import('./section-edit/section-edit.module')
        .then(se=>se.SectionEditModule),
        canLoad: [AuthCanEditGuard]

       },
     {
       path: ':sectionId', 
       loadChildren: ()=>import('./section-detail/section-detail.module')
       .then(sd=>sd.SectionDetailModule)
      },
    ],
    
    data: {title: 'Sessões'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
