import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementAddComponent } from './state-management-add.component';

describe('StateManagementAddComponent', () => {
  let component: StateManagementAddComponent;
  let fixture: ComponentFixture<StateManagementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateManagementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
