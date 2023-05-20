import { Pipe, PipeTransform } from '@angular/core';
import { BookAdding } from '../models/book-adding';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(bookAddings: BookAdding[], search: string): BookAdding[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return bookAddings;
    }

    return bookAddings.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(bookAdding: BookAdding, search: string): boolean {
    let answer = false;
    let searchStrings = [
      bookAdding.book?.name||''
    ]
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}
