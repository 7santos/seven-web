import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Login } from '@model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  formGroup: FormGroup;

  @Input() googleLoginUrl: SafeUrl = '';

  @Output() signInEvent: EventEmitter<Login> = new EventEmitter<Login>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signIn(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const login: Login = this.formGroup.value;
    this.signInEvent.next(login);
  }
}
