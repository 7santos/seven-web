import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService<Login, void> {
  constructor(protected http: HttpClient) {
    super(http, 'auth/');
  }

  signIn(login: Login): Observable<Login> {
    return this.post(login, 'signin');
  }
}
