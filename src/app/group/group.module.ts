import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import {
  GroupFilterComponent,
  GroupFormComponent,
  GroupGridComponent,
} from './components';
import { GroupCreationComponent, GroupListComponent } from './containers';

export const GroupRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: GroupListComponent,
  },
  {
    path: 'new',
    canActivate: [AuthAdminGuard],
    component: GroupCreationComponent,
  },
  {
    path: ':id/edit',
    canActivate: [AuthAdminGuard],
    component: GroupCreationComponent,
  },
];

@NgModule({
  declarations: [
    GroupFilterComponent,
    GroupGridComponent,
    GroupListComponent,
    GroupFormComponent,
    GroupCreationComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(GroupRoutes)],
})
export class GroupModule {}
