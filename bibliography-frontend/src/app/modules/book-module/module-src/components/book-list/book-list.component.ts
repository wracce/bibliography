import { Component, Input, OnInit } from '@angular/core'
import { BookService } from '../../services/book.service'
import { GenderType } from 'src/app/core/models/gender-type'
import { TuiContextWithImplicit, TuiStringHandler, tuiPure } from '@taiga-ui/cdk'
import { Book } from '../../models/book'
import { Publisher } from 'src/app/modules/publisher-module/module-src/models/publisher'
import { Genre } from 'src/app/core/models/genre'
import { SessionService } from 'src/app/core/security/services/session.service'
import { User } from 'src/app/core/models/user'
import { Role } from 'src/app/core/models/role'
import { UserForm } from 'src/app/core/models/user-form'

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
	isOpenTakeBookDialog = false
	isOpenLostBookDialog = false
	isOpenAddBookDialog = false
	isOpenAddAuthorDialog = false

	private changedItems = new Set<Book>()

	columns: string[] = []

	get Role() {
		return Role
	}

	publishers = this.bookService.publishers
	authors = this.bookService.authors

	get data(): Book[] {
		return this.bookService.list
	}

	isChangeItem(book: Book) {
		return this.changedItems.has(book)
	}

	onValueChange(book: Book) {
		this.changedItems.add(book)
	}

	constructor(public bookService: BookService, public sessionService: SessionService) {}

	ngOnInit(): void {
		this.bookService.receiveData()
		this.columns = [
			'id',
			'index',
			'name',
			'description',
			'edition',
			'editionYear',
			'ISBN',
			'pageCount',
			'instanceCount',
			'issuedCount',
			'publisher',
			'authors',
			'genres',
		]
		if (this.sessionService.role != Role.USER) this.columns.push('actions')
	}

	save(item: Book) {
		this.bookService.clearForm()
		this.bookService.add(item)
		this.changedItems.delete(item)
	}

	update(item: Book) {
		this.bookService.objectToForm(item)
		this.bookService.isOpenDialog = true
		this.bookService.isCreateDialog = false
	}

	delete(item: Book) {
		if (item.id !== undefined) this.bookService.delete(item.id)
	}

	addGenre(genre: Genre, book: Book) {
		if (book.genres?.filter((e) => e.id === genre.id).length === 0) book.genres?.push(genre)
	}

	addAuthor(author: Genre, book: Book) {
		if (book.authors?.filter((e) => e.id === author.id).length === 0) book.authors?.push(author)
	}

	deleteGenre(newCaption: string, currentIndex: number, book: Book) {
		if (newCaption === '') {
			book.genres = book.genres!.filter((e, id) => id !== currentIndex)
		}
	}

	deleteAuthor(newCaption: string, currentIndex: number, book: Book) {
		if (newCaption === '') {
			book.authors = book.authors!.filter((e, id) => id !== currentIndex)
		}
	}

	// getPublisherName(publisher: Publisher|undefined) {
	//   return this.publishers.find(e=>publisher?.toString() == e.publisher.toString())?.name || "";
	// }
}
