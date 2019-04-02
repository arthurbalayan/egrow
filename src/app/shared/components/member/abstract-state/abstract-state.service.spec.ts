import {TestBed} from '@angular/core/testing';

import {AbstractStateService} from './abstract-state.service';

describe('AbstractStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractStateService = TestBed.get(AbstractStateService);
    expect(service).toBeTruthy();
  });
});
