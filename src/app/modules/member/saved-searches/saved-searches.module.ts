import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SavedSearchesRoutingModule} from './saved-searches-routing.module';
import {SavedSearchesComponent} from './pages/saved-searches/saved-searches.component';

@NgModule({
    imports: [
        CommonModule,
        SavedSearchesRoutingModule
    ],
    declarations: [SavedSearchesComponent]
})
export class SavedSearchesModule {
}
