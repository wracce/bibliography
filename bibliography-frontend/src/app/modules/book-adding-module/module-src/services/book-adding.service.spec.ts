import { TestBed } from '@angular/core/testing';

import { BookAddingService } from './book-adding.service';

describe('BookAddingApiService', () => {
  let service: BookAddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
