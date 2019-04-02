import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LiveAmazonScannerRoutingModule} from './live-amazon-scanner-routing.module';
import {LiveAmazonScannerComponent} from './pages/live-amazon-scanner/live-amazon-scanner.component';

@NgModule({
    imports: [
        CommonModule,
        LiveAmazonScannerRoutingModule
    ],
    declarations: [LiveAmazonScannerComponent]
})
export class LiveAmazonScannerModule {
}
