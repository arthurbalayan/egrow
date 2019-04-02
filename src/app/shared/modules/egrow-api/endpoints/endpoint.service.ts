import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

/**
 * This service represents the basic functionality of an endpoint of the REST API.
 * Every endpoint has a unique endpointUrl and it uses a flag to determine
 * whether a GET request can use the cached value or not.
 */
export abstract class EndpointService {

  protected useCache = false;

  constructor(private _endpointUrl: string) {}

  get endpointUrl(): string {
    return this._endpointUrl;
  }

  /**
   * Sets the flag to whether the next GET request can use the cache or not
   * after the request has been finished.
   * This flag is set to true whenever some entry on the database has changed
   * either by a POST, PUT or DELETE request.
   *
   * @param httpRequest is the request that will be performed.
   * @param useCache represents whether the next GET request can use the
   *        cache or not.
   */
  protected setUseCache(httpRequest: Observable<any>, useCache: boolean): Observable<any> {
    return httpRequest.pipe(tap((data) => {
      this.useCache = useCache;
      console.log('useCache set to: ' + useCache);
      return data;
    }));
  }
}
