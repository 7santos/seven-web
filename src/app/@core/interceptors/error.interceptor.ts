import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService, PermissionService } from '@service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private permissionService: PermissionService,
    private router: Router,
    private toastService: ToastService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        if ([401, 403].indexOf(httpErrorResponse.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.permissionService.clearToken();
          this.router.navigate(['/']);
        }

        let errorMessage = '';

        if (httpErrorResponse.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = httpErrorResponse.error.message;
        } else if (httpErrorResponse.error) {
          // server-side error
          errorMessage =
            httpErrorResponse.error.message || httpErrorResponse.message;
          this.toastService.showError(errorMessage);
        } else {
          errorMessage = httpErrorResponse.toString();
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
