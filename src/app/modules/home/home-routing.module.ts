import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home.component';
import { HomeLayoutComponent } from 'src/app/layout/home-layout/home-layout.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}