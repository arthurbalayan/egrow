import {Component, Input, OnInit} from '@angular/core';
import {ColumnInputs} from '../column-inputs';

/**
 * This component represents a generic template for a table column.
 * It has as an input the rowElement that is rendered and the id
 * of the column it represents to retrieve data from the rowElement
 * for the specific cell.
 */
@Component({
  selector: 'app-generic-table-column',
  templateUrl: './generic-table-column.component.html',
  styleUrls: ['./generic-table-column.component.css']
})
export class GenericTableColumnComponent implements OnInit, ColumnInputs {

  @Input() rowElement: any;
  @Input() columnId: number;

  constructor() { }

  ngOnInit() {
  }

}
