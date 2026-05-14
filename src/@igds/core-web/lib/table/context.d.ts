import { TableHeaderDetails } from './types/table-header-details';
import { TableRowDetails } from './types/table-rows-details';
import { TableCellDetails } from './types/table-cell-details';
export declare class IgdsTableContext {
    private _header;
    private _rows;
    onChangeHeader: (() => void) | undefined;
    onChangeRows: (() => void) | undefined;
    getHeader(): TableHeaderDetails[];
    setHeader(columns: TableHeaderDetails[]): void;
    removeHeader(): void;
    getRows(): TableRowDetails[];
    registerRow(id: string, { cells, slottedCells, selected, expanded, expandable }: RowData): string;
    updateRow(id: string, { cells, slottedCells, selected, expanded, expandable }: RowData): void;
    updateAllRows(newRows: TableRowDetails[]): void;
    updateRowSlot(id: string, slot: HTMLElement[]): void;
    removeRow(id: string): void;
    updateContext(part: 'header' | 'rows'): void;
}
export declare const igdsTableContext: {
    __context__: IgdsTableContext;
};
type RowData = {
    cells: TableCellDetails[];
    slottedCells?: HTMLElement[];
    selected?: boolean;
    expanded?: boolean;
    expandable?: boolean;
};
export {};
