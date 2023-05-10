import { Component } from '@angular/core';
import { UserformService } from '../../services/userform.service';

@Component({
  selector: 'app-userform-search',
  templateUrl: './userform-search.component.html',
  styleUrls: ['./userform-search.component.scss']
})
export class UserformSearchComponent {

  constructor(public userformService:UserformService) {}

}
