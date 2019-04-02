import {Injectable} from '@angular/core';
import {SimpleTableKeyword} from './add-project-summary.component';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';
import {RankTrackerProjectFull} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {AddProjectService} from '../add-project.service';

/**
 * This service handles the presentation of all information of the process of adding
 * a rank tracker project. It transform the rank tracker project to a list of
 * keywords which a presented in a table.
 */
@Injectable()
export class AddProjectSummaryService extends AbstractInitialDataProvider<RankTrackerProjectFull, SimpleTableKeyword[]> {

  constructor(private addProjectService: AddProjectService) {
    super(addProjectService.getData());
  }

  public transform(rankTrackerProject: RankTrackerProjectFull): SimpleTableKeyword[] {

    let simpleKeywords: SimpleTableKeyword[] = [];

    if (null != rankTrackerProject.keywords) {
      simpleKeywords = rankTrackerProject.keywords.map(rankTrackerKeyword => {
        return <SimpleTableKeyword>{
          keyword: rankTrackerKeyword.keyword,
          numberWords: rankTrackerKeyword.keyword.split(' ').length
        };
      });
    }

    return simpleKeywords;
  }

  /**
   * It deletes the selected keywords from the table of the summary page and updates
   * the current value of the parent service so all state components are updated.
   *
   * @param selectedKeywords are the keywords which were selected in the table.
   */
  public deleteKeywords(selectedKeywords: SimpleTableKeyword[]): void {
    const filteredKeywords = this.currentValue.filter((projectKeyword: SimpleTableKeyword) => {
      return !selectedKeywords.some((selectedKeyword: SimpleTableKeyword) => {
        return selectedKeyword.keyword === projectKeyword.keyword;
      });
    }).map(simpleKeyword => simpleKeyword.keyword);
    this.addProjectService.setKeywords(filteredKeywords);
  }
}
