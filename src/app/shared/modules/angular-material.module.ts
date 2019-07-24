import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
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
    ]
})

export class AngularMaterialModule {}