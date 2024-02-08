import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookLendingService } from '../../services/book-lending.service';
import { BookLending } from '../../models/book-lending';
import { UserForm } from 'src/app/core/models/user-form';

@Component({
  selector: 'app-book-lending-list',
  templateUrl: './book-lending-list.component.html',
  styleUrls: ['./book-lending-list.component.scss'],
})
export class BookLendingListComponent implements OnInit, OnChanges {
  @Input()
  userForm?: UserForm;

  private changedItems = new Set<BookLending>();

  constructor(public bookLendingService: BookLendingService) {}

  ngOnInit(): void {
    this.bookLendingService.receiveData();

    this.columns = [
      'id',
      'indexBook',
      'bookName',
      'indexUserForm',
      'userFormFullName',
      'lendingDate',
      'returnDate',
      'returned',
      'returnedDate',
      'actions',
    ];
  }

  ngOnChanges(): void {
    if (this.userForm != undefined) {
      this.columns = [
        'id',
        'indexBook',
        'bookName',
        'lendingDate',
        'returnDate',
        'returned',
        'returnedDate',
      ];
      console.log(this.userForm);

      this.bookLendingService.searchFIO =
        '' +
        this.userForm?.id +
        this.userForm?.lastName +
        this.userForm?.firstName +
        this.userForm?.middleName;
    } else
      this.columns = [
        'id',
        'indexBook',
        'bookName',
        'indexUserForm',
        'userFormFullName',
        'lendingDate',
        'returnDate',
        'returned',
        'returnedDate',
        'actions',
      ];
  }

  get data(): BookLending[] {
    return this.bookLendingService.list;
  }

  columns: string[] = [];

  isLate(bl: BookLending) {
    const retDay = new Date(bl.returnDate!);
    let needDay = new Date(retDay);

    if (bl.bookReturning != null && bl.bookReturning.returnDate != null) {
      needDay = new Date(bl.bookReturning.returnDate);
    } else {
      const nowDay = new Date();
      needDay.setFullYear(nowDay.getFullYear());
      needDay.setMonth(nowDay.getMonth());
      needDay.setDate(nowDay.getDate());
    }
    if (retDay < needDay) return true;
    return false;
  }
}
