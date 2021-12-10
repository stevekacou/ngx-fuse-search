import { Pipe, PipeTransform } from '@angular/core';
import Fuse from 'fuse.js'
import { NgxFuseSearchOptions } from './ngx-fuse-search.types';

@Pipe({
  name: 'ngxFuseSearch',
  pure: false
})
export class NgxFuseSearchPipe implements PipeTransform {
  
  /**
     * @param items object from array
     * @param term term's search
     * @param options fuse options, see: https://fusejs.io/api/options.html
     */
   transform(items: any, term: string, options?: NgxFuseSearchOptions): any {
    if (!term || !items) return items;

    return NgxFuseSearchPipe.filter(items, term, options);
  }

  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   *
   */
  static filter(items: Array<{ [key: string]: any }>, term: string, options?: NgxFuseSearchOptions): Array<{ [key: string]: any }> {
    if(!Array.isArray(items)) {
      return items;
    }
    
    if(!options) {
      options = {
        isCaseSensitive: false,
        keys: Object.keys(items[0]),
        shouldSort: true
      };
    }
    const fuse = new Fuse(items, options);
    const result = fuse.search(term);
    console.info(result);
    return result.map(item => item.item);
  }

}
