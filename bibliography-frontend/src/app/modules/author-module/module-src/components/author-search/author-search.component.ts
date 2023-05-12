import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.scss']
})
export class AuthorSearchComponent {
  search = ""
 constructor (public authorService:AuthorService) {}

 runSearch() {
  this.authorService.search = this.search;
 }

}
