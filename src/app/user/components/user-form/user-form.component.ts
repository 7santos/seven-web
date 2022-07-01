import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserFilter } from '@model';
import { ToastService, UserService } from '@service';
import { BaseFormDirective } from '@shared';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent
  extends BaseFormDirective<User, UserFilter, string>
  implements OnInit
{
  constructor(
    activatedRoute: ActivatedRoute,
    userService: UserService,
    toastService: ToastService,
    router: Router,
    private formBuilder: FormBuilder
  ) {
    super(activatedRoute, userService, toastService, router);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    const enabledDefaultValue =
      this.defaultValues.enabled == null ? true : this.defaultValues.enabled;

    this.formGroup = this.formBuilder.group({
      name: [this.defaultValues.name],
      email: [this.defaultValues.email],
      enabled: [enabledDefaultValue],
    });
  }
}
