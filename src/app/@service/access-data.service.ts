import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessData } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccessDataService extends ApiService {
  constructor(protected http: HttpClient) {
    super(http, 'access-data/');
  }

  getAccessData(): Observable<AccessData> {
    return this.get();
  }
}
