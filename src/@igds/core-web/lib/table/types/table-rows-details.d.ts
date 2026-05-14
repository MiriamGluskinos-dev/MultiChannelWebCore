import { TableCellDetails } from './table-cell-details';
export type TableRowDetails = {
    id: string;
    cells: TableCellDetails[];
    slot?: HTMLElement[];
    slottedCells?: HTMLElement[];
    selected?: boolean;
    expanded?: boolean;
    expandable?: boolean;
};
