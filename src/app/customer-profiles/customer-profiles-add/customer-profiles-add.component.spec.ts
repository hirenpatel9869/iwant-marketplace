import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfilesAddComponent } from './customer-profiles-add.component';

describe('CustomerProfilesAddComponent', () => {
  let component: CustomerProfilesAddComponent;
  let fixture: ComponentFixture<CustomerProfilesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfilesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfilesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
