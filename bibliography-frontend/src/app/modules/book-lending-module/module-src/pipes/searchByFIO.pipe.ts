import { Pipe, PipeTransform } from '@angular/core';
import { BookLending } from '../models/book-lending';
@Pipe({
  name: 'searchByFIO',
})
export class SearchPipeByFIO implements PipeTransform {
  transform(bookLendings: BookLending[], search: string): BookLending[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return bookLendings;
    }

    return bookLendings.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(bookLending: BookLending, search: string): boolean {
    let answer = false;
    let searchStrings = [
      '' + bookLending.userForm?.firstName + bookLending.userForm?.lastName + bookLending.userForm?.middleName + bookLending.userForm?.id,
      '' + bookLending.userForm?.firstName + bookLending.userForm?.middleName + bookLending.userForm?.lastName + bookLending.userForm?.id,
      '' + bookLending.userForm?.lastName + bookLending.userForm?.firstName + bookLending.userForm?.middleName + bookLending.userForm?.id,
      '' + bookLending.userForm?.lastName + bookLending.userForm?.middleName + bookLending.userForm?.firstName + bookLending.userForm?.id,
      '' + bookLending.userForm?.middleName + bookLending.userForm?.firstName + bookLending.userForm?.lastName + bookLending.userForm?.id,
      '' + bookLending.userForm?.middleName + bookLending.userForm?.lastName + bookLending.userForm?.firstName + bookLending.userForm?.id,

      '' + bookLending.userForm?.id + bookLending.userForm?.lastName + bookLending.userForm?.firstName + bookLending.userForm?.middleName,
      '' + bookLending.userForm?.id + bookLending.userForm?.lastName + bookLending.userForm?.middleName + bookLending.userForm?.firstName,
      '' + bookLending.userForm?.id + bookLending.userForm?.middleName + bookLending.userForm?.firstName + bookLending.userForm?.lastName,
      '' + bookLending.userForm?.id + bookLending.userForm?.middleName + bookLending.userForm?.lastName + bookLending.userForm?.firstName,
      '' + bookLending.userForm?.id + bookLending.userForm?.firstName + bookLending.userForm?.lastName + bookLending.userForm?.middleName,
      '' + bookLending.userForm?.id + bookLending.userForm?.firstName + bookLending.userForm?.middleName + bookLending.userForm?.lastName,

   ];

    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer= true;
    });

    console.log(searchStrings);
    console.log(search);

    return answer;
  }
}
