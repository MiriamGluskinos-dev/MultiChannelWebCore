import { PropertyValues } from 'lit';
import { AccordionItem } from './accordion-item';
import { IGDSElement } from '../abstractions';
declare class Accordion extends IGDSElement {
    static styles: import("lit").CSSResult;
    multiexpand: boolean;
    accordionItemsSlot: HTMLSlotElement;
    assignedAccordionItems: AccordionItem[];
    private setAssignedAccordionItems;
    private accordionItemToggleActionHandler;
    private applyAccordionItemOpenHandler;
    private removeAccordionItemOpenHandler;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit").TemplateResult<1>;
}
export { Accordion };
declare global {
    interface HTMLElementTagNameMap {
        'igds-accordion': Accordion;
    }
}
