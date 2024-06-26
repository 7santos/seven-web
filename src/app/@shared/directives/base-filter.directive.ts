import {
  Directive,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive()
export abstract class BaseFilterDirective<T> implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  formGroup: FormGroup = new FormGroup({});

  @Output() restart: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() search: EventEmitter<T> = new EventEmitter<T>();

  @Output() valueChanges: EventEmitter<T> = new EventEmitter<T>();

  constructor() {}

  ngOnInit(): void {
    this.buildForm();

    this.formGroup.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.valueChanges.next(value);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  protected abstract buildForm(): void;

  protected abstract resetForm(path: string): void;

  filterSearch(): void {
    if (this.formGroup.invalid) {
      return;
    }

    this.search.next(this.formGroup.value);
  }

  filterClear(path: string): void {
    this.resetForm(path);
    this.restart.next(true);
  }
}
