import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private sessionService:SessionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.sessionService.isLoggedIn) {
      console.log("LOGEED");
      console.log("this.sessionService.token");

      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.sessionService.token}`,
        }
      });
    }
    return next.handle(request);
  }
}
