import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KeywordNicheToolRoutingModule} from './keyword-niche-tool-routing.module';
import {KeywordNicheToolComponent} from './pages/keyword-niche-tool/keyword-niche-tool.component';

@NgModule({
    imports: [
        CommonModule,
        KeywordNicheToolRoutingModule
    ],
    declarations: [KeywordNicheToolComponent]
})
export class KeywordNicheToolModule {
}
