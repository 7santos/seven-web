import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Email, EmailFilter } from '@model';
import { EmailService, ToastService } from '@service';
import { BaseListDirective } from '@shared';

@Component({
  selector: 'app-email-grid',
  templateUrl: './email-grid.component.html',
  styleUrls: ['./email-grid.component.css'],
})
export class EmailGridComponent extends BaseListDirective<
  Email,
  EmailFilter,
  string
> {
  displayedColumns: string[] = [
    'sentDate',
    'emailType',
    'emailStatus',
    'to',
    'subject',
    'text',
    'config',
  ];

  constructor(
    router: Router,
    matDialog: MatDialog,
    emailService: EmailService,
    toastService: ToastService
  ) {
    super('user', router, matDialog, emailService, toastService);

    this.defaultSort = {
      active: 'sentDate',
      direction: 'desc',
    };
  }
}
