import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core/guards';
import { SharedModule } from '@shared';
import {
  FacebookDeviceComponent,
  FacebookErrorComponent,
  FacebookMeComponent,
  FacebookPageComponent,
} from './components';
import { FacebookComponent } from './containers';

export const FacebookRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: FacebookComponent,
  },
];

@NgModule({
  declarations: [
    FacebookComponent,
    FacebookDeviceComponent,
    FacebookErrorComponent,
    FacebookMeComponent,
    FacebookPageComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(FacebookRoutes)],
})
export class FacebookModule {}
