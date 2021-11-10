import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from '@core/guards';
import { SharedModule } from '@shared';
import { HomeComponent } from './containers';

export const HomeRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthUserGuard],
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule.forChild(HomeRoutes)],
})
export class HomeModule {}
