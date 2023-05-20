import { Injectable } from '@angular/core';
import { AuthorClientService } from './author-client.service';
import { Author } from '../models/author';

@Injectable()
export class AuthorService {
  search = '';
  private _list: Author[] = [];

  get list() {
    return this._list;
  }

  constructor(private authorClientService: AuthorClientService) {}

  receiveData() {
    this.authorClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
        this.addEmptyItem();
      },
    });
  }

  add(author: Author) {
    this.authorClientService.create(author).subscribe({
      next: (a) => {
        author.id = a.id;
        this.addEmptyItem();
        console.log('Успешно добавлено');
      },
    });
  }

  delete(id: number) {
    this.authorClientService.delete(id).subscribe({
      next: () => {
        this._list = this._list.filter((e) => e.id !== id);
        console.log('Успешно удаленно');
      },
    });
  }

  update(author: Author) {
    this.authorClientService.update(author).subscribe({
      next: (e) => {
        console.log('Успешно изменено');
      },
    });
  }

  private addEmptyItem() {
    let author = new Author();
    author.birthday = new Date();
    author.country = '';
    author.firstName = '';
    author.lastName = '';
    author.middleName = '';
    this._list.push(author);
  }
}
