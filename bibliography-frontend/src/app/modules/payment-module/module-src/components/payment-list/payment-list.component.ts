import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss'],
})
export class PaymentListComponent implements OnInit {
  private changedItems = new Set<Payment>();

  constructor(public paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.receiveData();
  }

  get data(): Payment[] {
    return this.paymentService.list;
  }

  readonly columns = [
    'id',
    'indexBook',
    'bookName',
    'indexUserForm',
    'userFormName',
    'cost',
    'date',
  ];

}
