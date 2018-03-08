import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerdetailComponent } from './managerdetail.component';

describe('ManagerdetailComponent', () => {
  let component: ManagerdetailComponent;
  let fixture: ComponentFixture<ManagerdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
