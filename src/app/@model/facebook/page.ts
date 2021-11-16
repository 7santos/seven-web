export class Page {
  constructor(public pageId: string, public igUserId: string) {}

  static empty(): Page {
    return new Page('', '');
  }
}
