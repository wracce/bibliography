import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookAdding } from '../models/book-adding';

const BASE_URL = environment.API_URL + "/book-adding"
@Injectable()
export class BookAddingClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<BookAdding[]> {
    return this.httpClient.get<BookAdding[]>(BASE_URL).pipe(map(arr=>{
      arr.forEach(e=> {
        e.date = new Date(e.date!);
      })
      return arr;
    }));
  }

  create(bookAdding:BookAdding):Observable<BookAdding> {
    return this.httpClient.post<BookAdding>(BASE_URL,bookAdding);
  }

  update(bookAdding:BookAdding):Observable<BookAdding> {
    return this.httpClient.put<BookAdding>(BASE_URL,bookAdding);
  }

  delete(id:number):Observable<BookAdding[]> {
    return this.httpClient.delete<BookAdding[]>(`${BASE_URL}/${id}`);
  }




}
