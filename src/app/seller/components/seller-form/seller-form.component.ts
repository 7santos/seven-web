import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller, SellerFilter } from '@model';
import { ToastService, SellerService } from '@service';
import { BaseFormDirective } from '@shared';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css'],
})
export class SellerFormComponent
  extends BaseFormDirective<Seller, SellerFilter, string>
  implements OnInit
{
  constructor(
    activatedRoute: ActivatedRoute,
    sellerService: SellerService,
    toastService: ToastService,
    router: Router,
    private formBuilder: FormBuilder
  ) {
    super(activatedRoute, sellerService, toastService, router);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(): void {
    const activeDefaultValue =
      this.defaultValues.active == null ? true : this.defaultValues.active;

    this.formGroup = this.formBuilder.group({
      name: [
        this.defaultValues.name,
        [Validators.required, Validators.maxLength(AppConstants.LENGTH_250)],
      ],
      user: [this.defaultValues.user, [Validators.required]],
      active: [activeDefaultValue, [Validators.required]],
    });
  }
}
