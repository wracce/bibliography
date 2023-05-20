import { Pipe, PipeTransform } from '@angular/core';
import { BookLoosing } from '../models/book-loosing';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(bookLoosings: BookLoosing[], search: string): BookLoosing[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return bookLoosings;
    }

    return bookLoosings.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(bookLoosing: BookLoosing, search: string): boolean {
    let answer = false;
    let searchStrings = [
      bookLoosing.book?.name||''
    ]
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}
