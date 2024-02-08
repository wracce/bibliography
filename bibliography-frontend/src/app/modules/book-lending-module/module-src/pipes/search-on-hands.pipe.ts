import { Pipe, PipeTransform } from '@angular/core';
import { UserForm } from 'src/app/core/models/user-form';
import { BookLending } from 'src/app/modules/book-lending-module/module-src/models/book-lending';

@Pipe({
  name: 'searchOnHands'
})
export class SearchOnHandsPipe implements PipeTransform {

  transform(bookLendings: BookLending[], search: boolean | null): BookLending[] {
    console.log(search);

    if (search===true)
    return bookLendings.filter((b) => b.bookReturning == null || b.bookReturning?.returnDate == null );
    else if (search == null)
    return bookLendings.filter((b) => b.bookReturning != null && b.bookReturning.returnDate != null );
    else
    return bookLendings;
  }

}
