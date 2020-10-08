import { TestBed } from '@angular/core/testing';

import { CountryManagementService } from './country-management.service';

describe('CountryManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryManagementService = TestBed.get(CountryManagementService);
    expect(service).toBeTruthy();
  });
});
