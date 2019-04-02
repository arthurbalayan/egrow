import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TableProject} from './table-project';
import {OverviewProjectsService} from './overview-projects.service';
import {ColumnSpecification} from '../../../../../../shared/modules/egrow-table/generic-table/column-specification';
import {Observable} from 'rxjs';
import {OverviewService} from '../overview.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GenericTableEvent} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-event';
import {GenericTableEventType} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-event-type';
import {GenericTableContainer} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-container';

/**
 * This component displays all projects of a user in a table. The displayed columns
 * are defined in @param customColumns and provided as an input to the generic table.
 */
@Component({
  selector: 'app-overview-projects',
  templateUrl: './overview-projects.component.html',
  styleUrls: ['./overview-projects.component.css'],
  providers: [OverviewProjectsService]
})
export class OverviewProjectsComponent implements OnInit, GenericTableContainer<TableProject> {

  @ViewChild('titleTemplate') titleTemplate: TemplateRef<any>;

  customColumns: ColumnSpecification[];
  dataObservable: Observable<TableProject[]>;

  constructor (private router: Router, 
               private activatedRoute: ActivatedRoute, 
               private overviewService: OverviewService, 
               private service: OverviewProjectsService) {}

  ngOnInit() {

    this.dataObservable = this.service.getData();

    this.customColumns = [
      {id: 'imageId', title: 'Image', sortable: false},
      {id: 'productTitle', title: 'Title', sortable: true, template: this.titleTemplate},
      {id: 'minRanking', title: 'Min. Ranking', sortable: true},
      {id: 'avgRanking', title: 'Avg. Ranking', sortable: true},
      {id: 'maxRanking', title: 'Max. Ranking', sortable: true},
      {id: 'weeklyChange', title: 'Weekly Change', sortable: true},
      {id: 'monthlyChange', title: 'Monthly Change', sortable: true}
    ];
  }

  public handleEvent(event: GenericTableEvent<TableProject>): void {
    switch (event.type) {
      case GenericTableEventType.DELETE:
        this.deleteProjects(event.data);
        break;
      case GenericTableEventType.ADD:
        this.addProject();
        break;
      default:
    }
  }

  /**
   * Deletes the selected projects from the table and the database.
   * @param selectedProjects
   */
  deleteProjects(selectedProjects): void {
    this.overviewService.deleteProjects(selectedProjects);
  }

  /**
   * It forwards the user to the page for adding a rank tracker project.
   */
  addProject(): void {
    this.router.navigate(['add-project'], {relativeTo: this.activatedRoute});
  }
}
