import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiveAmazonScannerComponent} from './pages/live-amazon-scanner/live-amazon-scanner.component';

const routes: Routes = [
    {path: '', component: LiveAmazonScannerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LiveAmazonScannerRoutingModule {
}
