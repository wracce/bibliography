import { Component } from '@angular/core'
import { UserFormService } from '../../services/userform.service'
import { GenderType } from 'src/app/core/models/gender-type'

@Component({
	selector: 'app-userform-create',
	templateUrl: './userform-create.component.html',
	styleUrls: ['./userform-create.component.scss'],
})
export class UserformCreateComponent {
	genderType = ''
	constructor(public userFormService: UserFormService) {}

	genders: { name: string; value: GenderType }[] = [
		{ name: 'Мужской', value: GenderType.MALE },
		{ name: 'Женский', value: GenderType.FEMALE },
	]
	getGenderName(gender: GenderType | undefined) {
		if (gender == null) return ''
		return this.genders.find((e) => gender?.toString() == e.value.toString())?.name || ''
	}

	get form() {
		return this.userFormService.form
	}

	create() {
		this.userFormService.add(this.userFormService.formToObject())
	}

	update() {
		this.userFormService.update(this.userFormService.formToObject())
	}

	// getGenderName() {
	//   let nameS = "";
	//   nameS = this.genders.filter((e) => this.genderType == e.value)[0]?.name|| "";
	//   console.log(this.genderType);

	//   return nameS;
	// }
}
