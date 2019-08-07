import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule,
} 
from '@angular/material';


@NgModule({
    imports: [CommonModule],
    exports: [
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatListModule
    
    ]
})

export class AngularMaterialModule {}