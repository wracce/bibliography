import { Component } from '@angular/core';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
})
export class GenreListComponent {
  readonly data: Genre[] = [
    {
      id: 0,
      name: 'Роман',
      desc: 'художественное произведение большого объема, в котором развернуто повествуется о событиях в жизни главных действующих лиц и их судьбах',
    },
    {},
  ];

  readonly columns = ['id', 'name', 'desc', 'actions'];
}
