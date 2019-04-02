import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductTrackerComponent} from './pages/product-tracker/product-tracker.component';

const routes: Routes = [
    {path: '', component: ProductTrackerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductTrackerRoutingModule {
}
