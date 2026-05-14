import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsPopupMenuContext } from './popup-menu-context';
import type { SlotChangeEvent } from '../utils/types/slot-change-event';
import { MenuItem } from './types/menu-item';
declare class PopupMenuItem extends IGDSElement {
    static styles: import("lit").CSSResult;
    private localId;
    private label;
    id: string;
    icon?: string;
    iconVariant?: 'fill' | 'outline';
    context?: IgdsPopupMenuContext;
    itemSlot: HTMLSlotElement;
    constructor();
    update(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleSlotChange(e: SlotChangeEvent): void;
    getText(element: HTMLSlotElement): string;
    emitEvent({ id, label }: MenuItem): void;
    render(): import("lit").TemplateResult<1>;
}
export { PopupMenuItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.popupMenuItem]: PopupMenuItem;
    }
}
