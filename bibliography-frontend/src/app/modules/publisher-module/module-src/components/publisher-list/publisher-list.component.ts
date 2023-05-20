import { Component, OnInit } from '@angular/core';
import { PublisherService } from '../../services/publisher.service';
import { Publisher } from '../../models/publisher';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent implements OnInit {
  private changedItems = new Set<Publisher>();

  isChangeItem(publisher: Publisher) {
    return this.changedItems.has(publisher);
  }

  onValueChange(publisher: Publisher) {
    this.changedItems.add(publisher);
  }

  constructor(public publisherService: PublisherService) {}

  ngOnInit(): void {
    this.publisherService.receiveData();
  }

  get data(): Publisher[] {
    return this.publisherService.list;
  }

  readonly columns = [
    'id',
    'name',
    'address',
    'phoneNumber',
    'email',
    'actions',
  ];
  save(item: Publisher) {
    this.publisherService.add(item);
    this.changedItems.delete(item);
  }

  update(item: Publisher) {
    this.publisherService.update(item);
    this.changedItems.delete(item);
  }

  delete(item: Publisher) {
    if (item.id !== undefined) this.publisherService.delete(item.id);
  }
}
