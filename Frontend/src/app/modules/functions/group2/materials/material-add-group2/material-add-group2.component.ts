import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-material-add-group2',
  templateUrl: './material-add-group2.component.html',
  styleUrls: ['./material-add-group2.component.css']
})
export class MaterialAddGroup2Component extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
