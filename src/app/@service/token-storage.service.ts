import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  set(token: string): void {
    localStorage.setItem(AppConstants.ACCESS_TOKEN, token);
  }

  remove(): void {
    localStorage.removeItem(AppConstants.ACCESS_TOKEN);
  }

  get(): string {
    return localStorage[AppConstants.ACCESS_TOKEN];
  }

  exist(): boolean {
    return localStorage[AppConstants.ACCESS_TOKEN];
  }
}
