import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GroupFilter } from '@model';
import { AppService } from '@service';
import { GroupGridComponent } from '../../components';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit, AfterViewInit {
  groupFilter: GroupFilter = {} as GroupFilter;

  @ViewChild(GroupGridComponent)
  gridComponent!: GroupGridComponent;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.groupFilter = {} as GroupFilter;
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('group.listTitle');
    this.gridComponent.search();
  }

  valueChanges(groupFilter: GroupFilter): void {
    this.groupFilter = groupFilter;
  }
}
