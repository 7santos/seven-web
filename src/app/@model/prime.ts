import { Audit } from '@model';

export abstract class Prime<ID> extends Audit {
  constructor(createdDate: Date, lastModifiedDate: Date, public id: ID) {
    super(createdDate, lastModifiedDate);
  }
}
