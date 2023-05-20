import { Pipe, PipeTransform } from '@angular/core';
import { BookLending } from '../models/book-lending';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
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
      '' + bookLending.book?.name + bookLending.book?.id,
      '' + bookLending.book?.id + bookLending.book?.name,
    ];
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer = true;
    });

    return answer;
  }
}
