import { UserForm } from "src/app/core/models/user-form";
import { Book } from "src/app/modules/book-module/module-src/models/book";

export class Payment {
  id?: number;
  cost?: number;
  date?: Date;
  book?: Book;
  userForm?: UserForm;
}
