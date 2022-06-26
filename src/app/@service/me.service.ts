import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountPage } from '@model';
import { BasicApiService } from '@service/basic-api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MeService extends BasicApiService {
  constructor(protected http: HttpClient) {
    super(http, 'me/');
  }

  meAccounts(): Observable<AccountPage> {
    return this.get('accounts');
  }
}
