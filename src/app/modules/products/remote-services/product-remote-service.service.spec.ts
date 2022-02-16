import { TestBed } from '@angular/core/testing';

import { ProductRemoteServiceService } from './product-remote-service.service';

describe('ProductRemoteServiceService', () => {
  let service: ProductRemoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRemoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
