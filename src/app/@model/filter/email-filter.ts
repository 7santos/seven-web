import { EmailStatus, EmailType } from '@model';

export class EmailFilter {
  constructor(
    public fromDate: Date,
    public toDate: Date,
    public emailType: EmailType,
    public emailStatus: EmailStatus,
    public to: string
  ) {}
}
