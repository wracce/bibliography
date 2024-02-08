import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl } from '@angular/forms'

export class Employee {
	id?: number
	username?: string
	password?: string
	createDate?: Date
}

@Component({
	selector: 'app-library-user-page',
	templateUrl: './library-admin-page.component.html',
	styleUrls: ['./library-admin-page.component.scss'],
})
export class LibraryAdminPageComponent {
	username = ''
	password = ''

	name = 'Муниципальное гос библиотека'
	phone = new FormControl('+79271456387')
	email = 'dsds@gmail.ru'
	address = 'Самара, Ленина 14А'
	workDate = '13:00 - 22:00 каждый день'
	days = new FormControl(130)
	cost = new FormControl(120)

	data: Employee[] = [{ createDate: new Date(), id: 1, username: 'manager' }]
	private changedItems = new Set<Employee>()

	isChangeItem(emp: Employee) {
		return this.changedItems.has(emp)
	}

	onValueChange(emp: Employee) {
		this.changedItems.add(emp)
	}

	readonly columns = ['id', 'username', 'createDate', 'actions']
	isOpenPassDialog = false
	isOpenAddEmpDialog = false
	isOpenPassAdminDialog = false

	constructor() {}

	addEmp() {
		const emp = new Employee()
		emp.id = this.data.length
		emp.createDate = new Date()
		this.data.push(emp)
		setTimeout(() => {
			this.isOpenAddEmpDialog = false
		}, 0)
		this.username = ''
		this.password = ''
	}

	save(emp: Employee) {
		this.changedItems.delete(emp)
	}

	update(emp: Employee) {
		this.changedItems.delete(emp)
	}

	delete(emp: Employee) {
		this.data = this.data.filter((val) => val !== emp)
	}
}
