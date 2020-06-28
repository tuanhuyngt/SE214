import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-material-car',
  templateUrl: './material-car.component.html',
  styleUrls: ['./material-car.component.css', '../material/material.component.less']
})
export class MaterialCarComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
