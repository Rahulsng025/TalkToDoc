import { TestBed } from '@angular/core/testing';

import { DoctorListingService } from './doctor-listing.service';

describe('DoctorListingService', () => {
  let service: DoctorListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
