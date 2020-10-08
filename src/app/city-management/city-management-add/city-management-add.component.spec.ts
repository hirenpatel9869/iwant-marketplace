import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityManagementAddComponent } from './city-management-add.component';

describe('CityManagementAddComponent', () => {
  let component: CityManagementAddComponent;
  let fixture: ComponentFixture<CityManagementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityManagementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
