import { TestBed } from '@angular/core/testing';
import { BookClientService } from './book-client.service';

describe('BookClientService', () => {
  let service: BookClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
