import {Injectable} from '@angular/core';
import {RankTrackerProject} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProject';
import {OverviewService} from '../overview.service';
import {Statistics} from './Statistics';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';

/**
 * This service retrieves all rank tracker api projects and calculates statistics
 * of them. It transforms the api projects to a Statistics object and provides it
 * to its component.
 */
@Injectable()
export class OverviewStatisticsService extends AbstractInitialDataProvider<RankTrackerProject[], Statistics> {

  constructor(private overviewService: OverviewService) {
    super(overviewService.getData());
  }

  protected transform(apiProjects: RankTrackerProject[]): Statistics {

    const numProjects = apiProjects.length;
    let minRanking = Number.MAX_VALUE;
    let maxRanking = Number.MIN_VALUE;

    let totalRankings = 0;
    for (const apiProject of apiProjects) {

      if (null != apiProject.projectStats) {

        totalRankings += apiProject.projectStats.avgRanking;
        const currentMaxRanking = apiProject.projectStats.maxRanking;
        const currentMinRanking = apiProject.projectStats.minRanking;

        if (currentMaxRanking > maxRanking) {
          maxRanking = currentMaxRanking;
        }

        if (currentMinRanking < minRanking) {
          minRanking = currentMinRanking;
        }
      }
    }

    const avgRanking = totalRankings / numProjects;

    return <Statistics> {
      numProjects: numProjects,
      minRanking: minRanking,
      maxRanking: maxRanking,
      avgRanking: avgRanking
    };
  }
}
