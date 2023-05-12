import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from 'src/app/core/models/genre';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(genres: Genre[], search:string): Genre[] {
    search = search.trim().toLowerCase();

    if (search.trim() === "") {
      return genres;
    }

    return genres.filter(v => this.foundSearch(v,search));
  }

  private foundSearch(genre: Genre, search: string):boolean {
    return genre.name?genre.name.toLowerCase().includes(search):false;
  }
}
