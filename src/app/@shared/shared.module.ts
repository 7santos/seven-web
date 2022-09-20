import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ClipboardModule } from 'ngx-clipboard';
import {
  AddressComponent,
  BasicInputComponent,
  BasicSelectComponent,
  CellPhoneComponent,
  ConfirmDialogComponent,
  DocComponent,
  FilterButtonsComponent,
  FilterStatusComponent,
  FormButtonsComponent,
  GridActionsComponent,
  InfoFieldComponent,
  PasswordInputComponent,
} from './components';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppDatePipe } from './pipes';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const importModules = [
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  TranslateModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatInputModule,
  MatTooltipModule,
  MatIconModule,
  RouterModule,
  FormsModule,
  ClipboardModule,
  MatChipsModule,
  MatSelectModule,
  NgxMaskModule.forRoot(),
  MatMomentDateModule,
];

export const exportModules = [
  MatDialogModule,
  CommonModule,
  RouterModule,
  // FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatGridListModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  TranslateModule,
  MatSelectModule,
  MatExpansionModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  ClipboardModule,
  MatProgressBarModule,
  NgxMatSelectSearchModule,
  NgSelectModule,
  NgxMaskModule,
];

export const components = [
  AddressComponent,
  BasicInputComponent,
  BasicSelectComponent,
  CellPhoneComponent,
  ConfirmDialogComponent,
  DocComponent,
  FilterButtonsComponent,
  FilterStatusComponent,
  FormButtonsComponent,
  GridActionsComponent,
  InfoFieldComponent,
  PasswordInputComponent,
];

export const pipes = [AppDatePipe];

@NgModule({
  imports: [...importModules],
  exports: [...exportModules, ...components, ...pipes],
  declarations: [...components, ...pipes],
  providers: [],
})
export class SharedModule {}
