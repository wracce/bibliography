import { Component } from '@angular/core'
import { PublisherService } from '../../services/publisher.service'
import { Publisher } from '../../models/publisher'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-publisher-create',
	templateUrl: './publisher-create.component.html',
	styleUrls: ['./publisher-create.component.scss'],
})
export class PublisherCreateComponent {
	constructor(public publisherService: PublisherService) {}

	get form() {
		return this.publisherService.form
	}

	create() {
		this.publisherService.add(this.publisherService.formToObject())
	}

	update() {
		this.publisherService.update(this.publisherService.formToObject())
	}
}
