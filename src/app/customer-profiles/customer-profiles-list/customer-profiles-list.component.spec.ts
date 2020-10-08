import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfilesListComponent } from './customer-profiles-list.component';

describe('CustomerProfilesListComponent', () => {
  let component: CustomerProfilesListComponent;
  let fixture: ComponentFixture<CustomerProfilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
