import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from '../ticket.component';


const routes: Routes = [
      {
        path: '',
        children: [
          {path: '', loadChildren: './home/home.module#HomeModule'},
          {path: 'pages-header', loadChildren: './pages-header/pages-header.module#PagesHeaderModule'},
          {path: 'movie', loadChildren: './movie/movie.module#MovieModule'}
        ]
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
