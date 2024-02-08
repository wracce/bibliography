import { Component } from '@angular/core'
import { AuthorService } from '../../services/author.service'

@Component({
	selector: 'app-author-create',
	templateUrl: './author-create.component.html',
	styleUrls: ['./author-create.component.scss'],
})
export class AuthorCreateComponent {
	constructor(public authorService: AuthorService) {}

	get form() {
		return this.authorService.form
	}

	create() {
		this.authorService.add(this.authorService.formToObject())
	}

	update() {
		this.authorService.update(this.authorService.formToObject())
	}
}
