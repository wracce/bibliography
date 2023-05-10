import { Component } from '@angular/core';
import { Userform } from '../../models/userform';
import { UserformService } from '../../services/userform.service';

@Component({
  selector: 'app-userform-list',
  templateUrl: './userform-list.component.html',
  styleUrls: ['./userform-list.component.scss']
})
export class UserformListComponent {

  constructor(public userformService:UserformService) {}


  readonly data:Userform[] = [
    {
     id:0,
     firstName: "Алексей",
     lastName: "Точечка",
     middleName: "Романов",
     birthday: new Date(2000,1,2),
     address: "г. Самара, ул. Большая садовая, д.4, кв.1",
     email: "altochka1@gmail.com",
     registrationDate: new Date(2012,4,1),
     phoneNumber: "+7 (937) 836-8-532"

   },
   {}
];

readonly columns = ['id', 'firstName', 'lastName', 'middleName','birthday','address', 'email','registrationDate','phoneNumber','actions'];

}
