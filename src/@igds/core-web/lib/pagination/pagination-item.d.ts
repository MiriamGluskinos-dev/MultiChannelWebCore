import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { PaginationContext } from './context';
declare class PaginationItem extends IGDSElement {
    context?: PaginationContext;
    static styles: import("lit").CSSResult;
    href: string;
    private registerItem;
    connectedCallback(): void;
    update(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): null;
}
export { PaginationItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.paginationItem]: PaginationItem;
    }
}
