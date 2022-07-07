import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, EmailFilter } from '@model';
import { ApiService, QueryParams } from '@service/api.service';

@Injectable({ providedIn: 'root' })
export class EmailService extends ApiService<Email, EmailFilter, string> {
  constructor(protected http: HttpClient) {
    super(http, 'email/');
  }

  getQueryParams(filter: EmailFilter): QueryParams {
    const queryParams: QueryParams = {};

    // TODO add fromDate & toDate

    if (filter.emailType) {
      queryParams['emailType'] = filter.emailType;
    }

    if (filter.emailStatus) {
      queryParams['emailStatus'] = filter.emailStatus;
    }

    if (filter.to && filter.to.trim().length > 0) {
      queryParams['to'] = filter.to;
    }

    return queryParams;
  }
}
