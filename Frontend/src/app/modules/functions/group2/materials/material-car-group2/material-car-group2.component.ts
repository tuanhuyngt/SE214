import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-material-car-group2',
  templateUrl: './material-car-group2.component.html',
  styleUrls: ['./material-car-group2.component.css']
})
export class MaterialCarGroup2Component extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
