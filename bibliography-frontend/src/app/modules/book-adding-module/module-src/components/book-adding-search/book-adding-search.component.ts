import { Component } from '@angular/core';
import { BookAddingService } from '../../services/book-adding.service';

@Component({
  selector: 'app-book-adding-search',
  templateUrl: './book-adding-search.component.html',
  styleUrls: ['./book-adding-search.component.scss']
})
export class BookAddingSearchComponent {
  search = ""
 constructor (public bookAddingService:BookAddingService) {}

 runSearch() {
  this.bookAddingService.search = this.search;
 }

}
