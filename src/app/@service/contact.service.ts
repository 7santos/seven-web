import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '@model';
import { ApiService } from '@service/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService extends ApiService {
  constructor(protected http: HttpClient) {
    super(http, 'contact/');
  }

  create(contact: Contact): Observable<Contact> {
    return this.post(contact, 'add');
  }
}
