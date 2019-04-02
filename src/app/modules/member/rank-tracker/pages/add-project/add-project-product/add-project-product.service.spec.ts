import {TestBed} from '@angular/core/testing';

import {AddProjectProductService} from './add-project-product.service';

describe('AddProjectProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProjectProductService = TestBed.get(AddProjectProductService);
    expect(service).toBeTruthy();
  });
});
