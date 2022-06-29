import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User, UserFilter } from '@model';
import { UserService, ToastService } from '@service';
import { BaseListDirective } from '@shared';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
})
export class UserGridComponent extends BaseListDirective<
  User,
  UserFilter,
  string
> {
  displayedColumns: string[] = [
    'name',
    'email',
    'enabled',
    'createdDate',
    'lastModifiedDate',
    'config',
  ];

  constructor(
    router: Router,
    matDialog: MatDialog,
    userService: UserService,
    toastService: ToastService
  ) {
    super('user', router, matDialog, userService, toastService);
  }
}
