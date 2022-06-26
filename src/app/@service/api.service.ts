import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Prime } from '@model';

export interface QueryParams {
  [name: string]: string | string[];
}

export abstract class ApiService<E extends Prime, F, ID> {
  constructor(protected httpClient: HttpClient, public baseUrl: string) {}

  abstract getQueryParams(filter: F): QueryParams;
}
