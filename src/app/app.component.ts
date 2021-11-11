import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService, PermissionService } from '@service';
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
    private permissionService: PermissionService,
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
    this.permissionService.clearToken();
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.permissionService.isLoggedIn();
  }

  getUsername(): string {
    const payload = this.permissionService.getPayload();
    return payload?.name ? payload.name : '';
  }
}
