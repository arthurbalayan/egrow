import {Injectable} from '@angular/core';
import {EgrowApiService} from '../../egrow-api.service';
import {RankTrackerProject} from './RankTrackerProject';
import {Observable} from 'rxjs';
import {RankTrackerProjectFull} from './RankTrackerProjectFull';
import {EgrowApiRequest} from '../../egrow-api-request';
import {EgrowApiRequestPost} from '../../egrow-api-request-post';
import {EndpointService} from '../endpoint.service';

/**
 * This service handles all http request to the Rank Tracker endpoint.
 * It provides the following functions:
 * - Get one project of current user via the project id.
 * - Get all projects of the current user.
 * - Add a new project.
 * - Update an existing project.
 * - Delete an existing project.
 */
@Injectable()
export class RankTrackerApiService extends EndpointService {

  constructor(private apiService: EgrowApiService) {
    super('rank-tracker/projects');
  }

  /**
   * Retrieves the project with the projectId from the database.
   *
   * @param projectId is the id of the project.
   * @returns Observable which includes the project from the database.
   */
  public getProject(projectId: string): Observable<RankTrackerProjectFull> {
    return <Observable<RankTrackerProjectFull>> this.apiService.get(new EgrowApiRequest(this.endpointUrl + '/' + projectId, false));
  }

  /**
   * Returns all projects of the current user from the database.
   */
  public getProjects(): Observable<RankTrackerProject[]> {
    return this.setUseCache(this.apiService.get(new EgrowApiRequest(this.endpointUrl, this.useCache)), true);
  }

  /**
   * Deletes the project with the projectId from the database.
   *
   * @param projectId is the id of the project.
   */
  public deleteProject(projectId: string): Observable<string> {
    return this.setUseCache(this.apiService.delete(new EgrowApiRequest(this.endpointUrl + '/' + projectId)), false);
  }

  /**
   * Adds a new project to the database.
   *
   * @param rankTrackerProject represents the project which is added to the database.
   * @returns Observable which includes the added project.
   */
  public addProject(rankTrackerProject: RankTrackerProject): Observable<RankTrackerProject> {
    return this.setUseCache(this.apiService.post(new EgrowApiRequestPost(this.endpointUrl, JSON.stringify(rankTrackerProject))), false);
  }

  /**
   * Updates an existing project in the database.
   *
   * @param rankTrackerProject is the updated project.
   * @returns Observable which includes the updated project.
   */
  public updateProject(rankTrackerProject: RankTrackerProject): Observable<RankTrackerProjectFull> {
    const finalEndpointUrl = this.endpointUrl + '/' + rankTrackerProject.id;
    const updateRequest: EgrowApiRequestPost = new EgrowApiRequestPost(finalEndpointUrl, JSON.stringify(rankTrackerProject));
    return this.setUseCache(this.apiService.put(updateRequest), false);
  }
}
