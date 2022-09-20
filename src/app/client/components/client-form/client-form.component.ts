import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Client, ClientFilter, EnumValue, State } from '@model';
import {
  AddressService,
  ClientService,
  EnumService,
  StateService,
  ToastService,
} from '@service';
import { BaseFormDirective } from '@shared';
import { AppConstants } from 'src/app/app-constants';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { takeUntil } from 'rxjs';

const requiredDocTypeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const doc = control.get('doc')?.value;
  const docType = control.get('docType')?.value;
  const missingDocType = doc && doc.trim().length > 0 && !docType;
  return missingDocType ? { requiredDocType: true } : null;
};

const requiredAddressValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const addressFilled = control.get('addressFilled')?.value;
  const cep = control.get('address.cep')?.value;
  const street = control.get('address.street')?.value;
  const district = control.get('address.district')?.value;
  const city = control.get('address.city')?.value;
  const state = control.get('address.state')?.value;
  const number = control.get('address.number')?.value;

  const missingAddress = addressFilled
    ? !cep || !street || !district || !city || !state || !number
    : false;

  return missingAddress ? { requiredAddress: true } : null;
};

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: AppConstants.APP_DATE_FORMAT },
  ],
})
export class ClientFormComponent
  extends BaseFormDirective<Client, ClientFilter, string>
  implements OnInit
{
  docTypes: EnumValue[] = [];

  states: State[] = [];

  constructor(
    activatedRoute: ActivatedRoute,
    clientService: ClientService,
    toastService: ToastService,
    router: Router,
    private formBuilder: FormBuilder,
    private enumService: EnumService,
    private stateService: StateService,
    private addressService: AddressService
  ) {
    super(activatedRoute, clientService, toastService, router);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.docTypes = this.enumService.getDocTypes();
    this.states = this.stateService.getStates();
  }

  protected buildForm(): void {
    const whatsappDefaultValue =
      this.defaultValues.whatsapp == null ? false : this.defaultValues.whatsapp;

    const addressFilledDefaultValue =
      this.defaultValues.addressFilled == null
        ? false
        : this.defaultValues.addressFilled;

    const addressDefaultValue =
      this.defaultValues.address && this.defaultValues.address.id
        ? this.defaultValues.address
        : ({} as Address);

    const stateDefaultValue =
      addressDefaultValue.state && addressDefaultValue.state.code
        ? addressDefaultValue.state
        : null;

    this.formGroup = this.formBuilder.group(
      {
        name: [
          this.defaultValues.name,
          [Validators.required, Validators.maxLength(AppConstants.LENGTH_250)],
        ],
        phone: [this.defaultValues.phone],
        cellPhone: [this.defaultValues.cellPhone],
        whatsapp: [whatsappDefaultValue],
        cpf: [this.defaultValues.cpf],
        cnpj: [this.defaultValues.cnpj],
        doc: [
          this.defaultValues.doc,
          [Validators.maxLength(AppConstants.LENGTH_50)],
        ],
        docType: [this.defaultValues.docType],
        birthDate: [this.defaultValues.birthDate],
        email: [
          this.defaultValues.email,
          [
            Validators.maxLength(AppConstants.LENGTH_320),
            Validators.pattern(AppConstants.EMAIL_PATTERN),
          ],
        ],
        addressFilled: [addressFilledDefaultValue],
        address: this.formBuilder.group({
          cep: [addressDefaultValue.cep],
          street: [
            addressDefaultValue.street,
            [Validators.maxLength(AppConstants.LENGTH_100)],
          ],
          complement: [
            addressDefaultValue.complement,
            [Validators.maxLength(AppConstants.LENGTH_250)],
          ],
          district: [
            addressDefaultValue.district,
            [Validators.maxLength(AppConstants.LENGTH_100)],
          ],
          city: [
            addressDefaultValue.city,
            [Validators.maxLength(AppConstants.LENGTH_100)],
          ],
          state: [stateDefaultValue],
          number: [
            addressDefaultValue.number,
            [Validators.maxLength(AppConstants.LENGTH_50)],
          ],
        }),
        observation: [
          this.defaultValues.observation,
          [Validators.maxLength(AppConstants.LENGTH_1000)],
        ],
      },
      { validators: [requiredDocTypeValidator, requiredAddressValidator] }
    );
  }

  stateCompare(optionState: State, selectedState: State): boolean {
    return optionState.code === selectedState?.code;
  }

  getAddress(): void {
    this.addressService
      .getAddress(this.formGroup.value.address.cep)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((address: Address) => {
        this.formGroup.get('address')?.get('street')?.setValue(address.street);
        this.formGroup.get('address')?.get('complement')?.setValue('');
        this.formGroup
          .get('address')
          ?.get('district')
          ?.setValue(address.district);
        this.formGroup.get('address')?.get('city')?.setValue(address.city);

        const stateFind = this.states.find((value: State) => {
          return value.initials === address.state.initials;
        });

        this.formGroup.get('address')?.get('state')?.setValue(stateFind);
        this.formGroup.get('address')?.get('number')?.setValue('');
      });
  }
}
