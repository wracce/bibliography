import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  search = ""
 constructor (public bookService:BookService) {}

 runSearch() {
  this.bookService.search = this.search;
 }

}
