import {AbstractDataProvider} from './abstract-data-provider';
import {Observable} from 'rxjs';

/**
 * This data provider starts with initial data from an observable. It can be
 * data from a http request or simply data from another service.
 * This service loads the data and publishes it as soon as the data becomes
 * available.
 */
export abstract class AbstractInitialDataProvider<T, S> extends AbstractDataProvider<T, S> {

    protected constructor(initialDataStream: Observable<T>) {
        super();
        initialDataStream.subscribe((input: T) => {
            this.sendData(this.transform(input));
        });
    }
}
