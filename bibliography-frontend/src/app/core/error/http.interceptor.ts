import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { AlertService } from '../alert/alert.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const alertService = inject(AlertService);

  return next(req)
  // .pipe(
  //   catchError((response) => {
  //     if (response instanceof HttpErrorResponse)
  //       switch (response.status) {
  //         case 0:
  //           alertService.showError(
  //             'Не удалось установить соединение с сервером!'
  //           );
  //           break;
  //         case 401:
  //           alertService.showError('Необходима авторизация!');
  //           break;
  //         case 403:
  //           alertService.showError('Недостаточно прав доступа!');
  //           break;
  //       }
  //     return throwError(() => respoennse);
  //   })
  // );
};
