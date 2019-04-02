import {TestBed} from '@angular/core/testing';

import {GenericTableSelectionService} from './generic-table-selection.service';

describe('GenericTableSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericTableSelectionService = TestBed.get(GenericTableSelectionService);
    expect(service).toBeTruthy();
  });
});
