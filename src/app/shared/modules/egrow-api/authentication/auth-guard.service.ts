import {Injectable, isDevMode} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';

/**
 * This is the service that activates the rout to the member area via the
 * AuthService. The authentication service checks the status of the
 * JWT-Token and returns an Observable with the boolean equivalent of the
 * status. If the JWT-Token is invalid the user is forwarded to the
 * login page.
 *
 * If the app is in development mode no authentication check is performed.
 */
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (isDevMode()) {
      return true;
    } else {
      return this.authService.isJwtTokenValid().pipe(tap(isJwtTokenValid => {
        if (!isJwtTokenValid) {
          this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        }
        return isJwtTokenValid;
      }));
    }
  }
}
