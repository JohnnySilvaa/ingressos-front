import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
      {
        path: '',
        children: [
          {path: '', loadChildren: () => import('./home/home.module').then( h=>h.HomeModule)},

          {path: 'movie', loadChildren: () => import('./movie/movie.module').then( m=>m.MovieModule)},
        ]
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
