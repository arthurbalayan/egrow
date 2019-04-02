import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductTrackerRoutingModule} from './product-tracker-routing.module';
import {ProductTrackerComponent} from './pages/product-tracker/product-tracker.component';

@NgModule({
    imports: [
        CommonModule,
        ProductTrackerRoutingModule
    ],
    declarations: [ProductTrackerComponent]
})
export class ProductTrackerModule {
}
