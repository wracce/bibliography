import { Injectable } from '@angular/core'
import { GenreClientService } from './genre-client.service'
import { Genre } from '../../../../core/models/genre'
import { AlertService } from 'src/app/core/alert/alert.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Injectable()
export class GenreService {
	isCreateDialog = false
	isOpenDialog = false
	search = ''
	private _list: Genre[] = []

	get list() {
		return this._list
	}

	constructor(private genreClientService: GenreClientService, private alertService: AlertService) {}

	receiveData() {
		this.genreClientService.getAll().subscribe({
			next: (arr) => {
				this._list = [...arr]
			},
		})
	}

	add(genre: Genre) {
		this.genreClientService.create(genre).subscribe({
			next: (p) => {
				this._list.push(p)
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	delete(id: number) {
		this.genreClientService.delete(id).subscribe({
			next: () => {
				this._list = this._list.filter((e) => e.id !== id)
				console.log('Успешно удаленно')
			},
		})
	}

	update(genre: Genre) {
		this.genreClientService.update(genre).subscribe({
			next: (p) => {
				let item = this._list.find((e) => p.id === e.id)
				if (item) {
					item.description = p.description
					item.name = p.name
					item.id = p.id
				}
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	public getEmptyItem(): Genre {
		let genre = new Genre()
		genre.description = ''
		genre.name = ''
		return genre
	}

	form = new FormGroup({
		id: new FormControl<number | undefined>(undefined),
		name: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required]),
	})

	formToObject(): Genre {
		let genre = new Genre()
		genre.id = this.form.value.id === null ? undefined : this.form.value.id
		genre.description = this.form.value.description || ''
		genre.name = this.form.value.name || ''
		return genre
	}

	objectToForm(value: Genre): void {
		// write Genre to form group
		this.form.patchValue({
			description: value.description || '',
			name: value.name || '',
			id: value.id,
		})
		console.log(this.form)
	}

	clearForm(): void {
		this.objectToForm(this.getEmptyItem())
	}
}
