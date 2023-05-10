import { Component } from '@angular/core';
import { Publisher } from '../../models/publisher';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent {
  readonly data:Publisher[] = [
     {
      id:0,
      name: "АСТ",
      address: "Адрес: г. Москва, Пресненская наб., д.6, стр.2, БЦ «Империя»",
      email: "biblotdel@ast.ru",
      phoneNumber: "+7 (499) 951-6-000"
    },
    {}
];

readonly columns = ['id', 'name', 'address', 'email','phoneNumber', 'actions'];

}
