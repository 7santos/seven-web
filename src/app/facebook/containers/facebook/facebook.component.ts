import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '@service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
})
export class FacebookComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('facebook.title');
  }
}
