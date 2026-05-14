import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { PaginationContext } from './context';
import { IGDS_PAGINATION_VARIANT } from './constants';
import { ItemDetails } from './types/item-details';
import '../icon';
declare class Pagination extends IGDSElement {
    constructor();
    context: PaginationContext;
    static styles: import("lit").CSSResult;
    variant: `${IGDS_PAGINATION_VARIANT}`;
    current: number;
    paginationItems: ItemDetails[];
    private activePage;
    private visiblePages;
    private componentWidth;
    private resizeObserver;
    connectedCallback(): void;
    update(changedProperties: PropertyValues): void;
    willUpdate(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    private updateVisiblePages;
    private getPagination;
    private numberPageHandler;
    get isLtr(): boolean;
    get isNumbered(): boolean;
    get isFirstPage(): boolean;
    get isLastPage(): boolean;
    get prevHref(): string;
    get nextHref(): string;
    getPrevLinkCssClasses(): import("lit/async-directive.js").DirectiveResult<typeof import("lit/directives/class-map.js").ClassMapDirective>;
    getNextLinkCssClasses(): import("lit/async-directive.js").DirectiveResult<typeof import("lit/directives/class-map.js").ClassMapDirective>;
    getPaginationCssClass(isItem?: boolean): string;
    renderPreviousLink(): import("lit").TemplateResult<1>;
    renderNextLink(): import("lit").TemplateResult<1>;
    renderItem(paginationData: ItemDetails, index: number): import("lit").TemplateResult<1> | null;
    render(): import("lit").TemplateResult<1>;
}
export { Pagination };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.pagination]: Pagination;
    }
}
