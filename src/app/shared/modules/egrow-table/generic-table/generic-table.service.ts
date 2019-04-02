import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {GenericTableSelectionService} from './generic-table-selection.service';
import {MatTableDataSource} from '@angular/material';

/**
 * This service handles the communication between the generic table and the
 * header of the checkboxes which initiates the delete of the selected rows.
 */
@Injectable()
export class GenericTableService {

  private deletionSubject: Subject<any[]> = new Subject();

  constructor(private selectionService: GenericTableSelectionService) { }

  /**
   * Publishes all selected rows when the delete button is clicked.
   * @param dataSource is the data which is displayed in the generic table.
   */
  public deleteRows(dataSource: MatTableDataSource<any>): void {
    this.deletionSubject.next(this.selectionService.getSelectedRows(dataSource));
  }

  public getDeletedRows(): Observable<any[]> {
    return this.deletionSubject.asObservable();
  }
}
