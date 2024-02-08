import { Injectable } from '@angular/core'
import { User } from '../../models/user'

@Injectable({
	providedIn: 'root',
})
export class AuthStorageService {
	public get user(): User | null {
		const item = localStorage.getItem('user')
		console.log(item)

		return item ? (JSON.parse(item) as User) : null
	}
	public set user(value: User | null) {
		console.log(value)

		if (value) localStorage.setItem('user', JSON.stringify(value))
		else localStorage.removeItem('user')
	}
}
