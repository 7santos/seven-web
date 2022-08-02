import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GroupFilter } from '@model';
import { BaseFilterDirective } from '@shared';

@Component({
  selector: 'app-group-filter',
  templateUrl: './group-filter.component.html',
  styleUrls: ['./group-filter.component.css'],
})
export class GroupFilterComponent
  extends BaseFilterDirective<GroupFilter>
  implements OnInit
{
  codeFormControl = new FormControl('');

  quotaFormControl = new FormControl('');

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    this.formGroup = this.formBuilder.group({
      code: this.codeFormControl,
      quota: this.quotaFormControl,
    });
  }

  protected resetForm(path: string): void {
    this.formGroup.get(path)?.reset();
  }
}
