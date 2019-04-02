import {EgrowApiRequest} from './egrow-api-request';

/**
 * This class represents the basic structure of a POST request to the REST API.
 */
export class EgrowApiRequestPost extends EgrowApiRequest {

    public constructor(endpointUrl: string, private postContent: string, private _responseType: string = 'json') {
        super(endpointUrl, false);
    }

    public getPostContent(): string {
        return this.postContent;
    }

    get responseType(): string {
        return this._responseType;
    }
}
