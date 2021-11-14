import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookLogin, LoginStatus } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService extends ApiService {
  constructor(protected http: HttpClient) {
    super(http, 'device/');
  }

  login(): Observable<FacebookLogin> {
    return this.post({}, 'login');
  }

  loginStatus(code: string): Observable<LoginStatus> {
    return this.post({}, `status/${code}`);
  }
}
