import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './pages/overview/overview.component';
import {ProjectComponent} from './pages/project/project.component';
import {AddProjectComponent} from './pages/add-project/add-project.component';

const routes: Routes = [
    {path: '', component: OverviewComponent, data: {title: 'Rank Tracker'}},
    {path: 'projects/:id', component: ProjectComponent, data: {title: 'Project'}},
    {path: 'add-project', component: AddProjectComponent, data: {title: 'Add Project'}},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RankTrackerRoutingModule {

}
