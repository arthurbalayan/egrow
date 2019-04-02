import {TemplateRef} from '@angular/core';

/**
 * This interface represents the structure of the specification of a table column.
 *
 * @param id is the unique id of the column
 * @param title is the title which will be shown in the header.
 * @param sortable determines whether the column will be sortable.
 * @param template is the template of the cell and is optional. If no template
 *        is assigned a generic cell template is used.
 */
export interface ColumnSpecification {
  id: string;
  title: string;
  sortable: boolean;
  template?: TemplateRef<any>;
}
