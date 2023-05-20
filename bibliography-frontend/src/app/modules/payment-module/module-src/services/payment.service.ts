import { Injectable } from '@angular/core';
import { PaymentClientService } from './payment-client.service';
import { Payment } from '../models/payment';

@Injectable()
export class PaymentService {
  search = '';
  searchFIO = '';

  private _list: Payment[] = [];

  get list() {
    return this._list;
  }

  constructor(private paymentClientService: PaymentClientService) {}

  receiveData() {
    this.paymentClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
      },
    });
  }



}
