import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KeywordTrackerRoutingModule} from './keyword-tracker-routing.module';
import {KeywordTrackerComponent} from './pages/keyword-tracker/keyword-tracker.component';

@NgModule({
    imports: [
        CommonModule,
        KeywordTrackerRoutingModule
    ],
    declarations: [KeywordTrackerComponent]
})
export class KeywordTrackerModule {
}
