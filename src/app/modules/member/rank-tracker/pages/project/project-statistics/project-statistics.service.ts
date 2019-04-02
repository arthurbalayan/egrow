import {Injectable} from '@angular/core';
import {ProjectService} from '../project.service';
import {RankTrackerProjectFull} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';

/**
 * This service handles the retrieving and transformation of a rank tracker
 * project from the service of the parent component.
 */
@Injectable()
export class ProjectStatisticsService extends AbstractInitialDataProvider<RankTrackerProjectFull, RankTrackerProjectFull> {

  constructor(private projectService: ProjectService) {
    super(projectService.getData());
  }

  protected transform(input: RankTrackerProjectFull): RankTrackerProjectFull {
    return input;
  }
}
