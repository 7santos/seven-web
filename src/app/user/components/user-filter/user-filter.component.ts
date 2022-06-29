import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserFilter } from '@model';
import { BaseFilterDirective } from '@shared';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css'],
})
export class UserFilterComponent
  extends BaseFilterDirective<UserFilter>
  implements OnInit
{
  emailFormControl = new FormControl('', [
    Validators.minLength(AppConstants.LENGTH_3),
    Validators.maxLength(AppConstants.LENGTH_320),
  ]);

  enabledFormControl = new FormControl('');

  nameFormControl = new FormControl('', [
    Validators.minLength(AppConstants.LENGTH_3),
    Validators.maxLength(AppConstants.LENGTH_250),
  ]);

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    this.formGroup = this.formBuilder.group({
      email: this.emailFormControl,
      enabled: this.enabledFormControl,
      name: this.nameFormControl,
    });
  }

  protected resetForm(path: string): void {
    this.formGroup.get(path)?.reset();
  }
}
