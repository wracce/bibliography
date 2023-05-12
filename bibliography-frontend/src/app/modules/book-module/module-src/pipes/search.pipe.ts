import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(books: Book[], search: string): Book[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return books;
    }

    return books.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(book: Book, search: string): boolean {
    let answer = false;
    let searchStrings = [
      '' + book.name
    ];
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}