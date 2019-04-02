import { Injectable } from '@angular/core';
import { ColumnSpecification } from '../column-specification';
import { Average } from './average.model';

@Injectable({
  providedIn: 'root'
})
export class AverageCounterService {

  constructor() {
  }


  /**
   * calculating averages of the rows given using ColumnSpecification types, after checking if column is numeric or not.
   * @param dataArr
   * @param columns
   */
  public avg(dataArr: any[], columns: ColumnSpecification[]): Average[] {
    const data = [];
    for (const i of columns) {
      const obj = {};
      let avg = 0;
      let min;
      let max;

      for (let row = 0; row < dataArr.length; row++) {
        if (isNaN(dataArr[row][i.id])) {
        } else {

          if (min === undefined && max === undefined) {
            min = dataArr[row][i.id];
            max = dataArr[row][i.id];
          }

          if (min > dataArr[row][i.id]) {
            min = dataArr[row][i.id];
          }
          if (max < dataArr[row][i.id]) {
            max = dataArr[row][i.id];
          }
          avg += dataArr[row][i.id];
          obj[i.id] = avg;
          obj['avg'] = avg;
          obj['max'] = max;
          obj['min'] = min;
          obj['name'] = i.title;
        }
      }
      obj['avg'] /= dataArr.length;
      if (obj[i.id]) {
        data.push(obj);
      }
    }
    return data;
  }
}
