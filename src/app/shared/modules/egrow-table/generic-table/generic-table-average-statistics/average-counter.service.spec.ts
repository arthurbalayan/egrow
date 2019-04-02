import { TestBed } from '@angular/core/testing';

import { AverageCounterService } from './average-counter.service';

describe('AverageCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AverageCounterService = TestBed.get(AverageCounterService);
    expect(service).toBeTruthy();
  });
});
