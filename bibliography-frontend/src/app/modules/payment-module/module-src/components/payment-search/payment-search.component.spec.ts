import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSearchComponent } from './payment-search.component';

describe('PaymentSearchComponent', () => {
  let component: PaymentSearchComponent;
  let fixture: ComponentFixture<PaymentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
