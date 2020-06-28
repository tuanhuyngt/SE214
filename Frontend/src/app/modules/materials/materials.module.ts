import { MaterialCarComponent } from './material-car/material-car.component';
import { MaterialSubComponent } from './material-sub/material-sub.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';
import { MaterialAddComponent } from './material-add/material-add.component';
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
  declarations: [MaterialComponent, MaterialAddComponent, MaterialEditComponent, MaterialSubComponent, MaterialCarComponent]
})
export class MaterialsModule { }
