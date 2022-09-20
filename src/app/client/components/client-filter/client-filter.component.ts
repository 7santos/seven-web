import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClientFilter } from '@model';
import { BaseFilterDirective } from '@shared';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-client-filter',
  templateUrl: './client-filter.component.html',
  styleUrls: ['./client-filter.component.css'],
})
export class ClientFilterComponent
  extends BaseFilterDirective<ClientFilter>
  implements OnInit
{
  searchFormControl = new FormControl('', [
    Validators.minLength(AppConstants.LENGTH_3),
    Validators.maxLength(AppConstants.LENGTH_14),
  ]);

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    this.formGroup = this.formBuilder.group({
      search: this.searchFormControl,
    });
  }

  protected resetForm(path: string): void {
    this.formGroup.get(path)?.reset();
  }
}
