import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { GenderType } from 'src/app/core/models/gender-type';
import {
  TuiContextWithImplicit,
  TuiStringHandler,
  tuiPure,
} from '@taiga-ui/cdk';
import { Book } from '../../models/book';
import { Publisher } from 'src/app/modules/publisher-module/module-src/models/publisher';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  private changedItems = new Set<Book>();

  readonly columns = [
    'id',
    'description',
    'name',
    'edition',
    'editionYear',
    'ISBN',
    'pageCount',
    'instanceCount',
    'issuedCount',
    'publisher',
    'authors',
    'genres',
    'actions',
  ];

  publishers = this.bookService.publishers;

  get data(): Book[] {
    return this.bookService.list;
  }

  isChangeItem(book: Book) {
    return this.changedItems.has(book);
  }

  onValueChange(book: Book) {
    this.changedItems.add(book);
  }

  constructor(public bookService: BookService) {

  }

  ngOnInit(): void {
    this.bookService.receiveData();
  }

  save(item: Book) {
    if (item.id === undefined) this.bookService.add(item);
    else this.bookService.update(item);
    this.changedItems.delete(item);
  }

  delete(item: Book) {
    if (item.id !== undefined) this.bookService.delete(item.id);
  }

  // getPublisherName(publisher: Publisher|undefined) {
  //   return this.publishers.find(e=>publisher?.toString() == e.publisher.toString())?.name || "";
  // }
}
