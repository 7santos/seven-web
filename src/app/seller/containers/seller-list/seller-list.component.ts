import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SellerFilter } from '@model';
import { AppService } from '@service';
import { SellerGridComponent } from '../../components';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css'],
})
export class SellerListComponent implements OnInit, AfterViewInit {
  sellerFilter: SellerFilter = {} as SellerFilter;

  @ViewChild(SellerGridComponent)
  gridComponent!: SellerGridComponent;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.sellerFilter = {} as SellerFilter;
  }

  ngAfterViewInit(): void {
    this.appService.setTitle('seller.listTitle');
    this.gridComponent.search();
  }

  valueChanges(sellerFilter: SellerFilter): void {
    this.sellerFilter = sellerFilter;
  }
}
