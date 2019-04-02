import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EgrowApiService} from '../../egrow-api.service';
import {EgrowApiRequestPost} from '../../egrow-api-request-post';
import {EndpointService} from '../endpoint.service';
import {AuthenticatedUser} from './AuthenticatedUser';

/**
 * This service handles all API request to the authentication endpoint. Its
 * only function is to authenticate a user by the email and password.
 */
@Injectable()
export class LoginApiService extends EndpointService {

  constructor(private apiService: EgrowApiService) {
    super('authentication');
  }

  /**
   * Authenticates a user with it email and password and returns the JWT-Token
   * if the authentication is successful. The response type of the request needs
   * to be set because the default is json.
   *
   * @param email is the email of the user.
   * @param password is the password of the user.
   * @returns Observable contains a JWT-Token after a successful request.
   */
  public authenticate(email: string, password: string): Observable<AuthenticatedUser> {

    const userCredentials = JSON.stringify({'email': email, 'password': password});

    const loginRequest: EgrowApiRequestPost = new EgrowApiRequestPost(this.endpointUrl, userCredentials);

    return this.apiService.post<AuthenticatedUser>(loginRequest);
  }
}
