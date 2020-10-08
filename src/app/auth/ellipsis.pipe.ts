import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe {
    transform(val, args) {
        if (args === undefined) {
            return val;
        }

        if (val && (val.length > args)) {
            return val.substring(0, args) + '...';
        } else {
            return val;
        }
    }
}

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Pipe({
  name: 'ampm'
})
export class AmPmPipe {
  transform(val) {
    if (val) {
      val = val.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [val];
      if (val.length > 1) { // If time format correct
        val = val.slice(1);  // Remove full string match value
        val[5] = +val[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        val[0] = +val[0] % 12 || 12; // Adjust hours
      }
      return val.join(''); // return adjusted time or original string

    }else {
      return val;
    }
  }
}
