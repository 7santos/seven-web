import { Prime, User } from '@model';

export class Seller extends Prime<string> {
  constructor(
    createdDate: Date,
    lastModifiedDate: Date,
    id: string,
    public name: string,
    public userId: string,
    public userEmail: string,
    public active: boolean
  ) {
    super(createdDate, lastModifiedDate, id);
  }
}
