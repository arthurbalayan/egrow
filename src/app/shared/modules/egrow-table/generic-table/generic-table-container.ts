import {GenericTableEvent} from './generic-table-event';

/**
 * It defines how a container for the generic table has to look like and
 * what functionality it should provide.
 */
export interface GenericTableContainer<T> {

  /**
   * It handles the events that are emitted by the generic table event emitter.
   *
   * @param event is the event that is emitted by the event emitter.
   */
  handleEvent(event: GenericTableEvent<T>): void;
}
