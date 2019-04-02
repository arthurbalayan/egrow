import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Observable, of, Subject, throwError} from 'rxjs';
import {CacheContent} from './cache-content';
import {StorageService} from 'ngx-webstorage-service';
import {tap} from 'rxjs/operators';
import {EgrowApiRequest} from '../egrow-api-request';

export const EGROW_APP_CACHE = new InjectionToken<StorageService>('EGROW_APP_CACHE');

/**
 * This is the service which caches http requests in the local storage. It handles
 * request which are in flight by returning an observable which returns the value
 * as soon as the http request finishes.
 */
@Injectable()
export class ApiCacheService {

  private inFlightObservables: Map<string, Subject<any>> = new Map<string, Subject<any>>();

  constructor(@Inject(EGROW_APP_CACHE) private storage: StorageService<CacheContent>) {}

  /**
   * Gets the value from cache if the key is provided and request is available for caching.
   * If no value exists in cache, then check if the same call exists
   * in flight, if so return the subject. If not create a new
   * Subject inFlightObservable and return the source observable.
   */
  get(apiRequest: EgrowApiRequest, fallback: Observable<any>): Observable<any> | Subject<any> {

    const key = apiRequest.getUrl();

    if (apiRequest.useCache() && this.hasValidCachedValue(key)) {
      console.log(`%cGetting from cache ${key}`, 'color: green');
      return of(this.storage.get(key).value);
    } else if (this.inFlightObservables.has(key)) {
      return this.inFlightObservables.get(key);
    } else if (fallback && fallback instanceof Observable) {
      this.inFlightObservables.set(key, new Subject());
      console.log(`%c Calling api for ${key}`, 'color: purple');
      return fallback.pipe(tap((value) => {
        this.set(key, value, apiRequest.getMaxAge());
        return value;
      }));
    } else {
      return throwError('Requested key is not available in Cache');
    }
  }

  /**
   * Sets the value with key in the cache
   * Notifies all observers of the new value
   */
  set(key: string, value: any, maxAge: number): void {

    const cacheContent: CacheContent = <CacheContent>{id: key, value: value, expiry: Date.now() + maxAge};
    this.storage.set(cacheContent.id, cacheContent);

    this.notifyInFlightObservers(key, value);
  }

  /**
   * Checks if the a key exists in cache
   */
  has(key: string): boolean {
    return this.hasValidCachedValue(key);
  }

  /**
   * Publishes the value to all observers of the given
   * in progress observables if observers exist.
   */
  private notifyInFlightObservers(key: string, value: any): void {
    if (this.inFlightObservables.has(key)) {
      const inFlight = this.inFlightObservables.get(key);
      const observersCount = inFlight.observers.length;
      if (observersCount) {
        console.log(`%cNotifying ${inFlight.observers.length} flight subscribers for ${key}`, 'color: blue');
        inFlight.next(value);
      }
      inFlight.complete();
      this.inFlightObservables.delete(key);
    }
  }

  /**
   * Checks if the key exists and has not expired.
   */
  private hasValidCachedValue(key: string): boolean {

    const cacheContent: CacheContent = this.storage.get(key);

    if (null == cacheContent || this.isCacheExpired(cacheContent)) {
      console.log(`%cRemoved key from storage: ${key}`, 'color: grey');
      this.storage.remove(key);
      return false;
    } else {
      return true;
    }
  }

  private isCacheExpired(cacheContent: CacheContent): boolean {
    return cacheContent.expiry < Date.now();
  }
}
