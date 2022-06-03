import { Component, AfterViewInit } from '@angular/core';
import { AppService } from '@service';

@Component({
  selector: 'app-access-data',
  templateUrl: './access-data.component.html',
  styleUrls: ['./access-data.component.css'],
})
export class AccessDataComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('accessData.title');
    this.appService.setShowHeader(true);
  }
}
