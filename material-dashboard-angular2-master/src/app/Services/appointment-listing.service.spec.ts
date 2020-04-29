import { TestBed } from '@angular/core/testing';

import { AppointmentListingService } from './appointment-listing.service';

describe('AppointmentListingService', () => {
  let service: AppointmentListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
