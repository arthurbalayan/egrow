import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SavedSearchesComponent} from './pages/saved-searches/saved-searches.component';

const routes: Routes = [
    {path: '', component: SavedSearchesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SavedSearchesRoutingModule {
}
