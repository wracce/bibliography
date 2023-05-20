import { Injectable } from '@angular/core';
import { BookLendingClientService } from './book-lending-client.service';
import { BookLending } from '../models/book-lending';

@Injectable()
export class BookLendingService {
  search = '';
  searchFIO = '';
  searchOnlyHands:boolean|null = false;

  private _list: BookLending[] = [];

  get list() {
    return this._list;
  }

  constructor(private bookLendingClientService: BookLendingClientService) {}

  receiveData() {
    this.bookLendingClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
      },
    });
  }



}
