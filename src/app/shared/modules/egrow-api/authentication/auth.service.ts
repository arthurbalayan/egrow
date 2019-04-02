import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from './user';
import {catchError, map, pluck} from 'rxjs/operators';
import {LoginApiService} from '../endpoints/login/login-api.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {DecodedJwtToken} from './decoded-jwt-token';
import {StorageService} from 'ngx-webstorage-service';
import {EGROW_APP_CACHE} from '../cache/api-cache.service';
import {Router} from '@angular/router';
import {AuthenticatedUser} from '../endpoints/login/AuthenticatedUser';
import {Plans} from './plans';

const CURRENT_USER_KEY = 'CURRENT_USER';

/**
 * This service handles the authentication of the user. It performs the login
 * and saves the information of the response in the local storage. The validation
 * is done with a JWT-Token which is returned after a successful login and
 * refreshed every 24 hours. The refresh is done automatically without the user
 * noticing it in the background.
 *
 * The service loads the user object from the local storage during construction
 * and holds the most current value in the @param user.
 */
@Injectable()
export class AuthService {

  public user$: Observable<User>;
  public user: User;

  private jwtService: JwtHelperService;
  private userSubject: BehaviorSubject<User>;
  private isTokenRefreshing = false;

  constructor(@Inject(EGROW_APP_CACHE) private storage: StorageService<User>,
              private loginApi: LoginApiService,
              private router: Router) {

    this.jwtService = new JwtHelperService();

    if (this.storage.has(CURRENT_USER_KEY)) {
      this.user = this.storage.get(CURRENT_USER_KEY);
    } else {
      this.user = null;
    }

    this.userSubject = new BehaviorSubject<User>(this.user);
    this.user$ = this.userSubject.asObservable();
  }

  /**
   * Performs a login of a user with its credentials. The request is processed
   * via the API service. After a successful authentication a JWT-Token is
   * returned by the API. This jwtToken is decoded and its information is saved
   * in the current user object.
   *
   * @param email is the email which was used for registration.
   * @param password is the password which was used for registration.
   * @returns Observable of the user object.
   */
  public login(email: string, password: string): Observable<User> {

    return this.loginApi.authenticate(email, password).pipe(map((authenticatedUser: AuthenticatedUser) => {

      const jwtToken = authenticatedUser.token;

      // login successful if there's a jwt jwtToken in the response
      const decodedToken: DecodedJwtToken = this.jwtService.decodeToken(jwtToken);

      const user = <User>{
        id: parseInt(decodedToken.sub, 10),
        plan: {
          planType: Plans.getType(decodedToken.auth),
          expires: authenticatedUser.plan.expires
        },
        rights: decodedToken.auth,
        email: email,
        password: password,
        jwtToken: jwtToken
      };

      this.saveUser(user);

      return user;
    }));
  }

  /**
   * Performs a logout of the current user from the member area. Therefore,
   * the current user object is removed from the local storage, all subscribers
   * receive the updated user object (null) and the user is forwarded to the
   * public pages.
   */
  public logout(): void {
    this.saveUser(null);
    this.storage.remove(CURRENT_USER_KEY); // remove user from local storage to log user out
    this.router.navigate(['']);
  }

  /**
   * Validates the JWT-Token and returns the status of it. The status depends on
   * whether the JWT-Token is set and whether it is expired or not.
   *
   * @returns Observable with the boolean value whether the JWT-Token is valid or not.
   */
  public isJwtTokenValid(): Observable<boolean> {
    return this.getValidJwtToken().pipe(
      map(jwtToken => null != jwtToken && !this.jwtService.isTokenExpired(jwtToken)),
      catchError(err => of(false)));
  }

  /**
   * Returns a valid jwt if it is available and not expired. Otherwise it
   * returns null or refreshes the jwtToken.
   *
   * @returns string is the JWT-Token.
   */
  public getValidJwtToken(): Observable<string> {

    if (null == this.user) {
      return of(null);
    }

    const jwtToken = this.user.jwtToken;

    if (!this.jwtService.isTokenExpired(jwtToken)) {
      return of(jwtToken);
    } else {
      return this.refreshToken().pipe(pluck('jwtToken'));
    }
  }

  /**
   * Refreshes the JWT-Token of the current user if the user is available
   * and no other process is refreshing the jwtToken already. The check whether
   * the jwtToken is refreshing is necessary so no endless loop is triggered.
   *
   * It is performed when the jwtToken is expired before an API call by the
   * JWT-Interceptor.
   *
   * @returns Observable which includes the user with the refreshed JWT-Token.
   */
  public refreshToken(): Observable<User> {

    if (null != this.user && !this.isTokenRefreshing) {

      this.isTokenRefreshing = true;

      const email: string = this.user.email;
      const password: string = this.user.password;

      return this.login(email, password);
    }

    return this.userSubject.asObservable();
  }

  /**
   * Saves the user value and publishes it to all subscribers. The user object
   * is saved in the local storage. The @param isTokenRefreshing is set to false
   * so if needed the jwtToken can be refreshed again.
   *
   * @param user which needs to be saved and published to all subscribers.
   */
  private saveUser(user: User): void {
    this.user = user;
    this.storage.set(CURRENT_USER_KEY, this.user);
    this.isTokenRefreshing = false;
    this.userSubject.next(this.user);
  }
}
