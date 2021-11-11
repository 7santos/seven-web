import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '@model';
import {
  AppService,
  AuthService,
  ToastService,
  TokenStorageService,
} from '@service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  googleLoginUrl: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.googleLoginUrl = this.authService.getGoogleLoginUrl();
    const token = this.activatedRoute.snapshot.queryParamMap.get('token');
    const error = this.activatedRoute.snapshot.queryParamMap.get('error');

    if (this.tokenStorageService.exist()) {
      this.router.navigate(['/home']);
    } else if (token) {
      this.afterSignIn(token);
    } else if (error) {
      this.toastService.showError(error);
    }
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('login.title');
  }

  signIn(login: Login): void {
    this.authService.signIn(login).subscribe((data) => {
      this.afterSignIn(data.accessToken);
    });
  }

  private afterSignIn(accessToken: string): void {
    this.tokenStorageService.set(accessToken);
    this.router.navigate(['/home']);
  }
}
