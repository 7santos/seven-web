import { Component, Input } from '@angular/core';
import { DocType } from '@model';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
})
export class DocComponent {
  @Input() doc: string = '';

  @Input() docType: DocType | null = null;
}
