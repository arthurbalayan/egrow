import {Observable, ReplaySubject, Subject} from 'rxjs';

/**
 * This class provides data to all its subscribers with improved functionality.
 * It receives data with the type T as an input and transform is to data of the
 * type S.
 *
 * Whenever the transformed data is send to all subscribers the current value of
 * it is saved.
 *
 * @typeparam T is the type of the input data.
 * @typeparam S is the type of the output data.
 */
export abstract class AbstractDataProvider<T, S> {

    private subject: Subject<S>;
    private _currentValue: S;

    protected abstract transform(input: T): S;

    protected constructor() {
        this.subject = new ReplaySubject(1);
    }

    /**
     * Sets the provided value as the currentValue and publishes the data to
     * all its subscribers.
     *
     * @param value is the data that is published.
     */
    protected sendData(value: S): void {
        this._currentValue = value;
        this.subject.next(value);
    }

    /**
     * It provides an observable to receive data whenever it is updated.
     *
     * @returns Observable<S> which provides that data whenever it is updated.
     */
    public getData(): Observable<S> {
        return this.subject.asObservable();
    }

    set currentValue(value: S) {
        this._currentValue = value;
    }

    get currentValue(): S {
        return this._currentValue;
    }

    /**
     * It sets a property of the current value and refreshes the data of all
     * subscribers. If the property is not available an error is printed to
     * the log.
     *
     * @param propName is the name of the property which is set.
     * @param propValue is the value of the property which is set.
     * @returns boolean whether the property was set (true) or not (false).
     */
    protected setProp(propName: string, propValue: any): boolean {
        if (this.currentValue.hasOwnProperty(propName)) {
            if (null != propValue) {
                console.log('set ' + propName + ': ' + propValue);
                this.currentValue[propName] = propValue;
                this.refreshData();
                return true;
            }
        } else {
            console.error('Property is not available for the current value: ' + propName, this.currentValue);
        }
        return false;
    }

    /**
     * It refreshes the data of all subscribers by publishing the currentValue.
     */
    private refreshData(): void {
        this.sendData(this.currentValue);
    }
}
