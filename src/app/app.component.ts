import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService, TokenStorageService } from '@service';
import * as jwt_decode from 'jwt-decode';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = '';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    public translate: TranslateService,
    private appService: AppService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {
    translate.addLangs([AppConstants.DEFAULT_LANG]);
    translate.setDefaultLang(AppConstants.DEFAULT_LANG);
  }

  ngOnInit(): void {
    this.appService.getTitle().subscribe((appTitle) => (this.title = appTitle));
  }

  logOut(): void {
    this.sidenav.close();
    this.tokenStorageService.remove();
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.tokenStorageService.exist();
  }

  getUsername(): string {
    if (!this.isAuthenticated) {
      return '';
    }

    const token: any = jwt_decode.default(this.tokenStorageService.get());

    if (token && token.username) {
      return token.username;
    }

    return '';
  }
}
