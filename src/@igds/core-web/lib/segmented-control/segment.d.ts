import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { SegmentDataContext } from './context';
declare class Segment extends IGDSElement {
    static styles: import("lit").CSSResult;
    private isFirstRender;
    selected?: boolean;
    disabled?: boolean;
    id: string;
    contextData?: SegmentDataContext;
    hasIcon?: boolean;
    hasNoText?: boolean;
    isOverflowed: boolean;
    labelText: string;
    label: HTMLDivElement;
    tooltip: HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    update(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    private resizeHandler;
    private checkTruncated;
    private handleClick;
    private handleChangeIcon;
    private handleChangeText;
    showTooltip(): void;
    hideTooltip(): void;
    render(): import("lit").TemplateResult<1>;
}
export { Segment };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.segment]: Segment;
    }
}
