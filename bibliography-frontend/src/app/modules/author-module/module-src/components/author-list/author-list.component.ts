import { Component } from '@angular/core';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent {
  readonly data:Author[] = [
    {
     id:0,
     firstName: "Александр",
     lastName: "Пушкин",
     middleName: "Сергеевич",
     birthday: new Date(1799,5,6),
     country: "Россия"

   },
   {}
];

readonly columns = ['id', 'firstName', 'lastName', 'middleName','birthday','country', 'actions'];

}
