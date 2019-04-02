import {TestBed} from '@angular/core/testing';

import {ProjectKeywordsService} from './project-keywords.service';

describe('ProjectKeywordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectKeywordsService = TestBed.get(ProjectKeywordsService);
    expect(service).toBeTruthy();
  });
});
