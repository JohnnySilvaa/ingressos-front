import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './ticket.component';
const routes: Routes = [
  {
    path: '',
    component: TicketComponent,
    children: [
      {
        path: '',
        loadChildren: ()=>import('./home/home.module')
        .then(h=>h.HomeModule)
      },
      {
        path: 'sections',
        loadChildren: ()=>import('./sections/sections.module')
        .then(s=>s.SectionsModule),
      }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
