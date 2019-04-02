import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalesPageRoutingModule} from './sales-page-routing.module';
import {SalesPageComponent} from './pages/sales-page/sales-page.component';

@NgModule({
  imports: [
    CommonModule,
    SalesPageRoutingModule
  ],
  declarations: [SalesPageComponent]
})
export class SalesPageModule { }
