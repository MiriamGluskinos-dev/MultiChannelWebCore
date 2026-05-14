import { PropertyValues } from 'lit';
import { IgdsBreadcrumbsContext } from './breadcrumb-context';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import type { SlotChangeEvent } from '../utils/types/slot-change-event';
import { BreadcrumbsItemDetails } from './types/breadcrumbs-item-details';
declare class BreadcrumbItem extends IGDSElement {
    static styles: import("lit").CSSResult;
    private label;
    private localId;
    href: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel?: string | undefined;
    context?: IgdsBreadcrumbsContext;
    itemSlot: HTMLSlotElement;
    private updateItem;
    getText(element: HTMLSlotElement): string;
    emitEvent({ href }: BreadcrumbsItemDetails): void;
    connectedCallback(): void;
    handleSlotChange(e: SlotChangeEvent): void;
    constructor();
    protected update(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export { BreadcrumbItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.breadcrumbItem]: BreadcrumbItem;
    }
}
