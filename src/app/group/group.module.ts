import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';

export const GroupRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    // component: SellerListComponent,
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
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(GroupRoutes)],
})
export class GroupModule {}
