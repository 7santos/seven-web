import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '@service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenStorageService.exist()) {
      const headers = request.headers.set(
        'Authorization',
        `Bearer ${this.tokenStorageService.get()}`
      );

      const requestClone = request.clone({ headers });
      return next.handle(requestClone);
    }

    return next.handle(request);
  }
}
