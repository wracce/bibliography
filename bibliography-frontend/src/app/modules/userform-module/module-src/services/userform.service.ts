import { Injectable } from '@angular/core'
import { UserFormClientService } from './userform-client.service'
import { UserForm } from 'src/app/core/models/user-form'
import { GenderType } from 'src/app/core/models/gender-type'
import { AlertService } from 'src/app/core/alert/alert.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthClientService } from 'src/app/core/security/services/auth-client.service'

@Injectable()
export class UserFormService {
	isCreateDialog = false
	isOpenDialog = false
	search = ''
	private _list: UserForm[] = []
	private password?: string
	get list() {
		return this._list
	}

	constructor(
		private userFormClientService: UserFormClientService,
		private alertService: AlertService,
		private authClientService: AuthClientService
	) {}

	receiveData() {
		this.userFormClientService.getAll().subscribe({
			next: (arr) => {
				this._list = [...arr]
			},
		})
	}

	add(userForm: UserForm) {
		this.authClientService
			.register({
				username: userForm.userUsername || '',
				password: this.password || '',
				userForm: userForm,
			})
			.subscribe({
				next: () => {
					if (userForm.userUsername)
						this.userFormClientService.getByUserName(userForm.userUsername).subscribe({
							next: (p) => {
								this._list.push(p)
								this.isOpenDialog = false
							},
						})
				},
				error: (e) => {
					this.alertService.showError('Такая запись уже существует')
				},
			})
	}

	delete(id: number) {
		this.userFormClientService.delete(id).subscribe({
			next: () => {
				this._list = this._list.filter((e) => e.id !== id)
				console.log('Успешно удаленно')
			},
		})
	}

	update(userForm: UserForm) {
		this.userFormClientService.update(userForm).subscribe({
			next: (p) => {
				let item = this._list.find((e) => p.id === e.id)
				if (item) {
					item.id = p.id
					item.address = p.address
					item.birthday = p.birthday
					item.email = p.email
					item.firstName = p.firstName
					item.genderType = p.genderType
					item.lastName = p.lastName
					item.middleName = p.middleName
					item.phoneNumber = p.phoneNumber
					item.debt = p.debt
					item.registrationDate = p.registrationDate
					item.userUsername = p.userUsername
				}
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	public getEmptyItem(): UserForm {
		let userForm = new UserForm()
		userForm.address = ''
		userForm.birthday = undefined
		userForm.email = ''
		userForm.firstName = ''
		userForm.genderType = undefined
		userForm.lastName = ''
		userForm.middleName = ''
		userForm.phoneNumber = ''
		userForm.debt = 0
		userForm.registrationDate = new Date()
		userForm.userUsername = ''
		return userForm
	}

	form = new FormGroup({
		id: new FormControl<number | undefined>(undefined),
		address: new FormControl('', [Validators.required]),
		birthday: new FormControl<Date | null>(null, [Validators.required]),
		email: new FormControl('', [Validators.required]),
		firstName: new FormControl('', [Validators.required]),
		genderType: new FormControl<GenderType | null>(null, [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		middleName: new FormControl('', [Validators.required]),
		phoneNumber: new FormControl('', [Validators.required]),
		username: new FormControl('', [Validators.required]),
		password: new FormControl(''),
		debt: new FormControl(0, [Validators.required]),
		registrationDate: new FormControl(new Date(), [Validators.required]),
	})

	formToObject(): UserForm {
		let userForm = new UserForm()
		userForm.id = this.form.value.id === null ? undefined : this.form.value.id
		userForm.birthday = this.form.value.birthday === null ? undefined : this.form.value.birthday
		userForm.genderType =
			this.form.value.genderType === null ? undefined : this.form.value.genderType
		userForm.firstName = this.form.value.firstName || ''
		userForm.lastName = this.form.value.lastName || ''
		userForm.middleName = this.form.value.middleName || ''
		userForm.userUsername = this.form.value.username || ''
		userForm.address = this.form.value.address || ''
		userForm.phoneNumber = this.form.value.phoneNumber || ''
		userForm.email = this.form.value.email || ''
		userForm.debt = this.form.value.debt!
		userForm.registrationDate = this.form.value.registrationDate!
		this.password = this.form.value.password === null ? undefined : this.form.value.password
		return userForm
	}

	objectToForm(value: UserForm): void {
		// write UserForm to form group
		this.form.patchValue({
			id: value.id,
			address: value.address,
			birthday: value.birthday,
			email: value.email,
			firstName: value.firstName,
			genderType: value.genderType,
			lastName: value.lastName,
			middleName: value.middleName,
			phoneNumber: value.phoneNumber,
			username: value.userUsername,
			debt: value.debt,
			registrationDate: value.registrationDate,
		})
		console.log(this.form)
	}

	clearForm(): void {
		this.objectToForm(this.getEmptyItem())
	}
}
