import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-dx-car-management-group5',
  templateUrl: './dx-car-management-group5.component.html',
  styleUrls: ['./dx-car-management-group5.component.css', '../../style.less']
})
export class DxCarManagementGroup5Component extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
