import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserFilter } from '@model';
import { AppService } from '@service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  userFilter: UserFilter = {} as UserFilter;

  /*@ViewChild(BudgetGridComponent)
  gridComponent!: BudgetGridComponent;*/

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.userFilter = {} as UserFilter;
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('user.listTitle');
    // this.gridComponent.search();
  }

  valueChanges(userFilter: UserFilter): void {
    this.userFilter = userFilter;
  }
}
