import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { PermissionService } from '@service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthAdminGuard implements CanActivate {
  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.permissionService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
