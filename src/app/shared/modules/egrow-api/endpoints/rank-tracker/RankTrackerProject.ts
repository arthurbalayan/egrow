import {RankTrackerProduct} from './RankTrackerProduct';
import {RankTrackerProjectStats} from './RankTrackerProjectStats';

/**
 * This interface represents the structure of the basic rank tracker project.
 *
 * @param id is the ASIN of the product.
 */
export interface RankTrackerProject {
  id: string;
  product: RankTrackerProduct;
  projectStats: RankTrackerProjectStats;
}
