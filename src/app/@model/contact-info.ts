import { ContactType } from '@model';

export class ContactInfo {
  constructor(public type: ContactType, public value: string) {}
}
