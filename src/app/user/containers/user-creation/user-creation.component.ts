import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '@service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css'],
})
export class UserCreationComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('user.formTitle');
  }
}
