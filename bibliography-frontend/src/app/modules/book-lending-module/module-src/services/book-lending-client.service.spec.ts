import { TestBed } from '@angular/core/testing';

import { BookLendingClientService } from './book-lending-client.service';

describe('BookLendingClientService', () => {
  let service: BookLendingClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLendingClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
