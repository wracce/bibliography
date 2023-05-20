import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';

const BASE_URL = environment.API_URL + "/payment"
@Injectable()
export class PaymentClientService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(BASE_URL).pipe(map(arr=>{
      arr.forEach(e=> {
        e.date = new Date(e.date!);
      })
      return arr;
    }));
  }

  create(payment:Payment):Observable<Payment> {
    return this.httpClient.post<Payment>(BASE_URL,payment);
  }

  update(payment:Payment):Observable<Payment> {
    return this.httpClient.put<Payment>(BASE_URL,payment);
  }

  delete(id:number):Observable<Payment[]> {
    return this.httpClient.delete<Payment[]>(`${BASE_URL}/${id}`);
  }




}
