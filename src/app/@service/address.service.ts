import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address } from '@model';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class AddressService {
  constructor(protected httpClient: HttpClient) {}

  getAddress(cep: string): Observable<Address> {
    return this.httpClient.get<Address>(
      `${environment.apiUri}address/${cep}/viacep`
    );
  }
}
