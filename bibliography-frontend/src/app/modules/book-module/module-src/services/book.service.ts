import { Injectable } from '@angular/core';
import { BookClientService } from './book-client.service';
import { GenderType } from 'src/app/core/models/gender-type';
import { Book } from '../models/book';
import { GenreService } from 'src/app/modules/genre-module/module-src/services/genre.service';
import { Author } from 'src/app/modules/author-module/module-src/models/author';
import { AuthorService } from 'src/app/modules/author-module/module-src/services/author.service';
import { Publisher } from 'src/app/modules/publisher-module/module-src/models/publisher';
import { PublisherService } from 'src/app/modules/publisher-module/module-src/services/publisher.service';
import { GenreClientService } from 'src/app/modules/genre-module/module-src/services/genre-client.service';
import { AuthorClientService } from 'src/app/modules/author-module/module-src/services/author-client.service';
import { PublisherClientService } from 'src/app/modules/publisher-module/module-src/services/publisher-client.service';
import { Genre } from 'src/app/core/models/genre';

@Injectable()
export class BookService {
  search = '';
  private _list: Book[] = [];
  private _genres: Genre[] = [];
  private _publishers: Publisher[] = [];
  private _authors: Author[] = [];
  public get genres(): Genre[] {
    return this._genres;
  }
  public get authors(): Author[] {
    return this._authors;
  }
  public get publishers(): Publisher[] {
    return this._publishers;
  }

  get list() {
    return this._list;
  }

  constructor(private bookClientService: BookClientService, private genreClientService:GenreClientService,private authorClientService:AuthorClientService, private publisherClientService:PublisherClientService) {}

  receiveData() {
    this.authorClientService.getAll().subscribe({
      next: (arr) => {
        this._authors = [...arr];
      },
    });
    this.publisherClientService.getAll().subscribe({
      next: (arr) => {
        this._publishers = [...arr];
      },
    });
    this.genreClientService.getAll().subscribe({
      next: (arr) => {
        this._genres = [...arr];
      },
    });


    this.bookClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
        this.addEmptyItem();

      },
    });
  }

  add(book: Book) {
    this.bookClientService.create(book).subscribe({
      next: (b) => {
        book.id = b.id;
        this.addEmptyItem();
        console.log('Успешно добавлено');
      },
    });
  }

  delete(id: number) {
    this.bookClientService.delete(id).subscribe({
      next: () => {
        this._list = this._list.filter((e) => e.id !== id);
        console.log('Успешно удаленно');
      },
    });
  }

  update(book: Book) {
    this.bookClientService.update(book).subscribe({
      next: (e) => {
        console.log('Успешно изменено');
      },
    });
  }

  private addEmptyItem() {
    let book = new Book();
    book.isbn = '';
    book.authors = [];
    book.description = '';
    book.edition = 1;
    book.editionYear = new Date().getFullYear();
    book.genres = [];
    book.instanceCount = 1;
    book.issuedCount = 0;
    book.name = '';
    book.pageCount = 1;
    book.publisher = this.publishers[0];
    this._list.push(book);
  }
}
