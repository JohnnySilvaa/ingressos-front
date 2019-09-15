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
    MatCardModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
} 
from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule
    ],
    exports: [
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AngularMaterialModule {}