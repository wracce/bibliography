import { Component, OnInit } from '@angular/core';
import { BookLoosingService } from '../../services/book-loosing.service';
import { BookLoosing } from '../../models/book-loosing';

@Component({
  selector: 'app-book-loosing-list',
  templateUrl: './book-loosing-list.component.html',
  styleUrls: ['./book-loosing-list.component.scss'],
})
export class BookLoosingListComponent implements OnInit {
  private changedItems = new Set<BookLoosing>();

  constructor(public bookLoosingService: BookLoosingService) {}

  ngOnInit(): void {
    this.bookLoosingService.receiveData();
  }

  get data(): BookLoosing[] {
    return this.bookLoosingService.list;
  }

  readonly columns = [
    'id',
    'index',
    'bookName',
    'amount',
    'date',
    'reason',
  ];

}
