import { Component, OnDestroy } from '@angular/core';
import { AccessData, FieldType } from '@model';
import { AccessDataService, ToastService } from '@service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-access-data-form',
  templateUrl: './access-data-form.component.html',
  styleUrls: ['./access-data-form.component.css'],
})
export class AccessDataFormComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  accessData = AccessData.empty();

  FieldType = FieldType;

  constructor(
    private accessDataService: AccessDataService,
    private toastService: ToastService
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAccessData(): void {
    this.accessDataService
      .getAccessData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((accessData) => {
        this.accessData = accessData;
        this.toastService.showSuccess('accessData.getSuccess');
      });
  }
}
