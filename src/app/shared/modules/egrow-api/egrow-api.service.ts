import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCacheService} from './cache/api-cache.service';
import {AbstractApiService} from './abstract-api-service';
import {environment} from '../../../../environments/environment';

/**
 * This service is the implementation of the current REST API. The url of the
 * REST API depends on the environment in which the application is running.
 */
@Injectable()
export class EgrowApiService extends AbstractApiService {

  constructor(http: HttpClient, cache: ApiCacheService) {
    super(http, cache, environment.apiUrl);
  }
}
