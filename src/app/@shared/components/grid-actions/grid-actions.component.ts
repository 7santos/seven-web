import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid-actions',
  templateUrl: './grid-actions.component.html',
  styleUrls: ['./grid-actions.component.css'],
})
export class GridActionsComponent {
  @Input() id: string = '';

  @Output() edit: EventEmitter<string> = new EventEmitter<string>();

  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}
