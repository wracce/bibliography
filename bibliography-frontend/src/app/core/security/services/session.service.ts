import { Injectable } from '@angular/core'
import { AuthClientService } from './auth-client.service'
import { User } from '../../models/user'
import { Role } from '../../models/role'
import { Router } from '@angular/router'
import { UserForm } from '../../models/user-form'
import { catchError, of } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { AuthResponse } from '../models/auth-response'
import { ErrorMessage } from '../../error/error-message'
import { HttpApiErrorStatus } from '../../error/http-api-error-status'
import { AlertService } from '../../alert/alert.service'
import { AuthStorageService } from './auth-storage.service'

@Injectable({
	providedIn: 'root',
})
export class SessionService {
	private _user = new User()
	private _isLoggedIn = false
	private _errorMsg = ''

	setUsernameAndPassword(username: string, password: string) {
		this._user.password = password
		this._user.username = username
		this._isLoggedIn = false
	}

	get isLoggedIn() {
		return this._isLoggedIn
	}

	get access_token() {
		return this._user.access_token
	}

	get refresh_token() {
		return this._user.refresh_token
	}

	get role() {
		return this._user.role
	}

	get username() {
		return this._user.username
	}

	get errorMsg() {
		return this._errorMsg
	}

	constructor(
		private alertService: AlertService,
		private authClientService: AuthClientService,
		private authStorageService: AuthStorageService,
		private router: Router
	) {
		if (this.authStorageService.user) {
			this._user = this.authStorageService.user
			this._isLoggedIn = true
		}
	}

	signIn() {
		if (this._user.username && this._user.password)
			this.authClientService
				.authenticate({
					username: this._user.username,
					password: this._user.password,
				})
				.subscribe({
					next: (val) => {
						this.updateUser(val)
						this._errorMsg = ''
					},
					error: (err) => {
						if (err instanceof HttpErrorResponse) {
							const errMsg = err.error as ErrorMessage
							if (errMsg.statusCode == HttpApiErrorStatus.AUTH_USER_NOT_VALID) {
								const errorStr = 'Неверный логин или пароль'
								this.alertService.showError(errorStr)
								this._errorMsg = errorStr
							}
						}
					},
				})
	}

	signUp(username: string, password: string, userForm: UserForm) {
		this.authClientService
			.register({
				username,
				password,
				userForm,
			})
			.subscribe({
				next: (val) => {
					this.setUsernameAndPassword(username, password)
					this.updateUser(val)
				},
			})
	}

	refresh() {
		this.authClientService.refresh().subscribe({
			next: (val) => this.updateUser(val),
		})
	}

	logout() {
		this.authClientService.logout().subscribe({
			next: () => {
				this._isLoggedIn = false
				this._user = new User()
				this.authStorageService.user = null
				this.router.navigate(['/sign-in'])
			},
		})
	}

	private updateUser(res: AuthResponse): void {
		this._user.access_token = res.access_token
		this._user.refresh_token = res.refresh_token
		this._user.role = res.role
		this._isLoggedIn = true

		this.authStorageService.user = this._user
		switch (res.role) {
			case Role.MANAGER:
				this.router.navigate(['/manager'])
				break
			case Role.ADMIN:
				this.router.navigate(['/administrator'])
				break
			case Role.USER:
				this.router.navigate(['/dashboard'])
				break

			default:
				this.router.navigate(['/help'])
				break
		}
	}
}
