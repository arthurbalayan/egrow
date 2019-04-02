import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NonMemberRoutingModule} from './non-member-routing.module';
import {NonMemberPageComponent} from './components/non-member-page/non-member-page.component';
import {NonMemberPageHeaderComponent} from './components/non-member-page/non-member-page-header/non-member-page-header.component';
import {NonMemberPageHeadComponent} from './components/non-member-page/non-member-page-head/non-member-page-head.component';
import {NonMemberPageFooterComponent} from './components/non-member-page/non-member-page-footer/non-member-page-footer.component';

/**
 * This module is responsible for all pages which are visible to non members.
 * All pages are lazy loaded.
 */
@NgModule({
  imports: [
    CommonModule,
    NonMemberRoutingModule
  ],
  declarations: [
    NonMemberPageComponent,
    NonMemberPageHeaderComponent,
    NonMemberPageHeadComponent,
    NonMemberPageFooterComponent
  ],
  exports: [
    NonMemberPageComponent
  ]
})
export class NonMemberModule { }
