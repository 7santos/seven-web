import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import {
  ClientFilterComponent,
  ClientFormComponent,
  ClientGridComponent,
} from './components';
import { ClientCreationComponent, ClientListComponent } from './containers';

export const ClientRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: ClientListComponent,
  },
  {
    path: 'new',
    canActivate: [AuthAdminGuard],
    component: ClientCreationComponent,
  },
  {
    path: ':id/edit',
    canActivate: [AuthAdminGuard],
    component: ClientCreationComponent,
  },
];

@NgModule({
  declarations: [
    ClientFilterComponent,
    ClientGridComponent,
    ClientListComponent,
    ClientFormComponent,
    ClientCreationComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(ClientRoutes)],
})
export class ClientModule {}
