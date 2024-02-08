import { Injectable } from '@angular/core'
import { AuthorClientService } from './author-client.service'
import { Author } from '../models/author'
import { AlertService } from 'src/app/core/alert/alert.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Injectable()
export class AuthorService {
	isCreateDialog = false
	isOpenDialog = false
	search = ''
	private _list: Author[] = []

	get list() {
		return this._list
	}

	constructor(
		private authorClientService: AuthorClientService,
		private alertService: AlertService
	) {}

	receiveData() {
		this.authorClientService.getAll().subscribe({
			next: (arr) => {
				this._list = [...arr]
			},
		})
	}

	add(author: Author) {
		this.authorClientService.create(author).subscribe({
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
		this.authorClientService.delete(id).subscribe({
			next: () => {
				this._list = this._list.filter((e) => e.id !== id)
				console.log('Успешно удаленно')
			},
		})
	}

	update(author: Author) {
		this.authorClientService.update(author).subscribe({
			next: (p) => {
				let item = this._list.find((e) => p.id === e.id)
				if (item) {
					item.id = p.id
					item.birthday = p.birthday
					item.country = p.country
					item.firstName = p.firstName
					item.lastName = p.lastName
					item.middleName = p.middleName
				}
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	public getEmptyItem(): Author {
		let author = new Author()
		author.country = ''
		author.firstName = ''
		author.lastName = ''
		author.middleName = ''
		return author
	}

	form = new FormGroup({
		id: new FormControl<number | undefined>(undefined),
		birthday: new FormControl<Date | null>(null, [Validators.required]),
		country: new FormControl('', [Validators.required]),
		firstName: new FormControl('', [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		middleName: new FormControl('', [Validators.required]),
	})

	formToObject(): Author {
		let author = new Author()
		author.id = this.form.value.id!
		author.birthday = this.form.value.birthday === null ? undefined : this.form.value.birthday
		author.country = this.form.value.country || ''
		author.firstName = this.form.value.firstName || ''
		author.lastName = this.form.value.lastName || ''
		author.middleName = this.form.value.middleName || ''
		return author
	}

	objectToForm(value: Author): void {
		// write Author to form group
		this.form.patchValue({
			birthday: value.birthday,
			country: value.country || '',
			firstName: value.firstName || '',
			lastName: value.lastName || '',
			middleName: value.middleName || '',
			id: value.id,
		})
		console.log(this.form)
	}

	clearForm(): void {
		this.objectToForm(this.getEmptyItem())
	}
}
