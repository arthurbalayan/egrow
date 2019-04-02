import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {State} from './state';

/**
 * This service handles the logic to transfer the user between different state
 * components. It holds the current state which the user is in that moment
 * and publishes any updates of the state to all subscribers.
 *
 * This service needs to be provided in the parent component which organizes
 * the entire process the individual states.
 */
@Injectable()
export class AbstractStateService {

  private _state: State;
  private stateSubject: Subject<State>;

  constructor() {
    this._state = new State(0);
    this.stateSubject = new BehaviorSubject(this._state);
  }

  /**
   * Sets the current state index and publishes it.
   * @param stateIndex is the numeric value of the state.
   */
  public setState(stateIndex: number): void {
    this._state.currentState = stateIndex;
    this.stateSubject.next(this._state);
  }

  /**
   * Enables the state with the equivalent stateIndex. This allows the service
   * to transfer the user to the enabled state when requested.
   * @param stateIndex is the numeric value of the state.
   */
  public enableState(stateIndex: number): void {
    this._state.enable(stateIndex);
    this.stateSubject.next(this._state);
  }

  /**
   * Disables the state with the equivalent stateIndex. This allows the service
   * to prevent the user from reaching the requested state.
   * @param stateIndex is the numeric value of the state.
   */
  public disableState(stateIndex: number): void {
    this._state.disable(stateIndex);
    this.stateSubject.next(this._state);
  }

  /**
   * This function tries to transfer the user to the next state. It checks
   * whether the next state is enabled, increments the currentState if it is
   * enabled and publishes the updated state.
   * @returns boolean whether the next state has been reached or not.
   */
  public nextState(): boolean {
    const nextStateIndex = this._state.currentState + 1;
    if (this._state.isEnabled(nextStateIndex)) {
      this._state.currentState++;
      this.stateSubject.next(this._state);
      return true;
    } else {
      console.error('Can not proceed to next state "' + nextStateIndex + '" as state is not enabled.');
      return false;
    }
  }

  /**
   * This function tries to transfer the user to the previous state. It checks
   * whether the previous state is enabled, decrements the currentState if it is
   * enabled and publishes the updated state.
   * @returns boolean whether the previous state has been reached or not.
   */
  public prevState(): boolean {

    const prevStateIndex = this._state.currentState - 1;
    if (this._state.isEnabled(prevStateIndex)) {
      this._state.currentState--;
      this.stateSubject.next(this._state);
      return true;
    } else {
      console.error('Can not proceed to next state "' + prevStateIndex + '" as state is not enabled.');
      return false;
    }
  }

  public getState(): Observable<State> {
    return this.stateSubject.asObservable();
  }

  /**
   * Checks whether the state with the state index is enabled.
   * @param stateIndex represents the index of the requested state.
   * @returns whether the state is enabled or not.
   */
  public isStateEnabled(stateIndex: number): boolean {
    return this._state.isEnabled(stateIndex);
  }
}
