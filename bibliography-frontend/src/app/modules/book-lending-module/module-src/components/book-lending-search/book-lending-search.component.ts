import { Component } from '@angular/core';
import { BookLendingService } from '../../services/book-lending.service';

@Component({
  selector: 'app-book-lending-search',
  templateUrl: './book-lending-search.component.html',
  styleUrls: ['./book-lending-search.component.scss']
})
export class BookLendingSearchComponent {
  search = ""
  searchFIO = ""
  searchOnlyHands = false;
 constructor (public bookLendingService:BookLendingService) {}

 runSearch() {
  this.bookLendingService.search = this.search;
  this.bookLendingService.searchFIO = this.searchFIO;
  this.bookLendingService.searchOnlyHands = this.searchOnlyHands;


 }

}
