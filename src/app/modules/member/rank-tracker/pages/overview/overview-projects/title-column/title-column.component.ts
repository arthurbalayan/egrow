import {Component, OnInit} from '@angular/core';
import {GenericTableColumnComponent} from '../../../../../../../shared/modules/egrow-table/generic-table/generic-table-column/generic-table-column.component';

/**
 * This component represents the template of a title column. The title is linked
 * to the project page. It is used in the overview-projects component.
 */
@Component({
  selector: 'app-title-column',
  templateUrl: './title-column.component.html',
  styleUrls: ['./title-column.component.css']
})
export class TitleColumnComponent extends GenericTableColumnComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
