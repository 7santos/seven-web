import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import { SellerFilterComponent, SellerGridComponent } from './components';
import { SellerListComponent } from './containers';

export const SellerRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: SellerListComponent,
  },
  /*{
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
  declarations: [
    SellerFilterComponent,
    SellerGridComponent,
    SellerListComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(SellerRoutes)],
})
export class SellerModule {}
