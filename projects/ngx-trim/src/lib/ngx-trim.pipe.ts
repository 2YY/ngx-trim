import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxTrim'
})
export class NgxTrimPipe implements PipeTransform {

  transform(value: string): string {
    return value.trim();
  }

}
