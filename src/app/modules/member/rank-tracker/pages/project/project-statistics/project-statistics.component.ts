import {Component, OnInit} from '@angular/core';
import {ProjectStatisticsService} from './project-statistics.service';
import {RankTrackerProjectFull} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';

/**
 * This component displays the statistics of a rank tracker project.
 */
@Component({
  selector: 'app-project-statistics',
  templateUrl: './project-statistics.component.html',
  styleUrls: ['./project-statistics.component.css'],
  providers: [ProjectStatisticsService]
})
export class ProjectStatisticsComponent implements OnInit {

  project: RankTrackerProjectFull;

  constructor(private service: ProjectStatisticsService) { }

  ngOnInit() {
    this.service.getData().subscribe(apiFullProject => {
      this.project = apiFullProject;
    });
  }
}
