import {TestBed} from '@angular/core/testing';

import {AddProjectSummaryService} from './add-project-summary.service';

describe('AddProjectSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProjectSummaryService = TestBed.get(AddProjectSummaryService);
    expect(service).toBeTruthy();
  });
});
