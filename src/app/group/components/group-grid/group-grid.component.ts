import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Group, GroupFilter } from '@model';
import { GroupService, ToastService } from '@service';
import { BaseListDirective } from '@shared';

@Component({
  selector: 'app-group-grid',
  templateUrl: './group-grid.component.html',
  styleUrls: ['./group-grid.component.css'],
})
export class GroupGridComponent extends BaseListDirective<
  Group,
  GroupFilter,
  string
> {
  displayedColumns: string[] = [
    'code',
    'createdDate',
    'lastModifiedDate',
    'config',
  ];

  constructor(
    router: Router,
    matDialog: MatDialog,
    groupService: GroupService,
    toastService: ToastService
  ) {
    super('group', router, matDialog, groupService, toastService);

    this.defaultSort = {
      active: 'code',
      direction: 'asc',
    };
  }
}
