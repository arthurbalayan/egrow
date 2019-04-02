import {Component, OnInit} from '@angular/core';
import {OverviewService} from './overview.service';

/**
 * Is the parent component of the overview page. It holds the component that
 * displays all projects in a table and the components which displays the
 * statistics of the displayed projects.
 */
@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    providers: [
        OverviewService
    ]
})
export class OverviewComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }
}
