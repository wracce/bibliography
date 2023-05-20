import { Injectable } from '@angular/core';
import { PublisherClientService } from './publisher-client.service';
import { Publisher } from '../models/publisher';

@Injectable()
export class PublisherService {
  search = '';
  private _list: Publisher[] = [];

  get list() {
    return this._list;
  }

  constructor(private publisherClientService: PublisherClientService) {}

  receiveData() {
    this.publisherClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
        this.addEmptyItem();
      },
    });
  }

  add(publisher: Publisher) {
    this.publisherClientService.create(publisher).subscribe({
      next: (p) => {
        publisher.id = p.id;
        this.addEmptyItem();
        console.log('Успешно добавлено');
      },
    });
  }

  delete(id: number) {
    this.publisherClientService.delete(id).subscribe({
      next: () => {
        this._list = this._list.filter((e) => e.id !== id);
        console.log('Успешно удаленно');
      },
    });
  }

  update(publisher: Publisher) {
    this.publisherClientService.update(publisher).subscribe({
      next: (e) => {
        console.log('Успешно изменено');
      },
    });
  }

  private addEmptyItem() {
    let publisher = new Publisher();
    publisher.address = '';
    publisher.name = '';
    publisher.email = '';
    publisher.phoneNumber = '';
    this._list.push(publisher);
  }
}
