import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../../shared/modules/egrow-api/authentication/auth.service';

describe('LoginService', () => {
  beforeEach(() => {

    const spy = jasmine.createSpyObj('AuthService', ['getValue']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoginService, {provide: AuthService, use: spy}]
    });
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
