import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailFilter, EmailStatus, EmailType } from '@model';
import { BaseFilterDirective } from '@shared';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-email-filter',
  templateUrl: './email-filter.component.html',
  styleUrls: ['./email-filter.component.css'],
})
export class EmailFilterComponent
  extends BaseFilterDirective<EmailFilter>
  implements OnInit
{
  emailTypes: EmailType[] = Object.values(EmailType);

  emailStatuses: EmailStatus[] = Object.values(EmailStatus);

  emailTypeFormControl = new FormControl('');

  emailStatusFormControl = new FormControl('');

  toFormControl = new FormControl('', [
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
      emailType: this.emailTypeFormControl,
      emailStatus: this.emailStatusFormControl,
      to: this.toFormControl,
    });
  }

  protected resetForm(path: string): void {
    this.formGroup.get(path)?.reset();
  }
}
