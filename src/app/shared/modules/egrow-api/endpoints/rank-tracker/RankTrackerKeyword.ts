/**
 * This interface represents the structure of an API keyword in the
 * rank tracker project.
 *
 * @param id might not be set because the keyword has not been inserted in the
 *        database yet
 * @param keyword is the actual keyword
 * @param stats are the statistics about the keyword which are calculated via
 *        the REST API.
 */
export interface RankTrackerKeyword {
  id?: number;
  keyword: string;
  stats?: Object;
}
