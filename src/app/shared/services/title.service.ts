import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, switchMap} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject} from 'rxjs';

const TITLE_ENDING = ' - Egrow.io';

/**
 * This service handles the title of the current page and changes it in
 * accordance with the router state changes. Whenever a title is provided
 * it is published to all subscribers. The title can be set in the routers
 * when the components are loaded.
 */
@Injectable()
export class TitleService {

  private pageTitleSubject: Subject<string>;
  private componentTitle: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
    this.pageTitleSubject = new ReplaySubject(1);
  }

  init() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      switchMap(route => route.data),
      map((data) => {
        if (data.title) {
          return data.title; // If a route has a title set (e.g. data: {title: "Rank Tracker"}) then we use it
        } else {
          return '';
        }
      }))
      .subscribe((pageTitle: string) => {
        if (0 !== pageTitle.length) {
          this.titleService.setTitle(`${pageTitle} ${TITLE_ENDING}`);
          this.pageTitleSubject.next(pageTitle);
        } else {
          this.titleService.setTitle('Egrow.io');
        }
      });
  }

  public getNavigationTitle(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }
}
