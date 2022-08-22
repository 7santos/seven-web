import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import { ClientFilterComponent, ClientGridComponent } from './components';

export const ClientRoutes: Routes = [
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
  declarations: [ClientFilterComponent, ClientGridComponent],
  imports: [SharedModule, RouterModule.forChild(ClientRoutes)],
})
export class ClientModule {}
