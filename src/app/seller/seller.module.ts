import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import {
  SellerFilterComponent,
  SellerFormComponent,
  SellerGridComponent,
} from './components';
import { SellerCreationComponent, SellerListComponent } from './containers';

export const SellerRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: SellerListComponent,
  },
  {
    path: 'new',
    canActivate: [AuthAdminGuard],
    component: SellerCreationComponent,
  },
  {
    path: ':id/edit',
    canActivate: [AuthAdminGuard],
    component: SellerCreationComponent,
  },
];

@NgModule({
  declarations: [
    SellerFilterComponent,
    SellerGridComponent,
    SellerListComponent,
    SellerFormComponent,
    SellerCreationComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(SellerRoutes)],
})
export class SellerModule {}
