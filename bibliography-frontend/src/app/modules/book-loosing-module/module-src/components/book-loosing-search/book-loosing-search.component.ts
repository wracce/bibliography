import { Component } from '@angular/core';
import { BookLoosingService } from '../../services/book-loosing.service';

@Component({
  selector: 'app-book-loosing-search',
  templateUrl: './book-loosing-search.component.html',
  styleUrls: ['./book-loosing-search.component.scss']
})
export class BookLoosingSearchComponent {
  search = ""
 constructor (public bookLoosingService:BookLoosingService) {}

 runSearch() {
  this.bookLoosingService.search = this.search;
 }

}
