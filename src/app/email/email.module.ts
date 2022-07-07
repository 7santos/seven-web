import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { EmailFilterComponent } from './components';

export const EmailRoutes: Routes = [
  {
    path: '',
    // component: UserListComponent,
  },
];

@NgModule({
  declarations: [EmailFilterComponent],
  imports: [SharedModule, RouterModule.forChild(EmailRoutes)],
})
export class EmailModule {}
