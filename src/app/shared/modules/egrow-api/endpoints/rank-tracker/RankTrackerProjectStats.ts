/**
 * This interface represents the structure of the statistics that have been
 * calculated via the REST API of all projects.
 */
export interface RankTrackerProjectStats {
  minRanking: number;
  maxRanking: number;
  avgRanking: number;
  numKeywords: number;
  weeklyChange: number;
  monthlyChange: number;
}
