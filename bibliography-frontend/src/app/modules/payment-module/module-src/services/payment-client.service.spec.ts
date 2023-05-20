import { TestBed } from '@angular/core/testing';

import { PaymentClientService } from './payment-client.service';

describe('PaymentClientService', () => {
  let service: PaymentClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
