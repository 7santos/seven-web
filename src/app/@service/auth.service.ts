import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Login, SocialProvider } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService<Login, void> {
  constructor(protected http: HttpClient) {
    super(http, 'auth/');
  }

  signIn(login: Login): Observable<Login> {
    return this.post(login, 'signin');
  }

  getGoogleLoginUrl(): string {
    return `${environment.apiUri}${environment.oauth2AuthorizationPath}${SocialProvider.GOOGLE}${AppConstants.REDIRECT_URI_QUERY_PARAM}${environment.redirectUri}`;
  }
}
