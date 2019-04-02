import {GenericTableEvent} from './generic-table-event';
import {GenericTableEventType} from './generic-table-event-type';

export class AddEvent<T> implements GenericTableEvent<T> {

  public type: GenericTableEventType = GenericTableEventType.ADD;
  public data = null; // Add event just triggers the add function and provides no data
}
