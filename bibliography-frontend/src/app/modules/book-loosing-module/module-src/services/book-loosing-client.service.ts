import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookLoosing } from '../models/book-loosing';

const BASE_URL = environment.API_URL + "/book-loosing"
@Injectable()
export class BookLoosingClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<BookLoosing[]> {
    return this.httpClient.get<BookLoosing[]>(BASE_URL).pipe(map(arr=>{
      arr.forEach(e=> {
        e.date = new Date(e.date!);
      })
      return arr;
    }));
  }

  create(bookLoosing:BookLoosing):Observable<BookLoosing> {
    return this.httpClient.post<BookLoosing>(BASE_URL,bookLoosing);
  }

  update(bookLoosing:BookLoosing):Observable<BookLoosing> {
    return this.httpClient.put<BookLoosing>(BASE_URL,bookLoosing);
  }

  delete(id:number):Observable<BookLoosing[]> {
    return this.httpClient.delete<BookLoosing[]>(`${BASE_URL}/${id}`);
  }




}
