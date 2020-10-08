import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfilesUpdateComponent } from './customer-profiles-update.component';

describe('CustomerProfilesUpdateComponent', () => {
  let component: CustomerProfilesUpdateComponent;
  let fixture: ComponentFixture<CustomerProfilesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfilesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfilesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
