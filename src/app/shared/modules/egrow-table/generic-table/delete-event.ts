import {GenericTableEvent} from './generic-table-event';
import {GenericTableEventType} from './generic-table-event-type';

export class DeleteEvent<T> implements GenericTableEvent<T> {

  public type: GenericTableEventType = GenericTableEventType.DELETE;
  public data;

  constructor(data: T[]) {
    this.data = data;
  }
}
