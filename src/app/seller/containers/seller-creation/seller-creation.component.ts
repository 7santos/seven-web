import { AfterViewInit, Component } from '@angular/core';
import { AppService } from '@service';

@Component({
  selector: 'app-seller-creation',
  templateUrl: './seller-creation.component.html',
  styleUrls: ['./seller-creation.component.css'],
})
export class SellerCreationComponent implements AfterViewInit {
  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    this.appService.setTitle('seller.formTitle');
  }
}
