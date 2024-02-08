import { Component } from '@angular/core'
import { GenreService } from '../../services/genre.service'

@Component({
	selector: 'app-genre-create',
	templateUrl: './genre-create.component.html',
	styleUrls: ['./genre-create.component.scss'],
})
export class GenreCreateComponent {
	constructor(public genreService: GenreService) {}

	get form() {
		return this.genreService.form
	}

	create() {
		this.genreService.add(this.genreService.formToObject())
	}

	update() {
		this.genreService.update(this.genreService.formToObject())
	}
}
