import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesHeaderComponent } from './pages-header.component';

const routes: Routes = [
    {
      path: '',
      component: PagesHeaderComponent,
      outlet: 'pages-header'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesHeaderRoutingModule { }
