/**
 * This interface represents the decoded JWT-Token which is returned from the
 * REST API after a successful authentication.
 */
export interface DecodedJwtToken {
  sub: string;
  auth: AuthorityEntry[];
  iat: number;
  exp: number;
}

export interface AuthorityEntry {
  authority: string;
}
