import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell-phone',
  templateUrl: './cell-phone.component.html',
  styleUrls: ['./cell-phone.component.css'],
})
export class CellPhoneComponent {
  @Input() cellPhone: string = '';

  @Input() whatsapp: boolean = false;
}
