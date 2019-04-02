import {Injectable} from '@angular/core';
import {TableProject} from './table-project';
import {RankTrackerProject} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProject';
import {OverviewService} from '../overview.service';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';

/**
 * This service handles the retrieving of the list of rank tracker project from
 * the service of the parent component (OverviewService). It transforms the
 * api projects to table projects.
 */
@Injectable()
export class OverviewProjectsService extends AbstractInitialDataProvider<RankTrackerProject[], TableProject[]> {

  constructor(private overviewService: OverviewService) {
    super(overviewService.getData());
  }

  protected transform(apiProjects: RankTrackerProject[]): TableProject[] {

    const tableProjects: TableProject[] = [];

    for (const apiProject of apiProjects) {
      const tableProject: TableProject = new TableProject(apiProject);
      tableProjects.push(tableProject);
    }

    return tableProjects;
  }
}
