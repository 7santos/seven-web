import { Component, OnDestroy } from '@angular/core';
import { FacebookPage } from '@model';
import { PageService, ToastService } from '@service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-facebook-page',
  templateUrl: './facebook-page.component.html',
  styleUrls: ['./facebook-page.component.css'],
})
export class FacebookPageComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  page = FacebookPage.empty();

  constructor(
    private pageService: PageService,
    private toastService: ToastService
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getPage(): void {
    this.pageService
      .page()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((page) => {
        this.page = page;
        this.toastService.showSuccess('facebook.page.pageSuccess');
      });
  }
}
