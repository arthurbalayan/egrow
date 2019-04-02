/**
 * Represents the api response from a successful authentication. It includes
 * a jwt token and information about the plan (when it expires).
 *
 * @param token is the JWT generated by the API.
 * @param plan contains the expiry date of the plan as ms since epoch time.
 */
export interface AuthenticatedUser {
  token: string;
  plan: {
    expires: number
  };
}