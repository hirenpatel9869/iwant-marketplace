import { TestBed } from '@angular/core/testing';

import { CityManagementService } from './city-management.service';

describe('CityManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityManagementService = TestBed.get(CityManagementService);
    expect(service).toBeTruthy();
  });
});
