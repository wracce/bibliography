import { Component, OnInit } from '@angular/core';
import { BookAddingService } from '../../services/book-adding.service';
import { BookAdding } from '../../models/book-adding';

@Component({
  selector: 'app-book-adding-list',
  templateUrl: './book-adding-list.component.html',
  styleUrls: ['./book-adding-list.component.scss'],
})
export class BookAddingListComponent implements OnInit {
  private changedItems = new Set<BookAdding>();

  constructor(public bookAddingService: BookAddingService) {}

  ngOnInit(): void {
    this.bookAddingService.receiveData();
  }

  get data(): BookAdding[] {
    return this.bookAddingService.list;
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
