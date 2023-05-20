import { TestBed } from '@angular/core/testing';

import { BookLendingService } from './book-lending.service';

describe('BookLendingApiService', () => {
  let service: BookLendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
