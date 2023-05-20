import { TestBed } from '@angular/core/testing';

import { BookLoosingClientService } from './book-loosing-client.service';

describe('BookLoosingClientService', () => {
  let service: BookLoosingClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLoosingClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
