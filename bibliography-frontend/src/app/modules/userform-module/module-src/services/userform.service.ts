import { Injectable } from '@angular/core';
import { UserFormClientService } from './userform-client.service';
import { UserForm } from 'src/app/core/models/user-form';
import { GenderType } from 'src/app/core/models/gender-type';

@Injectable()
export class UserFormService {
  search = '';
  private _list: UserForm[] = [];

  get list() {
    return this._list;
  }

  constructor(private userFormClientService: UserFormClientService) {}

  receiveData() {
    this.userFormClientService.getAll().subscribe({
      next: (arr) => {
        this._list = [...arr];
      },
    });
  }

  add(userForm: UserForm) {
    this.userFormClientService.create(userForm).subscribe({
      next: () => {
        console.log('Успешно добавлено');
      },
    });
  }

  delete(id: number) {
    this.userFormClientService.delete(id).subscribe({
      next: () => {
        this._list = this._list.filter((e) => e.id !== id);
        console.log('Успешно удаленно');
      },
    });
  }

  update(userForm: UserForm) {
    this.userFormClientService.update(userForm).subscribe({
      next: (e) => {
        console.log('Успешно изменено');
      },
    });
  }

  private addEmptyItem() {
    let userForm = new UserForm();
    userForm.address = '';
    userForm.birthday = new Date();
    userForm.email = '';
    userForm.firstName = '';
    userForm.genderType = GenderType.FEMALE;
    userForm.lastName = '';
    userForm.middleName = '';
    userForm.phoneNumber = '';
    userForm.debt = 0;
    userForm.registrationDate = new Date();
    userForm.userLogin = "";
    this._list.push(userForm);
  }
}
