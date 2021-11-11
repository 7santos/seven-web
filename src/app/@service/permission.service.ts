import { Injectable } from '@angular/core';
import { JwtPayload, Role } from '@model';
import { TokenStorageService } from '@service';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(private tokenStorageService: TokenStorageService) {}

  isLoggedIn(): boolean {
    return this.tokenStorageService.exist();
  }

  isAdmin(): boolean {
    return this.hasRole(Role.ROLE_ADMIN);
  }

  isUser(): boolean {
    return this.hasRole(Role.ROLE_USER);
  }

  storeToken(token: string): void {
    this.tokenStorageService.set(token);
  }

  clearToken(): void {
    this.tokenStorageService.remove();
  }

  getPayload(): JwtPayload | null {
    if (!this.isLoggedIn()) {
      return null;
    }

    return this.decodeToken();
  }

  getToken(): string | null {
    if (!this.isLoggedIn()) {
      return null;
    }

    return this.tokenStorageService.get();
  }

  private hasRole(role: Role): boolean {
    if (!this.isLoggedIn()) {
      return false;
    }

    const token = this.decodeToken();
    return token && token.roles && token.roles.includes(role);
  }

  private decodeToken(): JwtPayload {
    return jwt_decode.default(this.tokenStorageService.get());
  }
}
