import {Component, OnInit} from '@angular/core';
import {AddProjectService} from '../add-project.service';
import {ColumnSpecification} from '../../../../../../shared/modules/egrow-table/generic-table/column-specification';
import {Observable} from 'rxjs';
import {AddProjectSummaryService} from './add-project-summary.service';
import {AbstractStateComponent} from '../../../../../../shared/components/member/abstract-state/abstract-state.component';
import {AbstractStateService} from '../../../../../../shared/components/member/abstract-state/abstract-state.service';
import {GenericTableEvent} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-event';
import {GenericTableEventType} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-event-type';
import {GenericTableContainer} from '../../../../../../shared/modules/egrow-table/generic-table/generic-table-container';

/**
 * This component handles the summary of all information of adding a rank tracker
 * project. It displays a table with all of the keywords and and the number of
 * words for every keyword. It represents the last step of a three step process.
 * At the end the project is added to the database.
 */
@Component({
  selector: 'app-add-project-summary',
  templateUrl: './add-project-summary.component.html',
  styleUrls: ['./add-project-summary.component.css'],
  providers: [AddProjectSummaryService]
})
export class AddProjectSummaryComponent extends AbstractStateComponent implements OnInit, GenericTableContainer<SimpleTableKeyword> {

  customColumns: ColumnSpecification[];
  dataObservable: Observable<SimpleTableKeyword[]>;

  constructor(
      private projectService: AddProjectService,
      projectState: AbstractStateService,
      private service: AddProjectSummaryService) {
    super(projectState, 2);
  }

  ngOnInit() {

    this.customColumns = [
      {id: 'keyword', title: 'Keyword', sortable: true},
      {id: 'numberWords', title: 'Num. Words', sortable: true}
    ];

    this.dataObservable = this.service.getData();
  }

  submitState(): void {
    this.projectService.addProject();
  }

  public handleEvent(event: GenericTableEvent<SimpleTableKeyword>): void {
    switch (event.type) {
      case GenericTableEventType.DELETE:
        this.deleteKeywords(event.data);
        break;
      default:
    }
  }

  public deleteKeywords(selectedKeywords: SimpleTableKeyword[]): void {
    this.service.deleteKeywords(selectedKeywords);
  }
}

export interface SimpleTableKeyword {
  keyword: string;
  numberWords: number;
}
