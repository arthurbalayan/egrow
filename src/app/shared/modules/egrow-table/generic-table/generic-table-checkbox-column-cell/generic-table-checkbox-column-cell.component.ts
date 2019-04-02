import {Component, Input, OnInit} from '@angular/core';
import {GenericTableSelectionService} from '../generic-table-selection.service';

/**
 * This component represents the cell content of the checkbox column. It has
 * the row as an input to determine whether the checkbox is selected or not.
 */
@Component({
  selector: 'app-generic-table-checkbox-column-cell',
  templateUrl: './generic-table-checkbox-column-cell.component.html',
  styleUrls: ['./generic-table-checkbox-column-cell.component.css']
})
export class GenericTableCheckboxColumnCellComponent implements OnInit {

  @Input() row: any[];

  selection: GenericTableSelectionService;

  constructor(selection: GenericTableSelectionService) {
    this.selection = selection;
  }

  ngOnInit() {
  }
}
