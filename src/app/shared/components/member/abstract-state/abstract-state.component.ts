import {AbstractStateService} from './abstract-state.service';

/**
 * This component represents a specific state in a process with a ownStateIndex.
 * It can be used for accordion components, tabs or whatever components suit a
 * process that has a linear progress.
 */
export abstract class AbstractStateComponent {

  /**
   * Submits the state or its corresponding data.
   */
  public abstract submitState(): void;

  protected constructor(private _projectState: AbstractStateService, private _ownStateIndex: number) {
  }

  get ownStateIndex(): number {
    return this._ownStateIndex;
  }

  get projectState(): AbstractStateService {
    return this._projectState;
  }

  /**
   * The next state is represented by an increment by 1 of the ownStateIndex.
   * @returns the index of the next state.
   */
  public getNextStateIndex(): number {
    return this._ownStateIndex + 1;
  }

  /**
   * The previous state is represented by an decrement by 1 of the ownStateIndex.
   * @returns the index of the previous state.
   */
  public getPrevStateIndex(): number {
    return this._ownStateIndex - 1;
  }

  /**
   * If the next state is enabled the user is transferred to the next state.
   * The current state data is then submitted.
   */
  public nextState(): void {
    if (this._projectState.nextState()) {
      this.submitState();
    }
  }

  /**
   * Transfers the user to the previous state.
   */
  public prevState(): void {
    this._projectState.prevState();
  }

  /**
   * Checks whether the state with the state index is enabled.
   * @param stateIndex represents the index of the requested state.
   * @returns whether the state is enabled or not.
   */
  public isStateEnabled(stateIndex: number): boolean {
    return this._projectState.isStateEnabled(stateIndex);
  }
}
