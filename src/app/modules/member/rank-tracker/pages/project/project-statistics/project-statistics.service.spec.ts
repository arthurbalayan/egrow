import {TestBed} from '@angular/core/testing';

import {ProjectStatisticsService} from './project-statistics.service';

describe('ProjectStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectStatisticsService = TestBed.get(ProjectStatisticsService);
    expect(service).toBeTruthy();
  });
});
