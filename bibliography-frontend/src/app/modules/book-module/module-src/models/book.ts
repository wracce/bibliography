import { Author } from "src/app/modules/author-module/module-src/models/author";
import { Genre } from "src/app/modules/genre-module/module-src/models/genre";
import { Publisher } from "src/app/modules/publisher-module/module-src/models/publisher";

export class Book {
  id?: number;
  name?:string;
  edition?:number;
  editionYear?: number
  author?:Author;
  publisher?:Publisher;
  genre?:Genre;
  isbn?:string;
  desc?:string;
  addingDate?:Date;
  instanceCount?:number;
  issuedCount?:number;
}
