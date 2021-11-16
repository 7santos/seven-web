export class AccessData {
  constructor(
    public id: string,
    public name: string,
    public expirationEpoch: number,
    public expirationDate: Date,
    public pageId: string,
    public igUserId: string,
    public createdDate: Date,
    public lastModifiedDate: Date
  ) {}

  static empty(): AccessData {
    return new AccessData(
      '',
      '',
      -1,
      new Date(),
      '',
      '',
      new Date(),
      new Date()
    );
  }
}
