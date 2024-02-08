import { AfterViewInit, Component, OnInit } from '@angular/core'
import { BookService } from '../../services/book.service'
import { Publisher } from 'src/app/modules/publisher-module/module-src/models/publisher'
import { Author } from 'src/app/modules/author-module/module-src/models/author'
import { Genre } from 'src/app/core/models/genre'

@Component({
	selector: 'app-book-create',
	templateUrl: './book-create.component.html',
	styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit, AfterViewInit {
	publishers!: Publisher[]
	authors!: Author[]

	get form() {
		return this.bookService.form
	}

	get arrG() {
		return this.bookService.form.value.genres!
	}

	get publisher() {
		return this.bookService.form.value.publisher!
	}

	get arrA() {
		return this.bookService.form.value.authors!
	}

	isOpenAddAuthorDialog = false

	constructor(public bookService: BookService) {}
	ngAfterViewInit(): void {
		this.publishers = this.bookService.publishers
		this.authors = this.bookService.authors
	}
	ngOnInit(): void {
		// this.bookService.receiveData();
	}

	addGenre(genre: Genre) {
		if (this.arrG.filter((e) => e.id === genre.id).length === 0) this.arrG.push(genre)
	}

	addAuthor(author: Genre) {
		if (this.arrA.filter((e) => e.id === author.id).length === 0) this.arrA.push(author)
	}

	// deleteGenre(newCaption: string, currentIndex: number, book: Book) {
	//   if (newCaption === '') {
	//     book.genres = book.genres!.filter((e, id) => id !== currentIndex);
	//   }
	// }

	// deleteAuthor(newCaption: string, currentIndex: number, book: Book) {
	//   if (newCaption === '') {
	//     book.authors = book.authors!.filter((e, id) => id !== currentIndex);
	//   }
	// }

	create() {
		this.bookService.add(this.bookService.formToObject())
	}

	update() {
		this.bookService.update(this.bookService.formToObject())
	}
}
