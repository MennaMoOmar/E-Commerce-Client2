import { TestBed } from '@angular/core/testing';

import { MasterEventsLinkerService } from './master-events-linker.service';

describe('MasterEventsLinkerService', () => {
  let service: MasterEventsLinkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterEventsLinkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
