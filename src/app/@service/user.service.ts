import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserFilter } from '@model';
import { ApiService, QueryParams } from '@service/api.service';

@Injectable({ providedIn: 'root' })
export class UserService extends ApiService<User, UserFilter, string> {
  constructor(protected http: HttpClient) {
    super(http, 'user/');
  }

  getQueryParams(filter: UserFilter): QueryParams {
    const queryParams: QueryParams = {};

    if (filter.email && filter.email.trim().length > 0) {
      queryParams['email'] = filter.email;
    }

    if (filter.enabled) {
      queryParams['enabled'] = `${filter.enabled}`;
    }

    if (filter.name && filter.name.trim().length > 0) {
      queryParams['name'] = filter.name;
    }

    return queryParams;
  }
}
