import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementListComponent } from './state-management-list.component';

describe('StateManagementListComponent', () => {
  let component: StateManagementListComponent;
  let fixture: ComponentFixture<StateManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
