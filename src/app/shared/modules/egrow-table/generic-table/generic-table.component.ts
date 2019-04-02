import {Component, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ColumnSpecification} from './column-specification';
import {Observable, Subscription} from 'rxjs';
import {GenericTableSelectionService} from './generic-table-selection.service';
import {GenericTableService} from './generic-table.service';
import {GenericTableEventEmitter} from './generic-table-event-emitter';

/**
 * This component represents the generic table which used throughout the entire
 * application. It consists of functions for filtering, sorting, paging, deleting
 * selected rows (emitting the event for it) and adding new data (emitting event).
 *
 * All action buttons related to the entire table such as export, choosing columns
 * to be displayed and the "+" button are positioned in the top right corner above
 * the table. The search field is positioned above the table in the middle.
 *
 * Action buttons related to selected rows appear next to the header cell of the
 * checkbox such as the delete button.
 */
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
  providers: [
    GenericTableService,
    GenericTableSelectionService
  ]
})
export class GenericTableComponent<T> implements OnInit, OnDestroy {

  @Output() events: GenericTableEventEmitter<T> = new GenericTableEventEmitter(true);

  /**
   * The dataSource has to be in a key-value format without any second layer.
   * GOOD - EXAMPLE: {id: <string>, value: <string>}
   * BAD - EXAMPLE: {id: <any>.id, value: <any>.name}
   * If a complex object is passed to this table the sort functionality will be broken.
   */
  @Input() dataObservable: Observable<T[]>;
  @Input() customColumns: ColumnSpecification[];
  @Input() addButtonText: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('genericTableColumnTemplate') genericColumnTemplate: TemplateRef<any>;

  displayedColumns: string[] = ['select']; // default columns
  dataSource: MatTableDataSource<T>;
  dataSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(private genericTableService: GenericTableService, private selection: GenericTableSelectionService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {

    // Load all displayed columns and add generic column template if none is set
    for (let index = 0, len = this.customColumns.length; index < len; ++index) {
      const column = this.customColumns[index];
      if (null == column.template || typeof column.template === 'undefined') {
        column.template = this.genericColumnTemplate;
      }
      this.displayedColumns.push(this.customColumns[index].id);
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // Subscribe to data stream and unselect all checkboxes
    this.dataSubscription = this.dataObservable.subscribe(rows => {
      this.dataSource.data = rows;
      this.selection.unselectAll();
    });

    // Subscribe to service to delete rows
    this.deleteSubscription = this.genericTableService.getDeletedRows().subscribe(selectedRows => {
      this.events.delete(selectedRows);
    });
  }

  /**
   * Unsubscribes from all subscriptions as they get stacked otherwise.
   */
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.deleteSubscription.unsubscribe();
  }
}
