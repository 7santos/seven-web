import { Component, OnDestroy } from '@angular/core';
import { AccountPage, FieldType } from '@model';
import { MeService, ToastService } from '@service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-facebook-me',
  templateUrl: './facebook-me.component.html',
  styleUrls: ['./facebook-me.component.css'],
})
export class FacebookMeComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  accountPage = AccountPage.empty();

  FieldType = FieldType;

  constructor(
    private meService: MeService,
    private toastService: ToastService
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  meAccounts(): void {
    this.meService
      .meAccounts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((accountPage) => {
        this.accountPage = accountPage;
        this.toastService.showSuccess('facebook.me.meAccountsSuccess');
      });
  }
}
