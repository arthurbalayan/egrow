/**
 * This interface represents the structure of the cached content in the
 * local storage.
 *
 * @param value is the data from the response.
 */
export interface CacheContent {
  id: string;
  expiry: number;
  value: any;
}
