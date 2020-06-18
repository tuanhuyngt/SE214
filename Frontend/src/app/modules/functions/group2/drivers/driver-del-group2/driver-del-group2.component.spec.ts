/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DriverDelGroup2Component } from './driver-del-group2.component';

describe('DriverDelGroup2Component', () => {
  let component: DriverDelGroup2Component;
  let fixture: ComponentFixture<DriverDelGroup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverDelGroup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDelGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
