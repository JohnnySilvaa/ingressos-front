import { NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket.component';

import { AuthGuardService } from '../../shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        canActivateChild: [AuthGuardService],
        component: TicketComponent,
        children: [
            {path: '', loadChildren: './pages/pages.module#PagesModule'}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TicketRoutingModule {}