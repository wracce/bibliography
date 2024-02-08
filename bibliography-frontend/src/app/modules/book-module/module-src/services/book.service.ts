import { Injectable } from '@angular/core'
import { BookClientService } from './book-client.service'
import { GenderType } from 'src/app/core/models/gender-type'
import { Book } from '../models/book'
import { GenreService } from 'src/app/modules/genre-module/module-src/services/genre.service'
import { Author } from 'src/app/modules/author-module/module-src/models/author'
import { AuthorService } from 'src/app/modules/author-module/module-src/services/author.service'
import { Publisher } from 'src/app/modules/publisher-module/module-src/models/publisher'
import { PublisherService } from 'src/app/modules/publisher-module/module-src/services/publisher.service'
import { GenreClientService } from 'src/app/modules/genre-module/module-src/services/genre-client.service'
import { AuthorClientService } from 'src/app/modules/author-module/module-src/services/author-client.service'
import { PublisherClientService } from 'src/app/modules/publisher-module/module-src/services/publisher-client.service'
import { Genre } from 'src/app/core/models/genre'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AlertService } from 'src/app/core/alert/alert.service'

@Injectable()
export class BookService {
	isCreateDialog = false
	isOpenDialog = false
	search = ''
	private _list: Book[] = []
	private _genres: Genre[] = []
	private _publishers: Publisher[] = []
	private _authors: Author[] = []
	public get genres(): Genre[] {
		return this._genres
	}
	public get authors(): Author[] {
		return this._authors
	}
	public get publishers(): Publisher[] {
		return this._publishers
	}

	get list() {
		return this._list
	}

	constructor(
		private bookClientService: BookClientService,
		private genreClientService: GenreClientService,
		private authorClientService: AuthorClientService,
		private publisherClientService: PublisherClientService,
		private alertService: AlertService
	) {}

	receiveData() {
		this.authorClientService.getAll().subscribe({
			next: (arr) => {
				this._authors = [...arr]
			},
		})
		this.publisherClientService.getAll().subscribe({
			next: (arr) => {
				this._publishers = [...arr]
			},
		})
		this.genreClientService.getAll().subscribe({
			next: (arr) => {
				this._genres = [...arr]
			},
		})

		this.bookClientService.getAll().subscribe({
			next: (arr) => {
				this._list = [...arr]
			},
		})
	}

	add(book: Book) {
		this.bookClientService.create(book).subscribe({
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
		this.bookClientService.delete(id).subscribe({
			next: () => {
				this._list = this._list.filter((e) => e.id !== id)
				console.log('Успешно удаленно')
			},
		})
	}

	update(book: Book) {
		this.bookClientService.update(book).subscribe({
			next: (p) => {
				let item = this._list.find((e) => p.id === e.id)
				if (item) {
					item.id = p.id
					item.authors = p.authors
					item.description = p.description
					item.edition = p.edition
					item.editionYear = p.editionYear
					item.genres = p.genres
					item.instanceCount = p.instanceCount
					item.issuedCount = p.issuedCount
					item.name = p.name
					item.pageCount = p.pageCount
					item.publisher = p.publisher
				}
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	form = new FormGroup({
		id: new FormControl<number | undefined>(undefined),
		authors: new FormControl<Author[]>([], [Validators.required]),
		description: new FormControl('', [Validators.required]),
		edition: new FormControl(1, [Validators.required]),
		editionYear: new FormControl(new Date().getFullYear(), [Validators.required]),
		genres: new FormControl<Genre[]>([], [Validators.required]),
		instanceCount: new FormControl(1, [Validators.required]),
		issuedCount: new FormControl(0, [Validators.required]),
		name: new FormControl('', [Validators.required]),
		isbn: new FormControl('', [Validators.required]),
		pageCount: new FormControl(1, [Validators.required]),
		publisher: new FormControl<Publisher | null>(null),
	})

	formToObject(): Book {
		let book = new Book()
		book.id = this.form.value.id!
		book.isbn = this.form.value.isbn || ''
		book.authors = this.form.value.authors || []
		book.description = this.form.value.description || ''
		book.edition = this.form.value.edition || 1
		book.editionYear = this.form.value.editionYear || new Date().getFullYear()
		book.genres = this.form.value.genres || []
		book.instanceCount = this.form.value.instanceCount || 1
		book.issuedCount = this.form.value.issuedCount || 0
		book.name = this.form.value.name || ''
		book.pageCount = this.form.value.edition || 1
		book.publisher = this.form.value.publisher || this.publishers[0]
		return book
	}

	objectToForm(value: Book): void {
		// write Publisher to form group
		this.form.patchValue({
			id: value.id,
			authors: value.authors,
			description: value.description,
			edition: value.edition,
			editionYear: value.editionYear,
			genres: value.genres,
			instanceCount: value.instanceCount,
			issuedCount: value.issuedCount,
			name: value.name,
			isbn: value.isbn,
			pageCount: value.pageCount,
			publisher: value.publisher,
		})
		console.log(this.form)
	}

	clearForm(): void {
		this.objectToForm(this.getEmptyItem())
	}

	private getEmptyItem(): Book {
		const book = new Book()
		book.isbn = ''
		book.authors = []
		book.description = ''
		book.edition = 1
		book.editionYear = new Date().getFullYear()
		book.genres = []
		book.instanceCount = 1
		book.issuedCount = 0
		book.name = ''
		book.pageCount = 1
		book.publisher = this.publishers[0]
		return book
	}
}
