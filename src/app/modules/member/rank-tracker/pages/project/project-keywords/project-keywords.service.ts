import {Injectable} from '@angular/core';
import {ProjectService} from '../project.service';
import {TableKeyword} from './table-keyword';
import {RankTrackerProjectFull} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {RankTrackerKeyword} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerKeyword';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';

/**
 * This service retrieves the full rank tracker project and transform it to an
 * array of table keywords. Those keywords are displayed in the table of the
 * component of this service.
 */
@Injectable()
export class ProjectKeywordsService extends AbstractInitialDataProvider<RankTrackerProjectFull, TableKeyword[]> {

  constructor(private projectService: ProjectService) {
    super(projectService.getData());
  }

  protected transform(apiProject: RankTrackerProjectFull): TableKeyword[] {

    const apiKeywords: RankTrackerKeyword[] = apiProject.keywords;

    const keywords: TableKeyword[] = [];

    if (null != apiKeywords) {
      for (const apiKeyword of apiKeywords) {
        const tableProject: TableKeyword = {
          id: apiKeyword.id,
          name: apiKeyword.keyword
        };
        keywords.push(tableProject);
      }
    }

    return keywords;
  }
}
