export class FacebookPage {
  constructor(public pageId: string, public igUserId: string) {}

  static empty(): FacebookPage {
    return new FacebookPage('', '');
  }
}
