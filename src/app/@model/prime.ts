import { Audit } from '@model';

export abstract class Prime extends Audit {
  constructor(createdDate: Date, lastModifiedDate: Date, public id: string) {
    super(createdDate, lastModifiedDate);
  }
}
