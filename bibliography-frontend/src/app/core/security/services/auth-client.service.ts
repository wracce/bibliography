import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../../models/role';
import { UserForm } from '../../models/user-form';

const BASE_URL = environment.API_URL + '/auth';


@Injectable({
  providedIn: 'root',
})
export class AuthClientService {
  constructor(private httpClient: HttpClient) {}

  authenticate(request:{
    password: string,
    login: string
  }): Observable<{ access_token: string; role: Role }> {
    return this.httpClient.post<{ access_token: string; role: Role }>(
      BASE_URL + '/authenticate',
      request
    );
  }

  register(request:{
    login: string,
    password: string,
    userForm: UserForm
  }): Observable<{ access_token: string; role: Role}> {
    console.log(request);

    return this.httpClient.post<{ access_token: string; role: Role }>(
      BASE_URL + '/register',
      request
    );
  }

  logout(): Observable<any> {
    return this.httpClient.get(BASE_URL + '/logout');
  }
}
