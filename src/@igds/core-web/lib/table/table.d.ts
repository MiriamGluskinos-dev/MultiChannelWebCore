import { PropertyValues } from 'lit';
import { IGDS_TAGS, IGDS_EVENT_KEYS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsTableContext } from './context';
import { CellAddress } from './types/cell-address';
import { TableHeaderDetails } from './types/table-header-details';
import { TableRowDetails } from './types/table-rows-details';
import { TableCellDetails, TextCell, LinkCell } from './types/table-cell-details';
import '../checkbox';
import '../badge';
import '../icon';
import '../animate-height';
import '../menu';
import '../tooltip';
import '../input';
declare class Table extends IGDSElement {
    static styles: import("lit").CSSResult;
    private _hasExpandableRow;
    private _focusedCell;
    private _clickedCell;
    private _newCellValue;
    private _sortable;
    private _maxTableSize;
    private _slottedCellObservers;
    selectable?: boolean;
    editable?: boolean;
    focusable?: boolean;
    truncated?: boolean;
    actions?: string[];
    droppable?: boolean;
    context: IgdsTableContext;
    header: TableHeaderDetails[];
    rows: TableRowDetails[];
    selectedRows: string[];
    _expandedRowIds: string[];
    editableCell: CellAddress | undefined;
    tbody: HTMLElement;
    domRows: NodeListOf<HTMLTableRowElement>;
    cellText: NodeListOf<HTMLTableCellElement>;
    boxes: NodeListOf<HTMLDivElement>;
    cells: NodeListOf<HTMLDivElement>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private disconnectSlottedCellObservers;
    update(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private processSlottedElements;
    private processSlottedCells;
    private moveSlottedContent;
    private setupSlottedCellObserver;
    private getSlottedCellData;
    private resizeHandler;
    processDroppablePropertyUpdate(changedProperties: PropertyValues): void;
    processTruncatedPropertyUpdate(changedProperties: PropertyValues): void;
    initDragAndDrop(): void;
    checkTruncated(): void;
    handleSelect(e: Event & {
        detail: {
            checked: boolean;
        };
    }, id: string): void;
    handleSelectAll(): void;
    handleExpandAll(): void;
    toggleRowSlot(id: string): void;
    handleAction(action: string, rowId: string, rowIndex: number): void;
    resetSortingOrder(): void;
    changeSortingOrder(columnIndex: number, option?: Partial<{
        reorder: boolean;
    }>): void;
    editCell(): void;
    cancelEditCell(): void;
    handleEditCellInput(e: Event & {
        detail: {
            value: string;
        };
    }): void;
    saveCellValue(): void;
    getCellValue(rowIndex: number, cellIndex: number): string | undefined;
    setFocusedCell(rowIndex: number, cellIndex: number): void;
    handleCellClick(rowIndex: number, cellIndex: number): void;
    handleInputKeydown(event: KeyboardEvent): void;
    isRelevantKey(key: IGDS_EVENT_KEYS): false | CellAddress | undefined;
    handleEnterDown(key: IGDS_EVENT_KEYS): boolean;
    handleEscapeDown(key: IGDS_EVENT_KEYS): boolean;
    moveUp(event: KeyboardEvent, previousRow: number): number;
    moveDown(event: KeyboardEvent, previousRow: number): number;
    moveStart(previousCell: number): number;
    moveEnd(previousCell: number): number;
    processArrowsKeyDown(event: KeyboardEvent): void;
    handleKeyDown(event: KeyboardEvent): void;
    focusCellByAddress(row: number, cell: number, setFocusOnInput?: boolean): void;
    handleClickLinkCell(event: MouseEvent, option?: {
        isEmitEvent?: boolean;
        id?: string;
    }): void;
    getTruncatedValue(value: string): string | import("lit").TemplateResult<1>;
    renderExpandableRow(row: TableRowDetails): import("lit").TemplateResult<1> | undefined;
    renderExpandAllCellControl(): import("lit").TemplateResult<1> | undefined;
    renderExpandCellControl(row: TableRowDetails): import("lit").TemplateResult<1> | undefined;
    renderSelectAllCellControl(): import("lit").TemplateResult<1> | undefined;
    renderSelectCellControl(row: TableRowDetails): import("lit").TemplateResult<1> | undefined;
    private getDataColumnTracks;
    renderPlaceholderCellControl(): import("lit").TemplateResult<1> | undefined;
    renderHeaderCell(column: TableHeaderDetails, index: number): import("lit").TemplateResult<1>;
    renderTableHeader(): import("lit").TemplateResult<1>;
    renderActionCellControl(row: TableRowDetails, rowIndex: number): import("lit").TemplateResult<1> | undefined;
    renderCellsToCompleteTableRow(): unknown;
    renderDragAndDropCellControl(): import("lit").TemplateResult<1> | undefined;
    renderLinkCell(cell: LinkCell): import("lit").TemplateResult<1>;
    renderTextCell(cell: TextCell, cellIndex: number, rowIndex: number): string | import("lit").TemplateResult<1>;
    renderTableCell(cell: TableCellDetails, cellIndex: number, rowIndex: number): import("lit").TemplateResult<1>;
    renderSlottedCell(row: TableRowDetails, slottedCellIndex: number): import("lit").TemplateResult<1>;
    renderRowCells(row: TableRowDetails, rowIndex: number): import("lit").TemplateResult<1>[];
    render(): import("lit").TemplateResult<1>;
}
export { Table };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.table]: Table;
    }
}
