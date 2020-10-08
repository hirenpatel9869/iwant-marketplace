import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityManagementListComponent } from './city-management-list.component';

describe('CityManagementListComponent', () => {
  let component: CityManagementListComponent;
  let fixture: ComponentFixture<CityManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
