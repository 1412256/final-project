import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincheckComponent } from './admincheck.component';

describe('AdmincheckComponent', () => {
  let component: AdmincheckComponent;
  let fixture: ComponentFixture<AdmincheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
