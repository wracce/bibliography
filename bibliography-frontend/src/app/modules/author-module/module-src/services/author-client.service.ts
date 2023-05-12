import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../models/author';

const BASE_URL = environment.API_URL + "/author"
@Injectable()
export class AuthorClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Author[]> {
    return this.httpClient.get<Author[]>(BASE_URL).pipe(map(arr=>{
      arr.forEach(e=> {
        console.log(e.birthday);
        e.birthday = new Date(e.birthday!);
      })
      return arr;
    }));
  }

  create(author:Author):Observable<Author> {
    return this.httpClient.post<Author>(BASE_URL,author);
  }

  update(author:Author):Observable<Author> {
    return this.httpClient.put<Author>(BASE_URL,author);
  }

  delete(id:number):Observable<Author[]> {
    return this.httpClient.delete<Author[]>(`${BASE_URL}/${id}`);
  }




}
