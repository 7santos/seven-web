import { ContactType } from '@model';

export class ContactInfo {
  constructor(public id: number | null, public type: ContactType, public value: string) {}
}
