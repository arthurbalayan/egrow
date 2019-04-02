import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeywordNicheToolComponent} from './pages/keyword-niche-tool/keyword-niche-tool.component';

const routes: Routes = [
    {path: '', component: KeywordNicheToolComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KeywordNicheToolRoutingModule {
}
