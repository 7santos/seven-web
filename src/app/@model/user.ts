import { Prime } from '@model';

export class User extends Prime {
  constructor(
    createdDate: Date,
    lastModifiedDate: Date,
    id: string,
    public email: string,
    public enabled: boolean,
    public name: string
  ) {
    super(createdDate, lastModifiedDate, id);
  }
}
