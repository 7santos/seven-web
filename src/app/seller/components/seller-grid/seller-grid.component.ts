import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Seller, SellerFilter } from '@model';
import { SellerService, ToastService } from '@service';
import { BaseListDirective } from '@shared';

@Component({
  selector: 'app-seller-grid',
  templateUrl: './seller-grid.component.html',
  styleUrls: ['./seller-grid.component.css'],
})
export class SellerGridComponent extends BaseListDirective<
  Seller,
  SellerFilter,
  string
> {
  displayedColumns: string[] = [
    'name',
    'userEmail',
    'active',
    'createdDate',
    'lastModifiedDate',
    'config',
  ];

  constructor(
    router: Router,
    matDialog: MatDialog,
    sellerService: SellerService,
    toastService: ToastService
  ) {
    super('seller', router, matDialog, sellerService, toastService);
  }
}
