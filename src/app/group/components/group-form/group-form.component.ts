import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group, GroupFilter } from '@model';
import { ToastService, GroupService } from '@service';
import { BaseFormDirective, isNumberRange } from '@shared';
import { AppConstants } from 'src/app/app-constants';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css'],
})
export class GroupFormComponent
  extends BaseFormDirective<Group, GroupFilter, string>
  implements OnInit
{
  readonly quotasLimit = AppConstants.QUOTAS_LIMIT;

  constructor(
    activatedRoute: ActivatedRoute,
    groupService: GroupService,
    toastService: ToastService,
    router: Router,
    private formBuilder: FormBuilder
  ) {
    super(activatedRoute, groupService, toastService, router);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    const quotasDefaultValue = this.defaultValues.quotas
      ? sortBy(this.defaultValues.quotas)
      : [];

    this.formGroup = this.formBuilder.group({
      code: [this.defaultValues.code, [Validators.required]],
      quotas: [quotasDefaultValue],
    });
  }

  addQuota(quota: string) {
    return new Promise((resolve) => {
      resolve(isNumberRange(quota) ? quota : null);
    });
  }
}
