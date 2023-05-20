import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../models/author';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(authors: Author[], search: string): Author[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return authors;
    }

    return authors.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(author: Author, search: string): boolean {
    let answer = false;
    let searchStrings = [
      '' + author.firstName + author.lastName + author.middleName + author.id,
      '' + author.firstName + author.lastName + author.middleName + author.id,
      '' + author.firstName + author.lastName + author.middleName + author.id,
      '' + author.firstName + author.lastName + author.middleName + author.id,
      '' + author.firstName + author.lastName + author.middleName + author.id,
      '' + author.firstName + author.lastName + author.middleName + author.id,

      '' + author.id + author.firstName + author.lastName + author.middleName,
      '' + author.id + author.firstName + author.lastName + author.middleName,
      '' + author.id + author.firstName + author.lastName + author.middleName,
      '' + author.id + author.firstName + author.lastName + author.middleName,
      '' + author.id + author.firstName + author.lastName + author.middleName,
      '' + author.id + author.firstName + author.lastName + author.middleName,
    ];
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').toLowerCase().trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}
