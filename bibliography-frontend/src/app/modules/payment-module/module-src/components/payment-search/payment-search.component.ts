import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-search',
  templateUrl: './payment-search.component.html',
  styleUrls: ['./payment-search.component.scss']
})
export class PaymentSearchComponent {
  search = ""
  searchFIO = ""

 constructor (public paymentService:PaymentService) {}

 runSearch() {
  this.paymentService.search = this.search;
  this.paymentService.searchFIO = this.searchFIO;

 }

}
