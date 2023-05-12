import { TestBed } from '@angular/core/testing';

import { PublisherClientService } from './publisher-client.service';

describe('PublisherClientService', () => {
  let service: PublisherClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
