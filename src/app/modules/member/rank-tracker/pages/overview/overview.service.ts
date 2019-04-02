import {Injectable} from '@angular/core';
import {RankTrackerApiService} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/rank-tracker-api.service';
import {RankTrackerProject} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProject';
import {AbstractInitialDataProvider} from '../../../../../shared/classes/abstract-initial-data-provider';
import {forkJoin, Observable} from 'rxjs';

/**
 * This service retrieves all rank tracker projects of a user and provides it
 * to all services of the child components. It handles the deletion of projects
 * from the table and providing of refreshed data.
 */
@Injectable()
export class OverviewService extends AbstractInitialDataProvider<RankTrackerProject[], RankTrackerProject[]> {

  constructor(private api: RankTrackerApiService) {
    super(api.getProjects());
  }

  protected transform(input: RankTrackerProject[]): RankTrackerProject[] {
    return input;
  }

  /**
   * Deletes all selected projects from the table with a single request for
   * each project. Afterwards the current projects are pulled from the API
   * again and published to all subscribers.
   *
   * @param selectedProjects are the projects which were selected in the table.
   */
  public deleteProjects(selectedProjects): void {

    const apiRequests: Observable<string>[] = [];

    selectedProjects.forEach(selectedProject => {
      const projectId = selectedProject.id;
      apiRequests.push(this.api.deleteProject(projectId));
    });

    // Waits till all projects are deleted and retrieves all projects again
    forkJoin(apiRequests).subscribe(() => this.api.getProjects().subscribe(apiProjects => {
      this.sendData(apiProjects);
    }));
  }
}
