import { UserForm } from "src/app/core/models/user-form";
import { Book } from "src/app/modules/book-module/module-src/models/book";
import { BookReturning } from "./book-returning";

export class BookLending {
  id?: number;
  book?: Book;
  userForm?: UserForm;
  lendingDate?: Date;
  returnDate?: Date;
  bookReturning?: BookReturning;

}
