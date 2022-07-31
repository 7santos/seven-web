import { Prime } from '@model';

export class Group extends Prime<string> {
  constructor(
    createdDate: Date,
    lastModifiedDate: Date,
    id: string,
    public code: number,
    public quotas: number[]
  ) {
    super(createdDate, lastModifiedDate, id);
  }
}
