import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  private changedItems = new Set<Author>();

  isChangeItem(author: Author) {
    return this.changedItems.has(author);
  }

  onValueChange(author: Author) {
    this.changedItems.add(author);
  }

  constructor(public authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.receiveData();
  }

  get data(): Author[] {
    return this.authorService.list;
  }

  readonly columns = [
    'id',
    'index',
    'firstName',
    'lastName',
    'middleName',
    'country',
    'birthday',
    'actions',
  ];

  save(item: Author) {
    this.authorService.add(item);
    this.changedItems.delete(item);
  }

  update(item: Author) {
    this.authorService.update(item);
    this.changedItems.delete(item);
  }

  delete(item: Author) {
    if (item.id !== undefined) this.authorService.delete(item.id);
  }
}
