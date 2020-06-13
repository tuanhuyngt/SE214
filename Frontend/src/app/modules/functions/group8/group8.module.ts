import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DxCarEditGroup8Component } from './dx-car-edit-group8/dx-car-edit-group8.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [DxCarEditGroup8Component],
  exports:[DxCarEditGroup8Component]
})
export class Group8Module { }
