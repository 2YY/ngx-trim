import { Pipe, PipeTransform } from '@angular/core';

export function trim(value: string): string {
  return value.trim();
}

@Pipe({
  name: 'ngxTrim'
})
export class NgxTrimPipe implements PipeTransform {

  transform(value: string): string {
    return trim(value);
  }

}
