import {ChangeDetectorRef, Component, Input, OnInit, Optional, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatColumnDef, MatTable, MatTableDataSource} from '@angular/material';

/**
 * This component represents the checkbox column in the generic table with
 * all its functionality. It is deprecated as for now.
 */
@Component({
  selector: 'app-generic-table-checkbox-column',
  templateUrl: './generic-table-checkbox-column.component.html',
  styleUrls: ['./generic-table-checkbox-column.component.css']
})
export class GenericTableCheckboxColumnComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<any>;
  @ViewChild(MatColumnDef) columnDef: MatColumnDef;

  private selection: SelectionModel<any>;

  constructor(@Optional() public table: MatTable<any>, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.table) {
      this.cdRef.detectChanges();
      this.table.addColumnDef(this.columnDef);
    }
    this.selection = new SelectionModel<any>(true, []);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;

  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public isSelected(row): boolean {
    return this.selection.isSelected(row);
  }

  public unselectAll(): void {
    this.selection.clear();
  }
}
