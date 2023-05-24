import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remove_title'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    new Array<string>("Mrs.", "Mr.", "Ms.").forEach(element => {
      if (value.includes(element))
        value = value.replace(element, "");
    })

    return value;
  }

}
