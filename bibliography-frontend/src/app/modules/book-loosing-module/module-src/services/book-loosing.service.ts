import { Injectable } from '@angular/core';
import { BookLoosingClientService } from './book-loosing-client.service';
import { BookLoosing } from '../models/book-loosing';

@Injectable()
export class BookLoosingService {
  search = '';
  private _list: BookLoosing[] = [];

  get list() {
    return this._list;
  }

  constructor(private bookLoosingClientService: BookLoosingClientService) {}

  receiveData() {
    this.bookLoosingClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
      },
    });
  }

}
