import { Pipe, PipeTransform } from '@angular/core';
import { UserForm } from 'src/app/core/models/user-form';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(userForms: UserForm[], search: string): UserForm[] {
    search = search.trim().toLowerCase();

    if (search.trim() === '') {
      return userForms;
    }

    return userForms.filter((v) => this.foundSearch(v, search));
  }

  private foundSearch(userForm: UserForm, search: string): boolean {
    let answer = false;
    let searchStrings = [
      userForm.userLogin||"",
      '' + userForm.firstName + userForm.lastName + userForm.middleName,
      '' + userForm.firstName + userForm.lastName + userForm.middleName,
      '' + userForm.firstName + userForm.lastName + userForm.middleName,
      '' + userForm.firstName + userForm.lastName + userForm.middleName,
      '' + userForm.firstName + userForm.lastName + userForm.middleName,
      '' + userForm.firstName + userForm.lastName + userForm.middleName,
    ];
    search = search.replaceAll(' ', '').trim();
    searchStrings.forEach((str) => {
      str = str.replaceAll(' ', '').trim();
      if (str.includes(search)) answer= true;
    });

    return answer;
  }
}
