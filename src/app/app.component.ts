import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService, TokenStorageService } from '@service';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = '';

  username: string = '';

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

    this.appService
      .getJwtPayload()
      .subscribe((jwtPayload) => (this.username = jwtPayload.name));
  }

  logOut(): void {
    this.sidenav.close();
    this.tokenStorageService.remove();
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.tokenStorageService.exist();
  }
}
