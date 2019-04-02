import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LOCAL_STORAGE, StorageServiceModule} from 'ngx-webstorage-service';
import {ApiCacheService, EGROW_APP_CACHE} from './cache/api-cache.service';
import {JwtInterceptor} from './authentication/jwt.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './authentication/auth.service';
import {LoginApiService} from './endpoints/login/login-api.service';
import {EgrowApiService} from './egrow-api.service';
import {AuthGuardService} from './authentication/auth-guard.service';
import {RankTrackerApiService} from './endpoints/rank-tracker/rank-tracker-api.service';
import {EgrowApiErrorInterceptor} from './egrow-api-error.interceptor';

/**
 * This module contains all services which are needed for the requests to the
 * REST API. It provides all endpoint services so they are initialized only
 * once.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [
    { provide: EGROW_APP_CACHE, useExisting: LOCAL_STORAGE },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: EgrowApiErrorInterceptor, multi: true },
    EgrowApiService,
    ApiCacheService,
    AuthService,
    AuthGuardService,
    LoginApiService,
    RankTrackerApiService
  ]
})
export class EgrowApiModule { }
