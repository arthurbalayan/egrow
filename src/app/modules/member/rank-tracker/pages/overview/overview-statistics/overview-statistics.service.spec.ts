import {TestBed} from '@angular/core/testing';

import {OverviewStatisticsService} from './overview-statistics.service';

describe('OverviewStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverviewStatisticsService = TestBed.get(OverviewStatisticsService);
    expect(service).toBeTruthy();
  });
});
