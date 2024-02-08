import { Injectable } from '@angular/core'
import { PublisherClientService } from './publisher-client.service'
import { Publisher } from '../models/publisher'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AlertService } from 'src/app/core/alert/alert.service'

@Injectable()
export class PublisherService {
	isCreateDialog = false
	isOpenDialog = false
	search = ''
	private _list: Publisher[] = []

	get list() {
		return this._list
	}

	constructor(
		private publisherClientService: PublisherClientService,
		private alertService: AlertService
	) {}

	receiveData() {
		this.publisherClientService.getAll().subscribe({
			next: (arr) => {
				this._list = [...arr]
			},
		})
	}

	add(publisher: Publisher) {
		this.publisherClientService.create(publisher).subscribe({
			next: (p) => {
				this._list.push(p)
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	delete(id: number) {
		this.publisherClientService.delete(id).subscribe({
			next: () => {
				this._list = this._list.filter((e) => e.id !== id)
				console.log('Успешно удаленно')
			},
		})
	}

	update(publisher: Publisher) {
		this.publisherClientService.update(publisher).subscribe({
			next: (p) => {
				let item = this._list.find((e) => p.id === e.id)
				if (item) {
					item.address = p.address
					item.phoneNumber = p.phoneNumber
					item.email = p.email
					item.name = p.name
					item.id = p.id
				}
				this.isOpenDialog = false
			},
			error: (e) => {
				this.alertService.showError('Такая запись уже существует')
			},
		})
	}

	public getEmptyItem(): Publisher {
		let publisher = new Publisher()
		publisher.address = ''
		publisher.name = ''
		publisher.email = ''
		publisher.phoneNumber = ''
		return publisher
	}

	form = new FormGroup({
		id: new FormControl<number | undefined>(undefined),
		name: new FormControl('', [Validators.required]),
		address: new FormControl('', [Validators.required]),
		phoneNumber: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required]),
	})

	formToObject(): Publisher {
		let publisher = new Publisher()
		publisher.id = this.form.value.id!
		publisher.name = this.form.value.name || ''
		publisher.address = this.form.value.address || ''
		publisher.phoneNumber = this.form.value.phoneNumber || ''
		publisher.email = this.form.value.email || ''
		return publisher
	}

	objectToForm(value: Publisher): void {
		// write Publisher to form group
		this.form.patchValue({
			address: value.address || '',
			phoneNumber: value.phoneNumber || '',
			email: value.email || '',
			name: value.name || '',
			id: value.id,
		})
		console.log(this.form)
	}

	clearForm(): void {
		this.objectToForm(this.getEmptyItem())
	}
}
