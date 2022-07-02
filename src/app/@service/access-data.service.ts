import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessData } from '@model';
import { BasicApiService } from '@service/basic-api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccessDataService extends BasicApiService {
  constructor(protected http: HttpClient) {
    super(http, 'access-data/');
  }

  getAccessData(): Observable<AccessData> {
    return this.get();
  }
}
