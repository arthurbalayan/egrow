import {Injectable} from '@angular/core';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';
import {RankTrackerProjectFull} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {AddProjectService} from '../add-project.service';

/**
 * This service handles the retrieving of keywords from the rank tracker project.
 * It transforms the apiKeywords into a string which is then inserted in the
 * input field of the corresponding component.
 */
@Injectable()
export class AddProjectKeywordsService extends AbstractInitialDataProvider<RankTrackerProjectFull, string[]> {

  constructor(private addProjectService: AddProjectService) {
    super(addProjectService.getData());
  }

  protected transform(input: RankTrackerProjectFull): string[] {
    let transformedKeywords: string[] = [];
    if (null != input && null != input.keywords) {
      transformedKeywords = input.keywords.map(rankTrackerKeyword => rankTrackerKeyword.keyword);
    }
    return transformedKeywords;
  }
}
