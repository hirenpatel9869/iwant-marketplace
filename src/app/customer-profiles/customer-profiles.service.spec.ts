import { TestBed } from '@angular/core/testing';

import { CustomerProfilesService } from './customer-profiles.service';

describe('CustomerProfilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerProfilesService = TestBed.get(CustomerProfilesService);
    expect(service).toBeTruthy();
  });
});
