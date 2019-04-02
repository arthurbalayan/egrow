import {TestBed} from '@angular/core/testing';

import {AddProjectKeywordsService} from './add-project-keywords.service';

describe('AddProjectKeywordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProjectKeywordsService = TestBed.get(AddProjectKeywordsService);
    expect(service).toBeTruthy();
  });
});
