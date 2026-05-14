import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsTableContext } from './context';
import { TableHeaderDetails } from './types/table-header-details';
declare class TableHeader extends IGDSElement {
    static styles: import("lit").CSSResult;
    columns: TableHeaderDetails[] | string;
    context?: IgdsTableContext;
    updated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
}
export { TableHeader };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tableHeader]: TableHeader;
    }
}
