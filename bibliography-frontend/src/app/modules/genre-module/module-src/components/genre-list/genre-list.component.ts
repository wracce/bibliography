import { Component, OnInit } from '@angular/core'
import { Genre } from '../../../../../core/models/genre'
import { GenreService } from '../../services/genre.service'

@Component({
	selector: 'app-genre-list',
	templateUrl: './genre-list.component.html',
	styleUrls: ['./genre-list.component.scss'],
})
export class GenreListComponent implements OnInit {
	private changedItems = new Set<Genre>()

	isChangeItem(genre: Genre) {
		return this.changedItems.has(genre)
	}

	onValueChange(genre: Genre) {
		this.changedItems.add(genre)
	}

	constructor(public genreService: GenreService) {}

	ngOnInit(): void {
		this.genreService.receiveData()
	}

	get data(): Genre[] {
		return this.genreService.list
	}

	readonly columns = ['id', 'name', 'desc', 'actions']

	save(item: Genre) {
		this.genreService.clearForm()
		this.genreService.add(item)
		this.changedItems.delete(item)
	}

	update(item: Genre) {
		this.genreService.objectToForm(item)
		this.genreService.isOpenDialog = true
		this.genreService.isCreateDialog = false
	}

	delete(item: Genre) {
		if (item.id !== undefined) this.genreService.delete(item.id)
	}
}
