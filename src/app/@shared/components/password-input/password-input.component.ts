import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
})
export class PasswordInputComponent {
  hide = true;

  @Input() picFormControl: FormControl = new FormControl({});

  @Input() picPlaceholder: string = '';

  constructor() {}
}
