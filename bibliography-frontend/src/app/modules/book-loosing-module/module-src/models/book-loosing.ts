import { Book } from "src/app/modules/book-module/module-src/models/book";

export class BookLoosing {
  id?: number;
  amount?: number;
  date?: Date;
  reason?: string;
  book?: Book;
}
