import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css'],
})
export class BasicInputComponent {
  @Input() placeholder: string = '';

  @Input() inputFormControl: FormControl = new FormControl({});

  @Output() restart: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() search: EventEmitter<void> = new EventEmitter<void>();

  @Output() clear: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
}
