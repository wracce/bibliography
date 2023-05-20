import { Injectable } from '@angular/core';
import { AuthClientService } from './auth-client.service';
import { User } from '../../models/user';
import { Role } from '../../models/role';
import { Router } from '@angular/router';
import { UserForm } from '../../models/user-form';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response';
import { ErrorMessage } from '../../error/error-message';
import { HttpApiErrorStatus } from '../../error/http-api-error-status';
import { AlertService } from '../../alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _user = new User();
  private _isLoggedIn = false;

  setUsernameAndPassword(username: string, password: string) {
    this._user.password = password;
    this._user.username = username;
    this._isLoggedIn = false;
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  get token() {
    return this._user.token;
  }

  get role() {
    return this._user.role;
  }

  get username() {
    return this._user.username;
  }
  constructor(
    private alertService: AlertService,
    private authClientService: AuthClientService,
    private router: Router
  ) {}

  signIn() {
    if (this._user.username && this._user.password)
      this.authClientService
        .authenticate({
          login: this._user.username,
          password: this._user.password,
        })
        .subscribe({
          next: (val) => {
            this.updateUser(val);
          },
          error: (err) => {
            if (err instanceof HttpErrorResponse) {
              let errMsg = err.error as ErrorMessage;
              if (
                errMsg.statusCode == HttpApiErrorStatus.AUTH_USER_NOT_VALID
              ) {
                this.alertService.showError('Неверный логин или пароль');
              }
            }
          },
        });
  }

  signUp(login: string, password: string, userForm: UserForm) {
    this.authClientService
      .register({
        login,
        password,
        userForm,
      })
      .subscribe({
        next: (val) => {
          this.setUsernameAndPassword(login, password);
          this.updateUser(val);
        },
      });
  }

  logout() {
    this.authClientService.logout().subscribe({
      next: () => {
        console.info('Success logout');
        this._isLoggedIn = false;
        this._user = new User();
        this.router.navigate(['/sign-in']);
      },
    });
  }

  private updateUser(res: AuthResponse): void {
    this._user.token = res.access_token;
    this._user.role = res.role;
    this._isLoggedIn = true;

    switch (res.role) {
      case Role.MANAGER:
        this.router.navigate(['/manager']);
        break;
      case Role.ADMIN:
        this.router.navigate(['/administrator']);
        break;
      case Role.USER:
        this.router.navigate(['/dashboard']);
        break;

      default:
        this.router.navigate(['/help']);
        break;
    }
  }
}
