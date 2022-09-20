import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '@service';

@Component({
  selector: 'app-client-creation',
  templateUrl: './client-creation.component.html',
  styleUrls: ['./client-creation.component.css'],
})
export class ClientCreationComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('client.formTitle');
  }
}
