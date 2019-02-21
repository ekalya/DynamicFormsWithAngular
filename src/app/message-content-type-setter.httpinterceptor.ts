import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpError } from './error';

@Injectable()
export class  MessageContentTypeSetter implements HttpInterceptor {
    
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
                                .set('Content-Type', 'application/json; charset=utf-8')
          });

          return next.handle(xhr)
          .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage: HttpError  = {code: 0, message: ''};
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage.message = error.error.message;
                  } else {
                    // server-side error
                    errorMessage.code = error.status;
                    errorMessage.message = error.message;
                  }
                return throwError(errorMessage);
            })
          );
    }
}
