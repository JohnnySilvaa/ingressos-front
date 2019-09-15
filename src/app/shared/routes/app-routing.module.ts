import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'welcome',
    loadChildren: () => import('../../modules/welcome/welcome.module')
    .then( w=>w.WelcomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../../modules/user/user.module')
    .then(u=>u.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('../../modules/ticket/ticket.module')
    .then(t=>t.TicketModule)
  },

  // {
  //   path: '',
  //   redirectTo: '/welcome',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
