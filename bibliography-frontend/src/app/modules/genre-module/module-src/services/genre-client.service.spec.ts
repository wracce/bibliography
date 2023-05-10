import { TestBed } from '@angular/core/testing';

import { GenreClientService } from './genre-client.service';

describe('GenreClientService', () => {
  let service: GenreClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
