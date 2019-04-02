import {Injectable} from '@angular/core';
import {RankTrackerApiService} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/rank-tracker-api.service';
import {RankTrackerProjectFull} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {AbstractDataProvider} from '../../../../../shared/classes/abstract-data-provider';

/**
 * This service handles the retrieving of the rank tracker project from the API.
 * It loads the project when its component is initialized.
 */
@Injectable()
export class ProjectService extends AbstractDataProvider<RankTrackerProjectFull, RankTrackerProjectFull> {

  constructor(private api: RankTrackerApiService) {
    super();
  }

  protected transform(input: RankTrackerProjectFull): RankTrackerProjectFull {
    return input;
  }

  /**
   * Loads the project from the api via the project id when the component is
   * initialized.
   *
   * @param projectId
   */
  public loadProject(projectId: string): void {
    this.api.getProject(projectId).subscribe((project: RankTrackerProjectFull) => {
      this.sendData(project);
    });
  }

  /**
   * It filters all selected keywords and deletes all selected keywords from
   * the project and updates the rank tracker project on the API.
   *
   * @param selectedKeywords are the keywords that are selected in the table.
   */
  public deleteKeywords(selectedKeywords: string[]): void {

    this.currentValue.keywords = this.currentValue.keywords.filter(oldKeyword => {
      return !selectedKeywords.some(selectedKeyword => {
        return oldKeyword.keyword === selectedKeyword;
      });
    });

    this.api.updateProject(this.currentValue).subscribe(rankTrackerProject => {
      this.sendData(rankTrackerProject);
    });
  }
}
