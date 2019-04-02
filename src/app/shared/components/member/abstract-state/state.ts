/**
 * This entity represents all states of an process of accordion components.
 * It contains all related states in a map with its status (enabled/disabled).
 * It used by the state service to inform all subscribers about its current status.
 *
 * The state is represented by a number. A state can be enabled or disabled to
 * allow/prevent a user from reaching the requested state.
 */
export class State {

  private stateCollection: Map<number, boolean>;

  constructor(private _currentState: number) {
    this.stateCollection = new Map();
    this.enable(this._currentState);
  }

  set currentState(stateIndex: number) {
    this._currentState = stateIndex;
  }

  get currentState(): number {
    return this._currentState;
  }

  /**
   * Checks whether the requested state (stateIndex) is enabled.
   * @param stateIndex
   * @returns whether stateIndex is enabled.
   */
  public isEnabled(stateIndex: number): boolean {
    return this.stateCollection.has(stateIndex) && this.stateCollection.get(stateIndex);
  }

  /**
   * Enables the state (stateIndex) so the user can be transferred to it.
   * @param stateIndex
   */
  public enable(stateIndex: number): void {
    this.stateCollection.set(stateIndex, true);
  }

  /**
   * Disable the state (stateIndex) so the user cannot be transferred to the state.
   * @param stateIndex
   */
  public disable(stateIndex: number): void {
    this.stateCollection.set(stateIndex, false);
  }
}
