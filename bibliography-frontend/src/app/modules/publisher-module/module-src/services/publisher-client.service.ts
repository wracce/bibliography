import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publisher } from '../models/publisher';

const BASE_URL = environment.API_URL + "/publisher"
@Injectable()
export class PublisherClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(BASE_URL);
  }

  create(publisher:Publisher):Observable<Publisher> {
    return this.httpClient.post<Publisher>(BASE_URL,publisher);
  }

  update(publisher:Publisher):Observable<Publisher> {
    return this.httpClient.put<Publisher>(BASE_URL,publisher);
  }

  delete(id:number):Observable<Publisher[]> {
    return this.httpClient.delete<Publisher[]>(`${BASE_URL}/${id}`);
  }




}
