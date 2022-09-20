import { Injectable } from '@angular/core';
import { DocType, EnumValue } from '@model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class EnumService {
  constructor(private translateService: TranslateService) {}

  getDocTypes(): EnumValue[] {
    return this.getEnumValues(DocType, 'enums.docType.');
  }

  private getEnumValues(o: {}, key: string): EnumValue[] {
    const keys = Object.keys(o);

    return keys.map(
      (value) =>
        new EnumValue(value, this.translateService.instant(key + value))
    );
  }
}
