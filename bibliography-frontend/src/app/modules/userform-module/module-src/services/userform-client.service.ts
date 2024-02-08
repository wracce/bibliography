import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { UserForm } from 'src/app/core/models/user-form'
import { environment } from 'src/environments/environment'

const BASE_URL = environment.API_URL + '/userform'
@Injectable()
export class UserFormClientService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<UserForm[]> {
		return this.httpClient.get<UserForm[]>(BASE_URL).pipe(
			map((arr) => {
				arr.forEach((e) => {
					e.birthday = new Date(e.birthday!)
					e.registrationDate = new Date(e.registrationDate!)
				})
				return arr
			})
		)
	}

	getByUserName(username: string): Observable<UserForm> {
		return this.httpClient.get<UserForm>(BASE_URL + '/' + username).pipe(
			map((e) => {
				e.birthday = new Date(e.birthday!)
				e.registrationDate = new Date(e.registrationDate!)
				return e
			})
		)
	}

	create(userForm: UserForm): Observable<UserForm> {
		return this.httpClient.post<UserForm>(BASE_URL, userForm).pipe(
			map((val) => {
				val.birthday = new Date(val.birthday!)
				val.registrationDate = new Date(val.registrationDate!)
				return val
			})
		)
	}

	update(userForm: UserForm): Observable<UserForm> {
		return this.httpClient.put<UserForm>(BASE_URL, userForm).pipe(
			map((val) => {
				val.birthday = new Date(val.birthday!)
				val.registrationDate = new Date(val.registrationDate!)
				return val
			})
		)
	}

	delete(id: number): Observable<UserForm[]> {
		return this.httpClient.delete<UserForm[]>(`${BASE_URL}/${id}`)
	}
}
