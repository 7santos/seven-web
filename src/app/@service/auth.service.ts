import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Login, SocialProvider } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService<Login, void> {
  constructor(protected http: HttpClient, private domSanitizer: DomSanitizer) {
    super(http, 'auth/');
  }

  signIn(login: Login): Observable<Login> {
    return this.post(login, 'signin');
  }

  getGoogleLoginUrl(): SafeUrl {
    const googleLoginUrl = `${environment.apiUri}${environment.oauth2AuthorizationPath}${SocialProvider.GOOGLE}${AppConstants.REDIRECT_URI_QUERY_PARAM}${environment.redirectUri}`;
    return this.domSanitizer.bypassSecurityTrustUrl(googleLoginUrl);
  }
}
