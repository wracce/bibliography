import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from '../models/payment';
@Pipe({
  name: 'searchByFIO',
})
export class SearchPipeByFIO implements PipeTransform {
  transform(payments: Payment[], search: string): Payment[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return payments;
    }

    return payments.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(payment: Payment, search: string): boolean {
    let answer = false;
    const searchStrings = [
      '' + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName + payment.userForm?.id,
      '' + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName + payment.userForm?.id,
      '' + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName + payment.userForm?.id,
      '' + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName + payment.userForm?.id,
      '' + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName + payment.userForm?.id,
      '' + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName + payment.userForm?.id,
      '' + payment.userForm?.id + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName,
      '' + payment.userForm?.id + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName,
      '' + payment.userForm?.id + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName,
      '' + payment.userForm?.id + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName,
      '' + payment.userForm?.id + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName,
      '' + payment.userForm?.id + payment.userForm?.firstName + payment.userForm?.lastName + payment.userForm?.middleName,
    ];
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}
