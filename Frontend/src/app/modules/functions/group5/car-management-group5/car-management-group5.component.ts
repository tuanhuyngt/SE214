import { Component, OnInit, Injector, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { environment } from 'environments/environment';
import { Table } from "primeng/components/table/table";
import { Paginator, SelectItem } from "primeng/primeng";

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-car-management-group5',
  templateUrl: './car-management-group5.component.html',
  styleUrls: ['./car-management-group5.component.css', '../../style.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarManagementGroup5Component extends AppComponentBase implements OnInit {

  currentId: number;
  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;

  @ViewChild("dataTable") dataTable: Table;
  @ViewChild("paginator") paginator: Paginator;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {

    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }


}
