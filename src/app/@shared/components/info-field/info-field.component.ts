import { Component, Input } from '@angular/core';
import { FieldType } from '@model';

@Component({
  selector: 'app-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.css'],
})
export class InfoFieldComponent {
  @Input() title: string = '';

  @Input() model: any;

  @Input() fieldType: FieldType = FieldType.INPUT;

  FieldType = FieldType;

  constructor() {}
}
