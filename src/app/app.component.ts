import {
  AfterContentInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Permission } from '@model';
import { TranslateService } from '@ngx-translate/core';
import { AppService, LoaderService, PermissionService } from '@service';
import { Subject, takeUntil } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  title: string = '';

  permission: Permission = new Permission(false, false, false, '');

  showHeader: boolean = true;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    public translate: TranslateService,
    public loaderService: LoaderService,
    private appService: AppService,
    private permissionService: PermissionService,
    private router: Router
  ) {
    translate.addLangs([AppConstants.DEFAULT_LANG]);
    translate.setDefaultLang(AppConstants.DEFAULT_LANG);
  }

  ngOnInit(): void {
    this.appService
      .getTitle()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((appTitle) => (this.title = appTitle));

    this.appService
      .getPermission()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((permission) => {
        this.permission = permission;
      });

    this.appService
      .getShowHeader()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((showHeader) => (this.showHeader = showHeader));
  }

  ngAfterContentInit(): void {
    this.permission.isAuthenticated = this.permissionService.isLoggedIn();
    this.permission.isAdmin = this.permissionService.isAdmin();
    this.permission.isUser = this.permissionService.isUser();
    this.permission.username = this.permissionService.getUserName();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  logOut(): void {
    this.sidenav.close();
    this.permissionService.clearToken();
  }

  navigate(path: string): void {
    this.sidenav.close();
    this.router.navigate([path]);
  }
}
