import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MemberRoutingModule} from './member-routing.module';
import {MemberPageComponent} from './components/member-page/member-page.component';
import {MemberPageFooterComponent} from './components/member-page/member-page-footer/member-page-footer.component';
import {MemberPageHeaderComponent} from './components/member-page/member-page-header/member-page-header.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTooltipModule} from '@angular/material';

/**
 * This module includes all pages which are visible to members only. All pages
 * are lazy loaded.
 */
@NgModule({
    imports: [
        CommonModule,
        MemberRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
    ],
    declarations: [
        MemberPageComponent,
        MemberPageFooterComponent,
        MemberPageHeaderComponent,
    ],
    exports: [
      MemberPageComponent
    ]
})
export class MemberModule {
}
