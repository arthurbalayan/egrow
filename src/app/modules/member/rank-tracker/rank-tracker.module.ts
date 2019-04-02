import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RankTrackerRoutingModule} from './rank-tracker-routing.module';
import {OverviewComponent} from './pages/overview/overview.component';
import {OverviewStatisticsComponent} from './pages/overview/overview-statistics/overview-statistics.component';
import {EgrowTableModule} from '../../../shared/modules/egrow-table/egrow-table.module';
import {AddProjectComponent} from './pages/add-project/add-project.component';
import {ProjectComponent} from './pages/project/project.component';
import {OverviewProjectsComponent} from './pages/overview/overview-projects/overview-projects.component';
import {ProjectKeywordsComponent} from './pages/project/project-keywords/project-keywords.component';
import {ProjectStatisticsComponent} from './pages/project/project-statistics/project-statistics.component';
import {TitleColumnComponent} from './pages/overview/overview-projects/title-column/title-column.component';
import {SharedMemberModule} from '../../../shared/components/member/shared-member.module';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {KeywordsInputPipe} from './pages/add-project/add-project-keywords/keywords-input.pipe';
import {AddProjectProductComponent} from './pages/add-project/add-project-product/add-project-product.component';
import {AddProjectKeywordsComponent} from './pages/add-project/add-project-keywords/add-project-keywords.component';
import {AddProjectSummaryComponent} from './pages/add-project/add-project-summary/add-project-summary.component';
import { CancelButtonComponent } from './pages/add-project/cancel-button/cancel-button.component';

@NgModule({
    imports: [
        CommonModule,
        RankTrackerRoutingModule,
        EgrowTableModule,
        SharedMemberModule,
		MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        OverviewComponent,
        OverviewStatisticsComponent,
        AddProjectComponent,
        ProjectComponent,
        OverviewProjectsComponent,
        ProjectKeywordsComponent,
        ProjectStatisticsComponent,
        TitleColumnComponent,
        KeywordsInputPipe,
        AddProjectProductComponent,
        AddProjectKeywordsComponent,
        AddProjectSummaryComponent,
        CancelButtonComponent
    ]
})
export class RankTrackerModule {
}
