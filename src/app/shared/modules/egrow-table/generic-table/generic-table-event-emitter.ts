import {EventEmitter} from '@angular/core';
import {DeleteEvent} from './delete-event';
import {GenericTableEvent} from './generic-table-event';
import {AddEvent} from './add-event';

/**
 * It handles the emitting of events from the generic table to all its containers.
 */
export class GenericTableEventEmitter<T> extends EventEmitter<GenericTableEvent<T>> {

  /**
   * Emits delete event to all subscribers with selected rows as data.
   *
   * @param selectedRows are the rows to be deleted.
   */
  public delete(selectedRows: T[]): void {
    this.emit(new DeleteEvent(selectedRows));
  }

  /**
   * Emits add event to all subscribers.
   */
  public add(): void {
    this.emit(new AddEvent());
  }
}
