import { Injectable } from '@angular/core';
import { Permission } from '@model';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private title = new BehaviorSubject<string>('');

  private title$ = this.title.asObservable();

  private permission = new BehaviorSubject<Permission>(
    new Permission(false, false, false, '')
  );

  private permission$ = this.permission.asObservable();

  private showHeader = new BehaviorSubject<boolean>(true);

  private showHeader$ = this.showHeader.asObservable();

  constructor(private translateService: TranslateService) {}

  setTitle(title: string): void {
    setTimeout(() => {
      this.title.next(this.translateService.instant(title));
    }, 0);
  }

  getTitle(): Observable<string> {
    return this.title$;
  }

  setPermission(permission: Permission): void {
    setTimeout(() => {
      this.permission.next(permission);
    }, 0);
  }

  getPermission(): Observable<Permission> {
    return this.permission$;
  }

  setShowHeader(showHeader: boolean): void {
    setTimeout(() => {
      this.showHeader.next(showHeader);
    }, 0);
  }

  getShowHeader(): Observable<boolean> {
    return this.showHeader$;
  }
}
