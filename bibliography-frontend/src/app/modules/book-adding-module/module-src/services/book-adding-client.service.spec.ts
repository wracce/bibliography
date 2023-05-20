import { TestBed } from '@angular/core/testing';

import { BookAddingClientService } from './book-adding-client.service';

describe('BookAddingClientService', () => {
  let service: BookAddingClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAddingClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
