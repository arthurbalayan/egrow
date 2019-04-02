import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeywordTrackerComponent} from './pages/keyword-tracker/keyword-tracker.component';

const routes: Routes = [
    {path: '', component: KeywordTrackerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KeywordTrackerRoutingModule {
}
