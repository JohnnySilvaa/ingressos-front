import { NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from "./movie/movie.component";
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';
import { TicketHomeComponent } from './ticket-home/ticket-home.component';


const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {path: '', redirectTo: 'ticket-home', pathMatch: 'full'},
            {path: 'movie', component: MovieComponent},
            {path: 'create-movie', component: CreateMovieComponent},
            {path: 'ticket-home', component: TicketHomeComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TicketRoutingModule {}