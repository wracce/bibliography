import { Injectable } from '@angular/core';
import { GenreClientService } from './genre-client.service';
import { Genre } from '../../../../core/models/genre';

@Injectable()
export class GenreService {
  search = '';
  private _list: Genre[] = [];

  get list() {
    return this._list;
  }

  constructor(private genreClientService: GenreClientService) {}

  receiveData() {
    this.genreClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
        this.addEmptyItem();
      },
    });
  }

  add(genre: Genre) {
    this.genreClientService.create(genre).subscribe({
      next: () => {
        this.addEmptyItem();
        console.log('Успешно добавлено');
      },
    });
  }

  delete(id: number) {
    this.genreClientService.delete(id).subscribe({
      next: () => {
        this._list = this._list.filter((e) => e.id !== id);
        console.log('Успешно удаленно');
      },
    });
  }

  update(genre: Genre) {
    this.genreClientService.update(genre).subscribe({
      next: (e) => {
        console.log('Успешно изменено');
      },
    });
  }

  private addEmptyItem() {
    let genre = new Genre();
    genre.description = '';
    genre.name = '';
    this._list.push(genre);
  }
}
