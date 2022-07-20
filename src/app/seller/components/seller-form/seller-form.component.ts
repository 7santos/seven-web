import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page, Seller, SellerFilter, User, UserFilter } from '@model';
import { ToastService, SellerService, UserService } from '@service';
import { BaseFormDirective, Debounce } from '@shared';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';

const requiredNameValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const name = control.get('name')?.value;
  const userId = control.get('userId')?.value;
  const missingName = (!name || name.trim().length <= 0) && !userId;
  return missingName ? { requiredName: true } : null;
};

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css'],
})
export class SellerFormComponent
  extends BaseFormDirective<Seller, SellerFilter, string>
  implements OnInit
{
  users$!: Observable<Page<User>>;

  constructor(
    activatedRoute: ActivatedRoute,
    sellerService: SellerService,
    toastService: ToastService,
    router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    super(activatedRoute, sellerService, toastService, router);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getUsers('');
  }

  protected buildForm(): void {
    const activeDefaultValue =
      this.defaultValues.active == null ? true : this.defaultValues.active;

    this.formGroup = this.formBuilder.group(
      {
        name: [
          this.defaultValues.name,
          [Validators.maxLength(AppConstants.LENGTH_250)],
        ],
        userId: [this.defaultValues.userId],
        active: [activeDefaultValue, [Validators.required]],
      },
      { validators: requiredNameValidator }
    );
  }

  clear(path: string): void {
    this.formGroup.get(path)?.reset();
  }

  @Debounce(1000)
  searchUser(searchUserInput: string): void {
    if (!searchUserInput || searchUserInput.trim().length < 3) {
      return;
    }

    this.getUsers(searchUserInput);
  }

  private getUsers(name: string): void {
    this.users$ = this.userService.getAll(
      { name } as UserFilter,
      {
        pageIndex: 0,
        pageSize: AppConstants.PAGE_SIZE,
        length: 0,
      },
      {
        active: 'name',
        direction: 'asc',
      }
    );
  }
}
