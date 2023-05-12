import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiIslandComponent,
  TuiIslandModule,
  TuiRadioBlockModule,
} from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import {
  TuiButtonModule,
  TuiGroupModule,
  TuiLabelModule,
} from '@taiga-ui/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserForm } from 'src/app/core/models/user-form';
import { GenderType } from 'src/app/core/models/gender-type';
import { SessionService } from 'src/app/core/security/services/session.service';
import { CoreModule } from 'src/app/core/core.module';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TuiIslandModule,
    RouterLink,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiRadioBlockModule,
    TuiLabelModule,
    TuiInputDateModule,
    TuiInputPhoneModule,
    CoreModule
  ],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    birthday: new FormControl(new Date(), [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    middleName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    genderType: new FormControl(GenderType.MALE, [Validators.required]),
  });

  get GenderType() {
    return GenderType;
  }

  constructor(private sessionService:SessionService) {
    this.form.markAllAsTouched()
  }

  submit() {
    console.log("submit registration");

    let userForm = new UserForm();
    let login = this.form.value.login!;
    let password = this.form.value.password!;
    userForm.birthday = this.form.value.birthday!;
    userForm.address = this.form.value.address!;
    userForm.email = this.form.value.email!;
    userForm.firstName = this.form.value.firstName!;
    userForm.lastName  = this.form.value.lastName!;
    userForm.middleName = this.form.value.middleName!;
    userForm.phoneNumber = this.form.value.phoneNumber!;
    userForm.genderType = this.form.value.genderType!;

    this.sessionService.signUp(login,password,userForm);
  }
}
