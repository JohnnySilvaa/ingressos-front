import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

const routes: Routes = [
  {path: '', component: MovieComponent, data: {title: 'Lista de Filmes'}},
  {path: 'create-movie', component: CreateMovieComponent, data: {title: 'Adicionar Filme'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
