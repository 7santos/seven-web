import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { LoginFormComponent } from './components';
import { LoginComponent } from './containers';

export const LoginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [RouterModule.forChild(LoginRoutes), SharedModule],
})
export class LoginModule {}
