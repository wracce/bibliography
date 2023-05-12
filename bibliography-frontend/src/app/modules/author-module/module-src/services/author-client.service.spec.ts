import { TestBed } from '@angular/core/testing';

import { AuthorClientService } from './author-client.service';

describe('AuthorClientService', () => {
  let service: AuthorClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
