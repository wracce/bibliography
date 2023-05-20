import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../models/payment';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(payments: Payment[], search: string): Payment[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return payments;
    }

    return payments.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(payment: Payment, search: string): boolean {

    let answer = false;
    let searchStrings = [
      ''+ payment.book?.name + payment.book?.id,
      ''+ payment.book?.id+ payment.book?.name,

    ]
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}
