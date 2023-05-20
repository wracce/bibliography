import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentJournalTabComponent } from './payment-journal-tab.component';

describe('paymentJournalTabComponent', () => {
  let component: PaymentJournalTabComponent;
  let fixture: ComponentFixture<PaymentJournalTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentJournalTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentJournalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
