import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export abstract class ApiService<T, ID> {
  constructor(protected httpClient: HttpClient, public baseUrl: string) {}

  post(t: T, path: string = ''): Observable<T> {
    return this.httpClient.post<T>(
      `${environment.apiUri}${this.baseUrl}${path}`,
      t
    );
  }
}
