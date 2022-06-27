import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css'],
})
export class FilterButtonsComponent {
  @Input() searchDisabled: boolean = false;

  @Input() link: string = '';

  @Output() search: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
}
