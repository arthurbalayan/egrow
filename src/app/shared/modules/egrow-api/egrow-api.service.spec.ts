import {TestBed} from '@angular/core/testing';

import {EgrowApiService} from './egrow-api.service';

describe('EgrowApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgrowApiService = TestBed.get(EgrowApiService);
    expect(service).toBeTruthy();
  });
});
