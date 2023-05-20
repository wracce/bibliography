import { Injectable } from '@angular/core';
import { BookAddingClientService } from './book-adding-client.service';
import { BookAdding } from '../models/book-adding';

@Injectable()
export class BookAddingService {
  search = '';
  private _list: BookAdding[] = [];

  get list() {
    return this._list;
  }

  constructor(private bookAddingClientService: BookAddingClientService) {}

  receiveData() {
    this.bookAddingClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
      },
    });
  }

}
