import { GenderType } from './gender-type';

export class UserForm {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthday?: Date;
  address?: String;
  phoneNumber?: string;
  email?: string;
  registrationDate?: Date;
  debt?: number;
  genderType?: GenderType;
  userLogin?: string;
  userId?: number;
}
