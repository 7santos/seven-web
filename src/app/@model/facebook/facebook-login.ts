export class FacebookLogin {
  constructor(
    public code: string,
    public userCode: string,
    public verificationUri: string,
    public expiresIn: number,
    public interval: number
  ) {}
}
