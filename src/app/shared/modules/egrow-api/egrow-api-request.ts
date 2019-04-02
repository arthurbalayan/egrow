import {HttpHeaders} from '@angular/common/http';

/**
 * This class represents the structure of a basic request to the REST API.
 * It is used by the API service to perform the final http request.
 */
export class EgrowApiRequest {

    private _headers: HttpHeaders;

    public constructor(private endpointUrl: string,
                       private _useCache: boolean = true,
                       private maxAge: number = 300000) { // Default max age 5 min.
        this._headers = new HttpHeaders().append('Content-Type', 'application/json'); // The default type is json
    }

    public getUrl(): string {
        return this.endpointUrl;
    }

    public useCache(): boolean {
        return this._useCache;
    }

    public getMaxAge(): number {
        return this.maxAge;
    }

    get headers(): HttpHeaders {
        return this._headers;
    }
}
