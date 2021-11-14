import { FacebookError } from '@model';

export class LoginStatus {
  constructor(
    public error: FacebookError,
    public expirationTime: Date,
    public expiresIn: number
  ) {}

  static empty(): LoginStatus {
    return new LoginStatus(FacebookError.empty(), new Date(), -1);
  }
}
