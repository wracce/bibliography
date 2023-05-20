import { TestBed } from '@angular/core/testing';

import { BookLoosingService } from './book-loosing.service';

describe('BookLoosingApiService', () => {
  let service: BookLoosingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLoosingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
