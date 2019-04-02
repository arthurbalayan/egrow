import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatabaseResearchComponent} from './pages/database-research/database-research.component';

const routes: Routes = [
    {path: '', component: DatabaseResearchComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatabaseResearchRoutingModule {
}
