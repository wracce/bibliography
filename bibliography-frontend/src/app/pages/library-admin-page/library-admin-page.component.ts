import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Employee {
  id?: number;
  login?: string;
  password?: string;
  createDate?: Date;
}

@Component({
  selector: 'app-library-user-page',
  templateUrl: './library-admin-page.component.html',
  styleUrls: ['./library-admin-page.component.scss'],
})
export class LibraryAdminPageComponent {
  login = '';
  password = '';

  name = 'Библиотека имени Ленина';
  phone = '+79271456387';
  email = 'bestlibrary@ya.ru';
  address = 'пр-т. Ленина, 14А, Самара, Самарская обл., 443110';
  workDate = 'Каждый день с 10:00 до 18:00';
  days = 30;
  cost = 120;

  data: Employee[] = [{ createDate: new Date(), id: 1, login: 'manager' }];
  private changedItems = new Set<Employee>();

  isChangeItem(emp: Employee) {
    return this.changedItems.has(emp);
  }

  onValueChange(emp: Employee) {
    this.changedItems.add(emp);
  }

  readonly columns = ['id', 'login', 'createDate', 'actions'];
  isOpenPassDialog = false;
  isOpenAddEmpDialog = false;
  isOpenPassAdminDialog = false;

  constructor() {}

  addEmp() {
    let emp = new Employee();
    emp.id = this.data.length;
    emp.createDate = new Date();
    this.data.push(emp);
    this.isOpenAddEmpDialog = false;
    this.login = '';
    this.password = '';
  }

  save(emp: Employee) {
    this.changedItems.delete(emp);
  }

  update(emp: Employee) {
    this.changedItems.delete(emp);
  }

  delete(emp: Employee) {
    this.data = this.data.filter((val) => val !== emp);
  }
}
