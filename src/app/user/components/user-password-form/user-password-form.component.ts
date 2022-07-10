import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangePassword } from '@model';
import { PermissionService, ToastService, UserService } from '@service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-password-form',
  templateUrl: './user-password-form.component.html',
  styleUrls: ['./user-password-form.component.css'],
})
export class UserPasswordFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      oldPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  update() {
    if (this.formGroup.invalid) {
      return;
    }

    const changePassword: ChangePassword = this.formGroup.value;
    const id = this.permissionService.getSub();

    this.userService
      .patchAny(id, changePassword)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.toastService.showSuccess('user.passwordChanged');
        this.permissionService.clearToken();
      });
  }
}
