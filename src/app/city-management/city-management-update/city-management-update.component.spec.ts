import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityManagementUpdateComponent } from './city-management-update.component';

describe('CityManagementUpdateComponent', () => {
  let component: CityManagementUpdateComponent;
  let fixture: ComponentFixture<CityManagementUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityManagementUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
