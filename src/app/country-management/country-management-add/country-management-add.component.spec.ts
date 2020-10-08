import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryManagementAddComponent } from './country-management-add.component';

describe('CountryManagementAddComponent', () => {
  let component: CountryManagementAddComponent;
  let fixture: ComponentFixture<CountryManagementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryManagementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
