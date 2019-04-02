import {Pipe, PipeTransform} from '@angular/core';

/**
 * This pipe transforms the inserted keywords of an input field. The transformation
 * splitting the keywords by ',' and by '\n', trimming and choosing only unique
 * keywords. Afterwards the keywords are joined by a ',' again for further analysis.
 *
 * The static functions have been added to be able to retrieve the number of keywords
 * without initializing the pipe.
 */
@Pipe({
  name: 'keywordsInput'
})
export class KeywordsInputPipe implements PipeTransform {

  /**
   * @param text are the inserted keywords
   * @returns amountKeywords is the amount of keywords in the text.
   */
  public static getNumKeywords(text: string): number {
    return KeywordsInputPipe.transformText(text).split(',').length;
  }

  private static transformText(text: string, args?: any): string {

    if (null != text && (-1 !== text.indexOf(',') || -1 !== text.indexOf('\n'))) {

      let uniqueSet = new Set();
      const keywords: string[] = [];

      text.split('\n').forEach(splitKeyword => {
        splitKeyword.split(',').forEach(value => keywords.push(value));
      });

      const uniqueKeywords = [];
      keywords.forEach((keyword: string) => {
        keyword = keyword.trim();
        if (0 !== keyword.length && !uniqueSet.has(keyword)) {
          uniqueSet = uniqueSet.add(keyword);
          uniqueKeywords.push(keyword);
        }
      });
      uniqueSet.clear();

      return uniqueKeywords.join(',');
    } else {
      return text;
    }
  }

  transform(text: string, args?: any): string {
    return KeywordsInputPipe.transformText(text, args);
  }
}
