import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from '../../../../core/models/genre';

const BASE_URL = environment.API_URL + "/genre"
@Injectable()
export class GenreClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(BASE_URL);
  }

  create(genre:Genre):Observable<Genre> {
    return this.httpClient.post<Genre>(BASE_URL,genre);
  }

  update(genre:Genre):Observable<Genre> {
    return this.httpClient.put<Genre>(BASE_URL,genre);
  }

  delete(id:number):Observable<Genre[]> {
    return this.httpClient.delete<Genre[]>(`${BASE_URL}/${id}`);
  }




}
