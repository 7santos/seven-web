import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Login } from '@model';
import {
  AppService,
  AuthService,
  PermissionService,
  ToastService,
} from '@service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  googleLoginUrl: string;

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
    this.activatedRoute.queryParams.subscribe((params) =>
      this.checkToken(params)
    );
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('login.title');
  }

  checkToken(params: Params): void {
    if (this.permissionService.isLoggedIn()) {
      this.permissionService.storeToken(null);
    } else if (params['token']) {
      this.permissionService.storeToken(params['token']);
    } else if (params['error']) {
      this.toastService.showError(params['error']);
    }
  }

  signIn(login: Login): void {
    this.authService.signIn(login).subscribe((data) => {
      this.permissionService.storeToken(data.accessToken);
    });
  }
}
