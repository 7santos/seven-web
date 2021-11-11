import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '@model';
import { AppService, AuthService, TokenStorageService } from '@service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('login.title');
  }

  signIn(login: Login): void {
    this.authService.signIn(login).subscribe((data) => {
      this.tokenStorageService.set(data.accessToken);
      this.appService.setJwtPayload(data.accessToken);
      this.router.navigate(['/home']);
    });
  }
}
