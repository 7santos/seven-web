import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '@model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  formGroup: FormGroup;

  @Input() googleLoginUrl: string = '';

  @Output() signInEvent: EventEmitter<Login> = new EventEmitter<Login>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm();
  }

  ngOnInit(): void {}

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
