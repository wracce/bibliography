import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

const BASE_URL = environment.API_URL + "/book"
@Injectable()
export class BookClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Book[]> {
    return this.httpClient.get<Book[]>(BASE_URL).pipe(map(arr=>{
      arr.forEach(e=> {
      })
      return arr;
    }));
  }

  create(book:Book):Observable<Book> {
    return this.httpClient.post<Book>(BASE_URL,book).pipe(map(val=>{
      return val;
    }));
  }

  update(book:Book):Observable<Book> {
    return this.httpClient.put<Book>(BASE_URL,book).pipe(map(val=>{
    return val;
  }));
  }

  delete(id:number):Observable<Book[]> {
    return this.httpClient.delete<Book[]>(`${BASE_URL}/${id}`);
  }




}
