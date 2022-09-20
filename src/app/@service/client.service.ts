import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, ClientFilter } from '@model';
import { ApiService, QueryParams } from './api.service';

@Injectable({ providedIn: 'root' })
export class ClientService extends ApiService<Client, ClientFilter, string> {
  constructor(protected http: HttpClient) {
    super(http, 'client/');
  }

  getQueryParams(filter: ClientFilter): QueryParams {
    const queryParams: QueryParams = {};

    if (filter.search && filter.search.trim().length > 0) {
      queryParams['search'] = filter.search;
    }

    return queryParams;
  }
}
