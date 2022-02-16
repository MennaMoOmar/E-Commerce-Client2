import { TestBed } from '@angular/core/testing';

import { AuthRemoteServiceService } from './auth-remote-service.service';

describe('AuthRemoteServiceService', () => {
  let service: AuthRemoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRemoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
