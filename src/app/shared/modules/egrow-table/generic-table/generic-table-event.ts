import {GenericTableEventType} from './generic-table-event-type';

export interface GenericTableEvent<T> {
  type: GenericTableEventType;
  data: T[];
}
