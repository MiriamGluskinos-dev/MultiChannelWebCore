import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsTableContext } from './context';
import { TableCellDetails } from './types/table-cell-details';
declare class TableRow extends IGDSElement {
    static styles: import("lit").CSSResult;
    private _rowId;
    cells?: TableCellDetails[] | string;
    rowId?: string;
    selected?: boolean;
    expandable?: 'true' | 'false';
    expanded?: boolean;
    context?: IgdsTableContext;
    private getCells;
    updated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    handleSlotChange(e: Event): void;
    render(): import("lit").TemplateResult<1>;
}
export { TableRow };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tableRow]: TableRow;
    }
}
