import { DriverSearchComponent } from './driver-search/driver-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { DriverAddComponent } from './driver-add/driver-add.component';
import { DriverDelComponent } from './driver-del/driver-del.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { ModulesRoutingModule } from '../modules-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule, CheckboxModule } from 'primeng/primeng';
import { FunctionsModule } from '../functions/functions.module';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    FunctionsModule
  ],
  declarations: [DriverComponent, DriverAddComponent, DriverDelComponent, DriverEditComponent, DriverSearchComponent]
})
export class DriversModule { }
