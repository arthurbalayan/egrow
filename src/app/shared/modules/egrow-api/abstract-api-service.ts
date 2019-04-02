import {HttpClient} from '@angular/common/http';
import {ApiCacheService} from './cache/api-cache.service';
import {EgrowApiRequest} from './egrow-api-request';
import {EgrowApiRequestPost} from './egrow-api-request-post';
import {ApiService} from './api-service';
import {Observable} from 'rxjs';

/**
 * This class represents the basic implementation of an API service.
 * it provides the functionality of a GET, POST, PUT and DELETE request.
 * Additionally, it allows to cache GET request if possible.
 */
export abstract class AbstractApiService implements ApiService {

  protected constructor(private http: HttpClient, private cache: ApiCacheService, private apiUrl: string) {}

  get<T>(apiRequest: EgrowApiRequest): Observable<T> {
    return this.cache.get(apiRequest, this.http.get(this.getFinalUrl(apiRequest.getUrl())));
  }

  post<T>(apiRequest: EgrowApiRequestPost): Observable<T> {
    return this.http.post<T>(this.getFinalUrl(apiRequest.getUrl()), apiRequest.getPostContent(), {
      responseType: apiRequest.responseType as 'json',
      headers: apiRequest.headers
    });
  }

  put<T>(apiRequest: EgrowApiRequestPost): Observable<T> {
    return this.http.put<T>(this.getFinalUrl(apiRequest.getUrl()), apiRequest.getPostContent(), {
      headers: apiRequest.headers
    });
  }

  delete<T>(apiRequest: EgrowApiRequest): Observable<T> {
    return this.http.delete<T>(this.getFinalUrl(apiRequest.getUrl()));
  }

  private getFinalUrl(endpointUrl: string): string {
    return this.apiUrl + endpointUrl;
  }
}
