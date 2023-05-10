import { Component } from '@angular/core';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.scss']
})
export class GenreSearchComponent {
 constructor (public genreService:GenreService) {}
}
