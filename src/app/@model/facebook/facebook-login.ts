export class FacebookLogin {
  constructor(
    public code: string,
    public userCode: string,
    public verificationUri: string,
    public expiresIn: number,
    public interval: number
  ) {}

  static empty(): FacebookLogin {
    return new FacebookLogin('', '', '', -1, -1);
  }
}
