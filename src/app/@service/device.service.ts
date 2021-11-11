import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookLogin } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService extends ApiService<FacebookLogin, void> {
  constructor(protected http: HttpClient) {
    super(http, 'device/');
  }

  login(): Observable<FacebookLogin> {
    return this.post({} as FacebookLogin, 'login');
  }
}
