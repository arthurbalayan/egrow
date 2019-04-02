import {Injectable} from '@angular/core';
import {RankTrackerApiService} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/rank-tracker-api.service';
import {RankTrackerProjectFull} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {RankTrackerKeyword} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerKeyword';
import {RankTrackerProject} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProject';
import {AbstractDataProvider} from '../../../../../shared/classes/abstract-data-provider';
import {RankTrackerProduct} from '../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProduct';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * This service handles the entire process of adding a rank tracker project.
 * It provides the updated rank tracker project to its sub services/states.
 * Whenever a property is changed the updated version of the rank tracker
 * project is send to all of its subscribers.
 */
@Injectable()
export class AddProjectService extends AbstractDataProvider<RankTrackerProjectFull, RankTrackerProjectFull> {

  private updateProject = false;

  constructor(private api: RankTrackerApiService,
              private router: Router,
              private route: ActivatedRoute) {
    super();
    this.currentValue = <RankTrackerProjectFull>{id: null, product: null, keywords: null};
  }

  protected transform(input: RankTrackerProjectFull): RankTrackerProjectFull {
    return input;
  }

  /**
   * It sets the project when the user is changing an existing rank tracker project
   * from the project page (Adding keywords). First the project is retrieved from
   * the API and then all subscribers are updated with the data.
   *
   * @param projectId is the id of the project that is updated.
   */
  public setProject(projectId: string): Observable<RankTrackerProjectFull> {
    return this.api.getProject(projectId).pipe(tap(apiProject => {
      this.setProduct(apiProject.product);
      if (null != apiProject.keywords) {
        this.setKeywords(apiProject.keywords.map(rankTrackerKeyword => rankTrackerKeyword.keyword));
      }
      this.updateProject = true;
    }));
  }

  /**
   * Sets the product of the rank tracker project and updates all subscribers.
   * @param product which is added via the ASIN input field.
   */
  public setProduct(product: RankTrackerProduct) {
    this.setProp('product', product);
    this.currentValue.id = product.id; // Set project id silently without refreshing data
  }

  /**
   * Sets the keywords of the rank tracker project and updates all subscribers.
   * @param keywords that are entered in the keywords component.
   */
  public setKeywords(keywords: string[]): void {
    this.setProp('keywords', keywords.map(keywordString => <RankTrackerKeyword>{keyword: keywordString}));
  }

  /**
   * Adds the project to the rank tracker. The project is updated if just
   * the keywords were added to the project and created when the entire
   * process was performed.
   *
   * The user is forwarded to the project page if the project was updated
   * and to the overview page of all projects if a new project was created.
   */
  public addProject(): void {

    let request$: Observable<RankTrackerProject>;

    if (this.updateProject) {
      request$ = this.api.updateProject(this.currentValue);
    } else {
      request$ = this.api.addProject(this.currentValue);
    }

    request$.subscribe( apiProject => {
      if (this.updateProject) {
        this.router.navigate(['../projects/' + apiProject.id], {relativeTo: this.route}); // Forward to the project page
      } else {
        this.router.navigate(['../'], {relativeTo: this.route}); // Forward to the projects page
      }
    });
  }
}
