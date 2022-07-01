import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import {
  UserFilterComponent,
  UserFormComponent,
  UserGridComponent,
} from './components';
import { UserCreationComponent, UserListComponent } from './containers';

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'new',
    component: UserCreationComponent,
  },
  {
    path: ':id/edit',
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
  ],
  imports: [SharedModule, RouterModule.forChild(UserRoutes)],
})
export class UserModule {}
