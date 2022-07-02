import { Component, OnDestroy } from '@angular/core';
import { FacebookLogin, FieldType, LoginStatus } from '@model';
import { DeviceService, ToastService } from '@service';
import { MatDialog } from '@angular/material/dialog';
import { FacebookErrorComponent } from '..';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-facebook-device',
  templateUrl: './facebook-device.component.html',
  styleUrls: ['./facebook-device.component.css'],
})
export class FacebookDeviceComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  facebookLogin: FacebookLogin = FacebookLogin.empty();

  loginStatus: LoginStatus = LoginStatus.empty();

  FieldType = FieldType;

  constructor(
    private deviceService: DeviceService,
    private toastService: ToastService,
    public dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login(): void {
    this.deviceService
      .login()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((facebookLogin) => {
        this.facebookLogin = facebookLogin;
        this.toastService.showSuccess('facebook.device.loginSuccess');
      });
  }

  getLoginStatus(): void {
    this.deviceService
      .loginStatus(this.facebookLogin.code)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((loginStatus) => {
        this.loginStatus = loginStatus;

        if (this.loginStatus.error) {
          this.toastService.showError(this.loginStatus.error.errorUserMsg);
        } else {
          this.toastService.showSuccess('facebook.device.loginStatusSuccess');
        }
      });
  }

  openErrorDialog(): void {
    this.dialog.open(FacebookErrorComponent, {
      data: this.loginStatus.error,
    });
  }
}
