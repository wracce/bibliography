import { Component } from '@angular/core';
import { UserFormService } from '../../services/userform.service';

@Component({
  selector: 'app-userForm-search',
  templateUrl: './userForm-search.component.html',
  styleUrls: ['./userForm-search.component.scss']
})
export class UserFormSearchComponent {
  search = ""
 constructor (public userFormService:UserFormService) {}

 runSearch() {
  this.userFormService.search = this.search;
 }

}
