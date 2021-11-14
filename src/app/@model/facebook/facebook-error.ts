export class FacebookError {
  constructor(
    public message: string,
    public type: string,
    public code: number,
    public errorSubcode: number,
    public isTransient: boolean,
    public errorUserTitle: string,
    public errorUserMsg: string,
    public fbtraceId: string
  ) {}

  static empty(): FacebookError {
    return new FacebookError('', '', -1, -1, false, '', '', '');
  }
}
