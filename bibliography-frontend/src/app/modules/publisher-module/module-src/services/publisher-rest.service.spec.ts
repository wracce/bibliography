import { TestBed } from '@angular/core/testing';

import { PublisherRestService } from './publisher-rest.service';

describe('PublisherRestService', () => {
  let service: PublisherRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
