import { TestBed } from '@angular/core/testing';

import { AbstractRemoteServiceService } from './abstract-remote-service.service';

describe('AbstractRemoteServiceService', () => {
  let service: AbstractRemoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractRemoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
