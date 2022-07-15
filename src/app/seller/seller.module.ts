import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';

export const SellerRoutes: Routes = [
  /*{
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
  },*/
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(SellerRoutes)],
})
export class SellerModule {}
