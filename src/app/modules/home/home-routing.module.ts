import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeLayoutComponent } from '../../layout/home-layout/home-layout.component';
import { HomeComponent } from './home.component';
const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        children: [
            {path: '', component: HomeComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}