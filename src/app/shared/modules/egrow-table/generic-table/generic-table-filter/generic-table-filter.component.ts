import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

/**
 * This components represents the filter above the generic table with its
 * functionality. Its input is the dataSource to which the filter is
 * applied.
 */
@Component({
  selector: 'app-generic-table-filter',
  templateUrl: './generic-table-filter.component.html',
  styleUrls: ['./generic-table-filter.component.css']
})
export class GenericTableFilterComponent implements OnInit {

  @Input() dataSource: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
  }

  /** Apply filter in the text field */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
