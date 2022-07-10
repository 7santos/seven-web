import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard, AuthUserGuard } from '@core';
import { SharedModule } from '@shared';
import {
  UserFilterComponent,
  UserFormComponent,
  UserGridComponent,
  UserPasswordFormComponent,
} from './components';
import {
  UserCreationComponent,
  UserListComponent,
  UserPasswordComponent,
} from './containers';

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
    path: 'change-password',
    canActivate: [AuthUserGuard],
    component: UserPasswordComponent,
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
    UserPasswordComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(UserRoutes)],
})
export class UserModule {}
