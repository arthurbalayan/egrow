import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {GenericTableSelectionService} from '../generic-table-selection.service';
import {GenericTableService} from '../generic-table.service';

/**
 * This component represents the header of the checkbox column. It has
 * the dataSource as an input to determine whether all checkboxes are selected
 * or not. Also it provides the functionality to delete the selected rows.
 */
@Component({
  selector: 'app-generic-table-checkbox-column-header',
  templateUrl: './generic-table-checkbox-column-header.component.html',
  styleUrls: ['./generic-table-checkbox-column-header.component.css']
})
export class GenericTableCheckboxColumnHeaderComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<any>;

  selection: GenericTableSelectionService;

  constructor(private genericTableService: GenericTableService, selection: GenericTableSelectionService) {
    this.selection = selection;
  }

  ngOnInit() {
  }

  public delete() {
    this.genericTableService.deleteRows(this.dataSource);
  }
}
