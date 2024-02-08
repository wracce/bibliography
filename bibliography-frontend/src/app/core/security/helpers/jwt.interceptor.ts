import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, delay, map, of, retry, retryWhen, take, throwError } from 'rxjs';
import { SessionService } from '../services/session.service';
import { ErrorMessage } from '../../error/error-message';
import { HttpApiErrorStatus } from '../../error/http-api-error-status';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(this.sessionService.isLoggedIn);

    if (this.sessionService.isLoggedIn) {
      const token = request.url.includes("/refresh-token")?this.sessionService.refresh_token:this.sessionService.access_token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        const error = err.error as ErrorMessage;
        if(error.statusCode == HttpApiErrorStatus.AUTH_EXPIRED_TOKEN) {
          this.sessionService.refresh();
          return throwError(()=> err);
        }
        return of();
      }),
      retry(1)
    );
  }
}
