import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import {
  UserFilterComponent,
  UserFormComponent,
  UserGridComponent,
} from './components';
import { UserListComponent } from './containers';

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  /*{
    path: 'new',
    component: BudgetCreationComponent,
  },
  {
    path: ':id/edit',
    component: BudgetCreationComponent,
  },*/
];

@NgModule({
  declarations: [
    UserListComponent,
    UserFilterComponent,
    UserGridComponent,
    UserFormComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(UserRoutes)],
})
export class UserModule {}
