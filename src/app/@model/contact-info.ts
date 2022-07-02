import { ContactType } from '@model';

export class ContactInfo {
  constructor(public id: string | null, public type: ContactType, public value: string) {}
}
