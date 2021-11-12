import { Component, OnInit } from '@angular/core';
import { FacebookLogin, FieldType } from '@model';
import { DeviceService } from '@service';

@Component({
  selector: 'app-facebook-device',
  templateUrl: './facebook-device.component.html',
  styleUrls: ['./facebook-device.component.css'],
})
export class FacebookDeviceComponent implements OnInit {
  facebookLogin: FacebookLogin = new FacebookLogin('', '', '', 0, 0);

  FieldType = FieldType;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  login(): void {
    this.deviceService
      .login()
      .subscribe((facebookLogin) => (this.facebookLogin = facebookLogin));
  }
}
