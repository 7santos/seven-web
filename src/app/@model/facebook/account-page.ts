export class AccountPage {
  constructor(
    public category: string,
    public name: string,
    public id: string,
    public tasks: string[]
  ) {}

  static empty(): AccountPage {
    return new AccountPage('', '', '', []);
  }
}
