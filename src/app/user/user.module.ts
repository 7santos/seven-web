import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import {
  UserFilterComponent,
  UserFormComponent,
  UserGridComponent,
  UserPasswordFormComponent,
} from './components';
import { UserCreationComponent, UserListComponent } from './containers';

export const UserRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: UserListComponent,
  },
  {
    path: 'new',
    canActivate: [AuthAdminGuard],
    component: UserCreationComponent,
  },
  {
    path: ':id/edit',
    canActivate: [AuthAdminGuard],
    component: UserCreationComponent,
  },
];

@NgModule({
  declarations: [
    UserListComponent,
    UserFilterComponent,
    UserGridComponent,
    UserFormComponent,
    UserCreationComponent,
    UserPasswordFormComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(UserRoutes)],
})
export class UserModule {}
