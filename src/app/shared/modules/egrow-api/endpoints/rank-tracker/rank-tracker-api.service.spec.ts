import {TestBed} from '@angular/core/testing';

import {RankTrackerApiService} from './rank-tracker-api.service';

describe('RankTrackerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankTrackerApiService = TestBed.get(RankTrackerApiService);
    expect(service).toBeTruthy();
  });
});
