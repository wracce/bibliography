import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GenderType } from 'src/app/core/models/gender-type';
import { UserForm } from 'src/app/core/models/user-form';
import { SessionService } from 'src/app/core/security/services/session.service';
import { BookLendingService } from 'src/app/modules/book-lending-module/module-src/services/book-lending.service';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.API_URL + '/userform';

@Component({
  selector: 'app-library-user-page',
  templateUrl: './library-user-page.component.html',
  styleUrls: ['./library-user-page.component.scss'],
})
export class LibraryUserPageComponent implements OnInit {
  setHistoryTab() {
    this.bookLendingService.searchOnlyHands = null;
  }
  setHandsTab() {
  this.bookLendingService.searchOnlyHands = true;
  }
  userForm?: UserForm;
  username?: string;

  activeItemIndex = 0;

  get GenderType() {
    return GenderType;
  }
  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService,
    private bookLendingService: BookLendingService
  ) {}
  ngOnInit(): void {
    this.username = this.sessionService.username;
    this.receiveUserForm();
    this.activeItemIndex = 0;
    this.setHandsTab();
  }

  receiveUserForm() {
    this.httpClient.get(`${BASE_URL}/${this.username}`).subscribe((u) => {
      this.userForm = u;
    });
  }
}
