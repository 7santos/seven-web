import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacebookError } from '@model';

@Component({
  selector: 'app-facebook-error',
  templateUrl: './facebook-error.dialog.html',
  styleUrls: ['./facebook-error.dialog.css'],
})
export class FacebookErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public facebookError: FacebookError) {}
}
