import { EmailStatus, EmailType, Prime } from '@model';

export class Email extends Prime<string> {
  constructor(
    id: string,
    public sentDate: Date,
    public emailType: EmailType,
    public emailStatus: EmailStatus,
    public to: string,
    public subject: string,
    public text: string
  ) {
    super(new Date(), new Date(), id);
  }
}
