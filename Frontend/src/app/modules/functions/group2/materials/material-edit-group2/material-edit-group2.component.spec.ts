import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEditGroup2Component } from './material-edit-group2.component';

describe('MaterialEditComponent', () => {
  let component: MaterialEditGroup2Component;
  let fixture: ComponentFixture<MaterialEditGroup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialEditGroup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEditGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
