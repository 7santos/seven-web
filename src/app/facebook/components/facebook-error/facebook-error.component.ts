import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacebookError } from '@model';

@Component({
  selector: 'app-facebook-error',
  templateUrl: './facebook-error.component.html',
  styleUrls: ['./facebook-error.component.css'],
})
export class FacebookErrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public facebookError: FacebookError) {}
}
