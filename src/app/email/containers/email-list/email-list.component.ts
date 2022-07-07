import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EmailFilter } from '@model';
import { AppService } from '@service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
})
export class EmailListComponent implements OnInit, AfterViewInit {
  emailFilter: EmailFilter = {} as EmailFilter;

  // @ViewChild(UserGridComponent)
  // gridComponent!: UserGridComponent;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.emailFilter = {} as EmailFilter;
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('email.listTitle');
    // this.gridComponent.search();
  }

  valueChanges(emailFilter: EmailFilter): void {
    this.emailFilter = emailFilter;
  }
}
