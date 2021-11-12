import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Permission } from '@model';
import { TranslateService } from '@ngx-translate/core';
import { AppService, PermissionService } from '@service';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {
  title: string = '';

  permission: Permission = new Permission(false, false, false, '');

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    public translate: TranslateService,
    private appService: AppService,
    private permissionService: PermissionService
  ) {
    translate.addLangs([AppConstants.DEFAULT_LANG]);
    translate.setDefaultLang(AppConstants.DEFAULT_LANG);
  }

  ngOnInit(): void {
    this.appService.getTitle().subscribe((appTitle) => (this.title = appTitle));

    this.appService.getPermission().subscribe((permission) => {
      this.permission = permission;
    });
  }

  ngAfterContentInit(): void {
    this.permission.isAuthenticated = this.permissionService.isLoggedIn();
    this.permission.isAdmin = this.permissionService.isAdmin();
    this.permission.isUser = this.permissionService.isUser();
    this.permission.username = this.permissionService.getUserName();
  }

  logOut(): void {
    this.sidenav.close();
    this.permissionService.clearToken();
  }
}
