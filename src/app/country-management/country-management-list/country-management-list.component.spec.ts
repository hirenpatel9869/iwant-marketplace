import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryManagementListComponent } from './country-management-list.component';

describe('CountryManagementListComponent', () => {
  let component: CountryManagementListComponent;
  let fixture: ComponentFixture<CountryManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
