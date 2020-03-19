import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0) {
      return value;
    }
    for (const item of value) {
      const resultArray = [];
      if (item.companyAddress === filterString) {
        resultArray.push(item);
      }
      return resultArray;
    }
  }

}
