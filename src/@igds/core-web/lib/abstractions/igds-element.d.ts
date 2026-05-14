import { LitElement } from 'lit';
import { IGDS_EVENTS } from '../constants';
import type { TableCellChange } from './event-types/table-cell-change';
import type { TableCellClick } from './event-types/table-cell-click';
import type { TableRowCallAction } from './event-types/table-row-call-action';
import type { StepIndicatorItemClick } from './event-types/step-indicator-item-click';
type CustomDetailOptions = Partial<{
    label: string;
    completed: boolean;
    checked: boolean;
    clicked: boolean;
    focused: boolean;
    blurred: boolean;
    keydown?: boolean;
    keyup: boolean;
    [key: string]: unknown;
}>;
declare abstract class IGDSElement extends LitElement {
    emit<T extends string | IGDS_EVENTS, V extends Record<string, string | boolean | undefined> | string | string[] | TableCellChange | TableCellClick | TableRowCallAction | UIEvent | {
        index: number;
        maxItems: number;
    } | StepIndicatorItemClick>(name: T, value?: V, customOptions?: CustomDetailOptions): void;
}
export { IGDSElement };
