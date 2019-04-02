import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericTableComponent} from './generic-table/generic-table.component';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {GenericTableColumnComponent} from './generic-table/generic-table-column/generic-table-column.component';
import {GenericTableCheckboxColumnComponent} from './generic-table/generic-table-checkbox-column/generic-table-checkbox-column.component';
import {GenericTableFilterComponent} from './generic-table/generic-table-filter/generic-table-filter.component';
import {GenericTableCheckboxColumnHeaderComponent} from './generic-table/generic-table-checkbox-column-header/generic-table-checkbox-column-header.component';
import {GenericTableCheckboxColumnCellComponent} from './generic-table/generic-table-checkbox-column-cell/generic-table-checkbox-column-cell.component';
import { GenericTableAverageStatisticsComponent } from './generic-table/generic-table-average-statistics/generic-table-average-statistics.component';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * This module contains all components and services that are required for the
 * for the functionality of the generic table. It exports the generic table.
 */
@NgModule({
  declarations: [
    GenericTableComponent,
    GenericTableColumnComponent,
    GenericTableCheckboxColumnComponent,
    GenericTableFilterComponent,
    GenericTableCheckboxColumnHeaderComponent,
    GenericTableCheckboxColumnCellComponent,
    GenericTableAverageStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    GenericTableComponent
  ],
})
export class EgrowTableModule { }
