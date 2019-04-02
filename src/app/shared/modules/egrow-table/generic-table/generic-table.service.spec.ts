import {TestBed} from '@angular/core/testing';

import {GenericTableService} from './generic-table.service';

describe('GenericTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericTableService = TestBed.get(GenericTableService);
    expect(service).toBeTruthy();
  });
});
