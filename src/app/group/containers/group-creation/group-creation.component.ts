import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '@service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css'],
})
export class GroupCreationComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('group.formTitle');
  }
}
