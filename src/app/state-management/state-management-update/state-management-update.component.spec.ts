import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementUpdateComponent } from './state-management-update.component';

describe('StateManagementUpdateComponent', () => {
  let component: StateManagementUpdateComponent;
  let fixture: ComponentFixture<StateManagementUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateManagementUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
