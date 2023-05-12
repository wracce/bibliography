import { Pipe, PipeTransform } from '@angular/core';
import { Publisher } from '../models/publisher';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(publishers: Publisher[], search:string): Publisher[] {
    search = search.trim().toLowerCase();

    if (search.trim() === "") {
      return publishers;
    }

    return publishers.filter(v => this.foundSearch(v,search));
  }

  private foundSearch(publisher: Publisher, search: string):boolean {
    return publisher.name?publisher.name.toLowerCase().includes(search):false;
  }
}
