import {Component, OnInit} from '@angular/core';
import {OverviewStatisticsService} from './overview-statistics.service';
import {Statistics} from './Statistics';

/**
 * This component displays the statistics to all displayed rank tracker projects.
 */
@Component({
    selector: 'app-overview-statistics',
    templateUrl: './overview-statistics.component.html',
    styleUrls: ['./overview-statistics.component.css'],
    providers: [OverviewStatisticsService]
})
export class OverviewStatisticsComponent implements OnInit {

    statistics: Statistics;

    constructor(private overviewStatisticsService: OverviewStatisticsService) {
    }

    ngOnInit() {
        this.overviewStatisticsService.getData().subscribe(statistics => this.statistics = statistics);
    }
}
