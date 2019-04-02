import {Injectable} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

/**
 * This service handles the selection of rows via the checkboxes. It returns
 * all selected rows when requested.
 */
@Injectable()
export class GenericTableSelectionService {

  private selection: SelectionModel<any>;

  constructor() {
    this.selection = new SelectionModel<any>(true, []);
  }

  public hasValue(): boolean {
    return this.selection.hasValue();
  }

  public toggle(row: any): void {
    this.selection.toggle(row);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(dataSource: MatTableDataSource<any>) {
    const numSelected = this.selection.selected.length;
    const numRows = dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all filtered rows if they are not all selected; otherwise clear selection. */
  public masterToggle(dataSource: MatTableDataSource<any>) {
    this.isAllSelected(dataSource) ?
        this.selection.clear() :
        dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  public isSelected(row): boolean {
    return this.selection.isSelected(row);
  }

  public unselectAll(): void {
    this.selection.clear();
  }

  /** Returns all selected rows in the dataSource */
  public getSelectedRows(dataSource: MatTableDataSource<any>): any[] {

    const selectedRows: any[] = [];

    dataSource.data.forEach(row => {
      if (this.selection.isSelected(row)) {
        selectedRows.push(row);
      }
    });

    return selectedRows;
  }
}
