import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../shared/modules/egrow-api/authentication/auth.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * This service handles the authentication of the user via email and password.
 * On success the user is forwarded to to the returnUrl or simply the member area.
 */
@Injectable()
export class LoginService {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
  }

  public login(email: string, password: string): Observable<any> {

    return this.authService.login(email, password).pipe(
      tap(() => {
          console.log('%cLogin successful', 'color:green');

          // get return url from route parameters or default to '/member'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/member';
          this.router.navigate([returnUrl]);
        },
        error => {
          console.log('%cLogin failed', 'color:red', error);
        }));
  }
}
