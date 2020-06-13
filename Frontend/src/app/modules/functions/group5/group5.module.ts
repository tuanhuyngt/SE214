import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DxCarManagementGroup5Component } from './dx-car-management-group5/dx-car-management-group5.component';
import { CarManagementGroup5Component } from './car-management-group5/car-management-group5.component';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DropdownModule
  ],
  declarations: [CarManagementGroup5Component, DxCarManagementGroup5Component],
  exports: [CarManagementGroup5Component, DxCarManagementGroup5Component]
})
export class Group5Module { }
