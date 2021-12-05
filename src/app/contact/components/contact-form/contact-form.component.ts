import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, SimpleContact } from '@model';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  formGroup: FormGroup;

  @Output() createEvent: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      value: [
        '',
        [Validators.required, Validators.pattern(AppConstants.PHONE_PATTERN)],
      ],
    });
  }

  create(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const SimpleContact: SimpleContact = this.formGroup.value;
    const contact = Contact.of(SimpleContact);
    this.createEvent.next(contact);
  }
}
