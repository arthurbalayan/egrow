import {Plan} from './plan';

/**
 * This interface represents the user object that is saved to the local storage
 * after a successful authentication via the REST API.
 */
export interface User {
  id: number;
  plan: Plan;
  email: string;
  password: string;
  jwtToken: string;
}
