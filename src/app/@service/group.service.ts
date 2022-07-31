import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group, GroupFilter } from '@model';
import { ApiService, QueryParams } from './api.service';

@Injectable({ providedIn: 'root' })
export class GroupService extends ApiService<Group, GroupFilter, string> {
  constructor(protected http: HttpClient) {
    super(http, 'group/');
  }

  getQueryParams(filter: GroupFilter): QueryParams {
    const queryParams: QueryParams = {};

    if (filter.code) {
      queryParams['code'] = `${filter.code}`;
    }

    if (filter.quota) {
      queryParams['quota'] = `${filter.quota}`;
    }

    return queryParams;
  }
}
