/**
 * This interface represents the structure of the input to a column in
 * the generic table.
 *
 * @param rowElement is the actual data of the entire row.
 * @param columnId is the id of the column that is processed.
 */
export interface ColumnInputs {
  rowElement: any;
  columnId: number;
}
