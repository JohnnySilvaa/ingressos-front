import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path: 'welcome', loadChildren: () => import('../../modules/welcome/welcome.module').then( w=>w.WelcomeModule)},
  {path: 'login', loadChildren: () => import('../../modules/login/login.module').then(l=>l.LoginModule)},
  {path: '', loadChildren: () => import('../../modules/ticket/ticket.module').then(t=>t.TicketModule)},
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
