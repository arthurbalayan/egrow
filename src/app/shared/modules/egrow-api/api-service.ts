import {Observable} from 'rxjs';
import {EgrowApiRequest} from './egrow-api-request';
import {EgrowApiRequestPost} from './egrow-api-request-post';

/**
 * This interface represents the basic structure of an API service.
 * It includes the basic http functions GET, POST, PUT and DELETE.
 */
export interface ApiService {
  get(apiRequest: EgrowApiRequest): Observable<any>;
  post(apiRequestPost: EgrowApiRequestPost): Observable<any>;
  put(apiRequestPost: EgrowApiRequestPost): Observable<any>;
  delete(apiRequest: EgrowApiRequest): Observable<any>;
}
