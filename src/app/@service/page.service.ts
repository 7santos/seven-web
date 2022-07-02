import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookPage } from '@model';
import { BasicApiService } from '@service/basic-api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageService extends BasicApiService {
  constructor(protected http: HttpClient) {
    super(http, 'page/');
  }

  page(): Observable<FacebookPage> {
    return this.get();
  }
}
