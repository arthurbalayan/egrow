import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'rank-tracker', pathMatch: 'full'},
    {path: 'database-research', loadChildren: './database-research/database-research.module#DatabaseResearchModule'},
    {path: 'keyword-niche-tool', loadChildren: './keyword-niche-tool/keyword-niche-tool.module#KeywordNicheToolModule'},
    {path: 'keyword-tracker', loadChildren: './keyword-tracker/keyword-tracker.module#KeywordTrackerModule'},
    {path: 'live-amazon-scanner', loadChildren: './live-amazon-scanner/live-amazon-scanner.module#LiveAmazonScannerModule'},
    {path: 'product-tracker', loadChildren: './product-tracker/product-tracker.module#ProductTrackerModule'},
    {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
    {path: 'rank-tracker', loadChildren: './rank-tracker/rank-tracker.module#RankTrackerModule'},
    {path: 'saved-searches', loadChildren: './saved-searches/saved-searches.module#SavedSearchesModule'},
    {path: '**', redirectTo: 'database-research'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule {
}
