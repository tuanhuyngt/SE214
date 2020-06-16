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
import { AutoCompleteModule } from 'primeng/primeng';

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
    ],
    declarations: [CarSubGroup2Component, DriverManagementGroup2Component],
    exports: [CarSubGroup2Component, DriverManagementGroup2Component],
})
export class Group2Module { }
