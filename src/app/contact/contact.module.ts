import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared';
import { ContactFormComponent } from './components';
import { ContactCreationComponent } from './containers';
import { NgxMaskModule } from 'ngx-mask';

export const ContactRoutes: Routes = [
  {
    path: '',
    component: ContactCreationComponent,
  },
];

@NgModule({
  declarations: [ContactCreationComponent, ContactFormComponent],
  imports: [
    SharedModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(ContactRoutes),
  ],
})
export class ContactModule {}
