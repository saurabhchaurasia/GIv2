import { TestBed } from '@angular/core/testing';

import { RenewServicesService } from './renew-services.service';

describe('RenewServicesService', () => {
  let service: RenewServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
