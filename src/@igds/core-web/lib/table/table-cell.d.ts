import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
declare class TableCell extends IGDSElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export { TableCell };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tableCell]: TableCell;
    }
}
