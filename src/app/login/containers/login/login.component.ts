import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Login } from '@model';
import {
  AppService,
  AuthService,
  PermissionService,
  ToastService,
} from '@service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  googleLoginUrl: SafeUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private authService: AuthService,
    private permissionService: PermissionService,
    private toastService: ToastService
  ) {
    this.googleLoginUrl = this.authService.getGoogleLoginUrl();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => this.checkToken(params));
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('login.title');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  checkToken(params: Params): void {
    if (this.permissionService.isLoggedIn()) {
      this.onLoginSuccess(null);
    } else if (params['token']) {
      this.onLoginSuccess(params['token']);
    } else if (params['error']) {
      this.toastService.showError(params['error']);
    }
  }

  signIn(login: Login): void {
    this.authService
      .signIn(login)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.onLoginSuccess(data.accessToken);
      });
  }

  private onLoginSuccess(token: string | null) {
    this.permissionService.storeToken(token);
    this.toastService.showSuccess('login.success');
  }
}
