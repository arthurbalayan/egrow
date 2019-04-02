import {RankTrackerProject} from './RankTrackerProject';
import {RankTrackerKeyword} from './RankTrackerKeyword';

/**
 * This interface represents the structure of the full rank tracker project
 * which includes all keywords related to a project. This object is used
 * for the project page.
 */
export interface RankTrackerProjectFull extends RankTrackerProject {
  keywords: RankTrackerKeyword[];
}
