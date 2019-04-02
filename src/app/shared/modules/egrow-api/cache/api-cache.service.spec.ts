import {TestBed} from '@angular/core/testing';

import {ApiCacheService} from './api-cache.service';

describe('ApiCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCacheService = TestBed.get(ApiCacheService);
    expect(service).toBeTruthy();
  });
});
