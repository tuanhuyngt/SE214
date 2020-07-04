import { MaterialCarGroup2Component } from './materials/material-car-group2/material-car-group2.component';
import { MaterialEditGroup2Component } from './materials/material-edit-group2/material-edit-group2.component';
import { MaterialAddGroup2Component } from './materials/material-add-group2/material-add-group2.component';
import { MaterialManagementGroup2Component } from './materials/material-management-group2/material-management-group2.component';
import { SelectItem } from 'primeng/api';
import { DriverSearchGroup2Component } from './drivers/driver-search-group2/driver-search-group2.component';
import { DriverEditGroup2Component } from './drivers/driver-edit-group2/driver-edit-group2.component';
import { DriverDelGroup2Component } from './drivers/driver-del-group2/driver-del-group2.component';
import { DriverAddGroup2Component } from './drivers/driver-add-group2/driver-add-group2.component';
import { TableModule } from 'primeng/table';
import { DriverManagementGroup2Component } from "./drivers/driver-management-group2/driver-management-group2.component";
import { Group2RoutingModule } from "./group2.routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CarSubGroup2Component } from "./car-sub-group2/car-sub-group2.component";
import { Group2ServiceProxyModule } from "./group2.service-proxy.module";
import { UtilsModule } from '@shared/utils/utils.module';
import { AutoCompleteModule, DropdownModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms'
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MaterialSubGroup2Component } from './materials/material-sub-group2/material-sub-group2.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        Group2RoutingModule,
        CommonModule,
        FormsModule,
        TableModule,
        UtilsModule,
        AutoCompleteModule,
        RouterModule,
        Group2ServiceProxyModule,
        DropdownModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CarSubGroup2Component,
        DriverManagementGroup2Component,
        DriverAddGroup2Component,
        DriverDelGroup2Component,
        DriverEditGroup2Component,
        DriverSearchGroup2Component,
        MaterialManagementGroup2Component,
        MaterialAddGroup2Component,
        MaterialEditGroup2Component,
        MaterialSubGroup2Component,
        MaterialCarGroup2Component,
    ],
    exports: [
        CarSubGroup2Component,
        DriverManagementGroup2Component,
        DriverAddGroup2Component,
        DriverDelGroup2Component,
        DriverEditGroup2Component,
        DriverSearchGroup2Component,
        MaterialManagementGroup2Component,
        MaterialAddGroup2Component,
        MaterialEditGroup2Component,
        MaterialSubGroup2Component,
        MaterialCarGroup2Component
    ],
})
export class Group2Module { }
