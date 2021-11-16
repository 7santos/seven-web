import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core/guards';
import { SharedModule } from '@shared';
import { AccessDataComponent } from './containers';

export const AccessDataRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: AccessDataComponent,
  },
];

@NgModule({
  declarations: [AccessDataComponent],
  imports: [SharedModule, RouterModule.forChild(AccessDataRoutes)],
})
export class AccessDataModule {}
