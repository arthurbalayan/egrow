import {Component, OnInit} from '@angular/core';

export interface NavLink {
    name: String;
    routerLink: String;
}

/**
 * This component represents the base structure of the page in the member area.
 * It consists of a navigation bar which includes a profile button, a menu button
 * and the name of the current member component.
 */
@Component({
    selector: 'app-member-page',
    templateUrl: './member-page.component.html',
    styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit {

    navLinks: NavLink[] = [
        {name: 'Product Tracker', routerLink: 'product-tracker'},
        {name: 'Database Research', routerLink: 'database-research'},
        {name: 'Live Amazon Scanner', routerLink: 'live-amazon-scanner'},
        {name: 'KW & Niche Tool', routerLink: 'keyword-niche-tool'},
        {name: 'Rank Tracker', routerLink: 'rank-tracker'}
    ];

    constructor() {}

    ngOnInit() {}
}
