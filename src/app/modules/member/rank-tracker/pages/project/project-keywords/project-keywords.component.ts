import {Component, OnInit} from '@angular/core';
import {ColumnSpecification} from '../../../../../../shared/modules/egrow-table/generic-table/column-specification';
import {ProjectKeywordsService} from './project-keywords.service';
import {TableKeyword} from './table-keyword';
import {Observable} from 'rxjs';
import {ProjectService} from '../project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GenericTableEvent} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-event';
import {GenericTableEventType} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-event-type';
import {GenericTableContainer} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-container';

/**
 * This component displays the keywords of a rank tracker project in a table.
 */
@Component({
  selector: 'app-project-keywords',
  templateUrl: './project-keywords.component.html',
  styleUrls: ['./project-keywords.component.css'],
  providers: [ProjectKeywordsService]
})
export class ProjectKeywordsComponent implements OnInit, GenericTableContainer<TableKeyword> {

  customColumns: ColumnSpecification[];
  dataObservable: Observable<TableKeyword[]>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private service: ProjectKeywordsService) {}

  ngOnInit() {

    this.customColumns = [
      {id: 'name', title: 'Name', sortable: true}];

    this.dataObservable = this.service.getData();
  }

  public handleEvent(event: GenericTableEvent<TableKeyword>): void {

    switch (event.type) {
      case GenericTableEventType.DELETE:
        this.deleteKeywords(event.data);
        break;
      case GenericTableEventType.ADD:
        this.addKeywords();
        break;
      default:
    }
  }

  /**
   * It deletes the selected keywords from the table and the project.
   * @param selectedKeywords
   */
  public deleteKeywords(selectedKeywords: TableKeyword[]): void {
    this.projectService.deleteKeywords(selectedKeywords.map(filteredKeyword => filteredKeyword.name));
  }

  /**
   * It forwards the user to the add project page and passes the project id of
   * the displayed project to the url so the project data is retrieved on
   * the add-project component.
   */
  addKeywords(): void {
    this.router.navigate(
      ['../../', 'add-project', {projectId: this.projectService.currentValue.id}], {relativeTo: this.activatedRoute});
  }
}
