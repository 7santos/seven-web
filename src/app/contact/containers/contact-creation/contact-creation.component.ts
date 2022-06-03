import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact, ContactSource } from '@model';
import { AppService, ContactService, ToastService } from '@service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-contact-creation',
  templateUrl: './contact-creation.component.html',
  styleUrls: ['./contact-creation.component.css'],
})
export class ContactCreationComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private unsubscribe$ = new Subject<void>();

  private source = ContactSource.WEB;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private contactService: ContactService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => this.defineSource(params));
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('contact.creation.title');
    this.appService.setShowHeader(false);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  defineSource(params: Params): void {
    if (params['source']) {
      const possiblySource: ContactSource = (<any>ContactSource)[
        params['source']
      ];

      if (possiblySource) {
        this.source = possiblySource;
      }
    }
  }

  create(contact: Contact): void {
    contact.source = this.source;

    this.contactService
      .create(contact)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.toastService.showSuccess('contact.creation.success');
        this.router.navigate(['/']);
      });
  }
}
