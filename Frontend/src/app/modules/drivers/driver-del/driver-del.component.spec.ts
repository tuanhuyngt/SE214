import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDelComponent } from './driver-del.component';

describe('DriverSubComponent', () => {
  let component: DriverDelComponent;
  let fixture: ComponentFixture<DriverDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
