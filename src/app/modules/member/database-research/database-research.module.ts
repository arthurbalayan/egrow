import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatabaseResearchRoutingModule} from './database-research-routing.module';
import {DatabaseResearchComponent} from './pages/database-research/database-research.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DatabaseResearchRoutingModule
    ],
    declarations: [
        DatabaseResearchComponent
    ]
})
export class DatabaseResearchModule {
}
