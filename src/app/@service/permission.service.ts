import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtPayload, Permission, Role } from '@model';
import { AppService, TokenStorageService } from '@service';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private appService: AppService
  ) {}

  isLoggedIn(): boolean {
    return this.tokenStorageService.exist();
  }

  isAdmin(): boolean {
    return this.hasRole(Role.ROLE_ADMIN);
  }

  isUser(): boolean {
    return this.hasRole(Role.ROLE_USER);
  }

  storeToken(token: string | null): void {
    if (token) {
      this.tokenStorageService.set(token);
    }

    this.appService.setPermission(
      new Permission(true, this.isAdmin(), this.isUser(), this.getUserName())
    );

    this.router.navigate(['/home']);
  }

  clearToken(): void {
    this.tokenStorageService.remove();
    this.appService.setPermission(new Permission(false, false, false, ''));
    this.router.navigate(['/']);
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

  getUserName(): string {
    const payload = this.getPayload();
    return payload?.name ? payload.name : '';
  }

  getSub(): string {
    const payload = this.getPayload();
    return payload?.sub ? payload.sub : '';
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
