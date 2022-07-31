import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import { GroupFilterComponent, GroupGridComponent } from './components';
import { GroupListComponent } from './containers';

export const GroupRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: GroupListComponent,
  },
  /*{
    path: 'new',
    canActivate: [AuthAdminGuard],
    component: SellerCreationComponent,
  },
  {
    path: ':id/edit',
    canActivate: [AuthAdminGuard],
    component: SellerCreationComponent,
  },*/
];

@NgModule({
  declarations: [GroupFilterComponent, GroupGridComponent, GroupListComponent],
  imports: [SharedModule, RouterModule.forChild(GroupRoutes)],
})
export class GroupModule {}
