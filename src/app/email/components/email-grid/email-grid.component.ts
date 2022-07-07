import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Email, EmailFilter } from '@model';
import { EmailService, ToastService } from '@service';
import { BaseListDirective, ConfirmDialogComponent } from '@shared';
import { takeUntil } from 'rxjs';

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

  resend(id: string): void {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: { message: 'email.resendMsg' },
      disableClose: true,
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.apiService
            .put(id, {} as Email)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
              this.toastService.showSuccess('email.resendOK');
            });
        }
      });
  }
}
