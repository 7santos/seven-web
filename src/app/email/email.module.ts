import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';

export const EmailRoutes: Routes = [
  {
    path: '',
    // component: UserListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(EmailRoutes)],
})
export class EmailModule {}
