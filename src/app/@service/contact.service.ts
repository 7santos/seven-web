import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '@model';
import { BasicApiService } from '@service/basic-api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService extends BasicApiService {
  constructor(protected http: HttpClient) {
    super(http, 'contact/');
  }

  create(contact: Contact): Observable<Contact> {
    return this.post(contact, 'add');
  }
}
