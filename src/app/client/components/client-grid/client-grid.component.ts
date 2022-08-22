import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client, ClientFilter } from '@model';
import { ClientService, ToastService } from '@service';
import { BaseListDirective } from '@shared';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.css'],
})
export class ClientGridComponent extends BaseListDirective<
  Client,
  ClientFilter,
  string
> {
  displayedColumns: string[] = [
    'name',
    'phone',
    'cellPhone',
    'cpf',
    'cnpj',
    'doc',
    'birthDate',
    'email',
    'lastModifiedDate',
    'config',
  ];

  constructor(
    router: Router,
    matDialog: MatDialog,
    clientService: ClientService,
    toastService: ToastService
  ) {
    super('client', router, matDialog, clientService, toastService);
  }
}
