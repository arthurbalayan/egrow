import {Pipe, PipeTransform} from '@angular/core';

const ASIN_REGEX_IN_URL: RegExp = new RegExp('(dp\\/|gp\\/product\\/)(B[0-9A-Z]{2}[0-9A-Z]{7}|[0-9]{9}(X|[0-9]))');

/**
 * This pipe searches for an ASIN in the input string and returns it. The Regex
 * is searching for an ASIN in an amazon url of a product page.
 */
@Pipe({
  name: 'asinInput'
})
export class AsinInputPipe implements PipeTransform {

  transform(value: string): string {

    const asin = ASIN_REGEX_IN_URL.exec(value);

    if (null != asin) {
      return asin[2];
    } else {
      return value;
    }
  }
}
