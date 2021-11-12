import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { AppService } from '@service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
})
export class FacebookComponent implements AfterViewInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('facebook.title');
  }
}
