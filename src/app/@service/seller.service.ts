import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seller, SellerFilter } from '@model';
import { ApiService, QueryParams } from './api.service';

@Injectable({ providedIn: 'root' })
export class SellerService extends ApiService<Seller, SellerFilter, string> {
  constructor(protected http: HttpClient) {
    super(http, 'seller/');
  }

  getQueryParams(filter: SellerFilter): QueryParams {
    const queryParams: QueryParams = {};

    if (filter.name && filter.name.trim().length > 0) {
      queryParams['name'] = filter.name;
    }

    if (filter.active) {
      queryParams['active'] = `${filter.active}`;
    }

    return queryParams;
  }
}
