import {TestBed} from '@angular/core/testing';

import {OverviewProjectsService} from './overview-projects.service';

describe('OverviewProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverviewProjectsService = TestBed.get(OverviewProjectsService);
    expect(service).toBeTruthy();
  });
});
