import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookLending } from '../models/book-lending';

const BASE_URL = environment.API_URL + "/book-lending"
@Injectable()
export class BookLendingClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<BookLending[]> {
    return this.httpClient.get<BookLending[]>(BASE_URL).pipe(map(arr=>{
      arr.forEach(e=> {
        e.lendingDate = new Date(e.lendingDate!);
        e.returnDate = new Date(e.returnDate!);
        if (e.bookReturning)
          e.bookReturning.returnDate = new Date(e.bookReturning.returnDate!);


      })
      return arr;
    }));
  }

  create(bookLending:BookLending):Observable<BookLending> {
    return this.httpClient.post<BookLending>(BASE_URL,bookLending);
  }

  update(bookLending:BookLending):Observable<BookLending> {
    return this.httpClient.put<BookLending>(BASE_URL,bookLending);
  }

  delete(id:number):Observable<BookLending[]> {
    return this.httpClient.delete<BookLending[]>(`${BASE_URL}/${id}`);
  }




}
