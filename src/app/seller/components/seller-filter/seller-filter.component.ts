import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SellerFilter } from '@model';
import { BaseFilterDirective } from '@shared';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-seller-filter',
  templateUrl: './seller-filter.component.html',
  styleUrls: ['./seller-filter.component.css'],
})
export class SellerFilterComponent
  extends BaseFilterDirective<SellerFilter>
  implements OnInit
{
  nameFormControl = new FormControl('', [
    Validators.minLength(AppConstants.LENGTH_3),
    Validators.maxLength(AppConstants.LENGTH_250),
  ]);

  activeFormControl = new FormControl('');

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    this.formGroup = this.formBuilder.group({
      name: this.nameFormControl,
      active: this.activeFormControl,
    });
  }

  protected resetForm(path: string): void {
    this.formGroup.get(path)?.reset();
  }
}
