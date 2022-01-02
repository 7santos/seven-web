import {
  ContactInfo,
  ContactSource,
  ContactStatus,
  ContactType,
  SimpleContact,
} from '@model';

export class Contact {
  constructor(
    public id: number,
    public name: string,
    public source: ContactSource,
    public status: ContactStatus,
    public infos: ContactInfo[],
    public createdDate: Date,
    public lastModifiedDate: Date
  ) {}

  static of(simpleContact: SimpleContact): Contact {
    const contact = {} as Contact;
    contact.name = simpleContact.name;
    contact.infos = [
      new ContactInfo(null, ContactType.WHATSAPP, simpleContact.value),
    ];
    return contact;
  }
}
