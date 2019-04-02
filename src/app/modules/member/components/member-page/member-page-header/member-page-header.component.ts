import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../../../shared/modules/egrow-api/authentication/auth.service';
import {TitleService} from '../../../../../shared/services/title.service';
import {Observable} from 'rxjs';

/**
 * This component represents the header of the member page. It includes a navigation
 * which can be toggled from the left and opens a menu with links to other tools.
 * Additionally, the title of the current tool (component) is shown and a profile
 * button is available at the very left.
 */
@Component({
    selector: 'app-member-page-header',
    templateUrl: './member-page-header.component.html',
    styleUrls: ['./member-page-header.component.css']
})
export class MemberPageHeaderComponent implements OnInit {

    @Output() toggleNavBar = new EventEmitter<boolean>();
    navigationTitle: Observable<string>;

    constructor(private authService: AuthService, private titleService: TitleService) { }

    ngOnInit() {
        this.navigationTitle = this.titleService.getNavigationTitle();
    }
}
