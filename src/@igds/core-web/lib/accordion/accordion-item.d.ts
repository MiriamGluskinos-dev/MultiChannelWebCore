import { IGDSElement } from '../abstractions';
declare class AccordionItem extends IGDSElement {
    static styles: import("lit").CSSResult;
    open: boolean;
    disabled: boolean;
    icon?: string;
    header: string;
    onToggle?: ((ev: ToggleEvent) => void) | null;
    details: HTMLDetailsElement | null;
    private detailsToggleHandler;
    render(): import("lit").TemplateResult<1>;
}
export { AccordionItem };
declare global {
    interface HTMLElementTagNameMap {
        'igds-accordion-item': AccordionItem;
    }
}
