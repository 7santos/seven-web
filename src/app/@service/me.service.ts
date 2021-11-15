import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountPage } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MeService extends ApiService {
  constructor(protected http: HttpClient) {
    super(http, 'me/');
  }

  meAccounts(): Observable<AccountPage> {
    return this.get('accounts');
  }
}
