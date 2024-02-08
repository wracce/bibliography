import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../../models/role';
import { UserForm } from '../../models/user-form';
import { AuthResponse } from '../models/auth-response';

const BASE_URL = environment.API_URL + '/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthClientService {
  constructor(private httpClient: HttpClient) {}

  authenticate(request: {
    password: string;
    username: string;
  }): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      BASE_URL + '/authenticate',
      request
    );
  }

  register(request: {
    username: string;
    password: string;
    userForm: UserForm;
  }): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(BASE_URL + '/register', request);
  }

  refresh(): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(BASE_URL + '/refresh-token',{});
  }

  logout(): Observable<any> {
    return this.httpClient.get(BASE_URL + '/logout');
  }
}
