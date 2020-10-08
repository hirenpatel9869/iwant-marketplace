import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryManagementUpdateComponent } from './country-management-update.component';

describe('CountryManagementUpdateComponent', () => {
  let component: CountryManagementUpdateComponent;
  let fixture: ComponentFixture<CountryManagementUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryManagementUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
