import { Component, OnInit } from '@angular/core';
import { FacebookLogin, FieldType, LoginStatus } from '@model';
import { DeviceService, ToastService } from '@service';
import { MatDialog } from '@angular/material/dialog';
import { FacebookErrorDialog } from '..';

@Component({
  selector: 'app-facebook-device',
  templateUrl: './facebook-device.component.html',
  styleUrls: ['./facebook-device.component.css'],
})
export class FacebookDeviceComponent implements OnInit {
  facebookLogin: FacebookLogin = FacebookLogin.empty();

  loginStatus: LoginStatus = LoginStatus.empty();

  FieldType = FieldType;

  constructor(
    private deviceService: DeviceService,
    private toastService: ToastService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.deviceService.login().subscribe((facebookLogin) => {
      this.facebookLogin = facebookLogin;
      this.toastService.showSuccess('facebook.device.loginSuccess');
    });
  }

  getLoginStatus(): void {
    this.deviceService
      .loginStatus(this.facebookLogin.code)
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
    this.dialog.open(FacebookErrorDialog, {
      data: this.loginStatus.error,
    });
  }
}
