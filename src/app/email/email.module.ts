import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { EmailFilterComponent } from './components';
import { EmailListComponent } from './containers';

export const EmailRoutes: Routes = [
  {
    path: '',
    component: EmailListComponent,
  },
];

@NgModule({
  declarations: [EmailFilterComponent, EmailListComponent],
  imports: [SharedModule, RouterModule.forChild(EmailRoutes)],
})
export class EmailModule {}
