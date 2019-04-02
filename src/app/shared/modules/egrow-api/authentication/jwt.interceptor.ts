import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {mergeMap} from 'rxjs/operators';

/**
 * This interceptor adds a valid JWT-Token to every http request to the REST API.
 * If no valid JWT-Token is available than the authorization header is not set.
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.authService.getValidJwtToken().pipe(mergeMap((validToken: string) => {
            if (null != validToken) {
                request = this.addAuthorizationHeader(request, validToken);
            }
            return next.handle(request);
        }));
    }

    private addAuthorizationHeader(request: HttpRequest<any>, jwtToken: string): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${jwtToken}`
            }
        });
    }
}
