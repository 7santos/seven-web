import { Injectable } from '@angular/core';
import { JwtPayload } from '@model';
import { TranslateService } from '@ngx-translate/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private title = new BehaviorSubject<string>('');

  private title$ = this.title.asObservable();

  private jwtPayload = new BehaviorSubject<JwtPayload>({} as JwtPayload);

  private jwtPayload$ = this.jwtPayload.asObservable();

  constructor(private translateService: TranslateService) {}

  setTitle(title: string): void {
    setTimeout(() => {
      this.title.next(this.translateService.instant(title));
    }, 0);
  }

  getTitle(): Observable<string> {
    return this.title$;
  }

  setJwtPayload(jwtToken: string): void {
    setTimeout(() => {
      const jwtPayload: JwtPayload = jwt_decode.default(jwtToken);
      this.jwtPayload.next(jwtPayload);
    }, 0);
  }

  getJwtPayload(): Observable<JwtPayload> {
    return this.jwtPayload$;
  }
}
