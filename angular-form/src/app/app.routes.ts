import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MortageFormComponent } from './mortage-form/mortage-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'mortage_form', pathMatch: 'full' },
    { path: 'mortage_form', component: MortageFormComponent }
];
