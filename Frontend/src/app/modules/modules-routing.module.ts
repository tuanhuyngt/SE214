import { DriverSearchComponent } from './drivers/driver-search/driver-search.component';
import { DriverDelComponent } from './drivers/driver-del/driver-del.component';
import { DriverEditComponent } from './drivers/driver-edit/driver-edit.component';
import { DriverAddComponent } from './drivers/driver-add/driver-add.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarComponent } from "./cars/car/car.component";
import { DriverComponent} from "./drivers/driver/driver.component"
import { ModelCarComponent } from "./model-cars/model-car/model-car.component";
import { NewCarsComponent } from "./new-cars/new-cars/new-cars.component";
import { CarAddComponent } from "./cars/car-add/car-add.component";
import { CarEditComponent } from "./cars/car-edit/car-edit.component";
import { CarSubComponent } from "./cars/car-sub/car-sub.component";
import { ModelCarAddComponent } from "./model-cars/model-car-add/model-car-add.component";
import { ModelCarEditComponent } from "./model-cars/model-car-edit/model-car-edit.component";
import { NewCarsAddComponent } from "./new-cars/new-cars-add/new-cars-add.component";
import { NewCarsEditComponent } from "./new-cars/new-cars-edit/new-cars-edit.component";
import { NewCarsSearchComponent } from "./new-cars/new-cars-search/new-cars-search.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                children: [
                    {
                        path: 'car', component: CarComponent
                    },
                    {
                        path: 'model-car', component: ModelCarComponent,
                        children: [

                        ]
                    },
                    {
                        path: 'dx-cars', component: NewCarsComponent,
                        children: [

                        ]
                    },
                    {
                        path: 'car-add', component: CarAddComponent
                    },
                    {
                        path: 'car-edit', component: CarEditComponent
                    },
                    {
                        path: 'car-sub', component: CarSubComponent
                    },
                    {
                        path: 'model-car-add', component: ModelCarAddComponent
                    },
                    {
                        path: 'model-car-edit', component: ModelCarEditComponent
                    },
                    {
                        path: 'dx-car-add', component: NewCarsAddComponent
                    },
                    {
                        path: 'dx-car-edit', component: NewCarsEditComponent
                    },
                    {
                        path: 'dx-car-pd', component: NewCarsSearchComponent
                    },
                    {
                        path: 'driver', component: DriverComponent
                    },
                    {
                        path: 'driver-add', component: DriverAddComponent
                    },
                    {
                        path: 'driver-edit', component: DriverEditComponent
                    },
                    {
                        path: 'driver-del', component: DriverDelComponent
                    },
                    {
                        path: 'driver-search', component: DriverSearchComponent
                    },

                ],
            },
        ]),
    ],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
