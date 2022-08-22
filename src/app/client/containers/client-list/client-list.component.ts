import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ClientFilter } from '@model';
import { AppService } from '@service';
import { ClientGridComponent } from '../../components';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit, AfterViewInit {
  clientFilter: ClientFilter = {} as ClientFilter;

  @ViewChild(ClientGridComponent)
  gridComponent!: ClientGridComponent;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.clientFilter = {} as ClientFilter;
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('client.listTitle');
    this.gridComponent.search();
  }

  valueChanges(clientFilter: ClientFilter): void {
    this.clientFilter = clientFilter;
  }
}
