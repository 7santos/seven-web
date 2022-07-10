import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '@core';
import { SharedModule } from '@shared';
import { EmailFilterComponent, EmailGridComponent } from './components';
import { EmailListComponent } from './containers';

export const EmailRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthAdminGuard],
    component: EmailListComponent,
  },
];

@NgModule({
  declarations: [EmailFilterComponent, EmailListComponent, EmailGridComponent],
  imports: [SharedModule, RouterModule.forChild(EmailRoutes)],
})
export class EmailModule {}
