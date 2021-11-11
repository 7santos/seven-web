import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PermissionService } from '@service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private permissionService: PermissionService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.permissionService.getToken();

    if (token) {
      const headers = request.headers.set('Authorization', `Bearer ${token}`);
      const requestClone = request.clone({ headers });
      return next.handle(requestClone);
    }

    return next.handle(request);
  }
}
