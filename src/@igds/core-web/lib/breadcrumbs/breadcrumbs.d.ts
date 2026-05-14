import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IgdsBreadcrumbsContext } from './breadcrumb-context';
import { BreadcrumbsItemWithId } from './types/breadcrumbs-item-details';
import { IGDSElement } from '../abstractions';
import '../icon';
import '../popup-menu';
declare class Breadcrumbs extends IGDSElement {
    static styles: import("lit").CSSResult;
    private isCollapsible;
    private isOverflowed;
    private numberOfHiddenItems;
    private itemGap?;
    private boxGap?;
    private boxLeftPadding?;
    private boxRightPadding?;
    private middleItemsSizeMap?;
    private expandButtonWidth;
    private readonly _mediaQueryObserver;
    private get isMobile();
    constructor();
    label: string;
    preventDefault: boolean;
    context: IgdsBreadcrumbsContext;
    items: BreadcrumbsItemWithId[];
    middleSectionWidth: string;
    shownOnMobile?: boolean;
    breadcrumbsElement?: HTMLElement;
    startElement?: HTMLElement;
    middleElement?: HTMLElement;
    endElement?: HTMLElement;
    middleItems?: HTMLElement[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleChangeDevice;
    private handleExpand;
    private handleItemClick;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues<this>): void;
    private resizeHandler;
    shouldSkipOverflowingCheck(): boolean;
    checkOverflowing(): void;
    measureCssProperty(element: HTMLElement, property: string, defaultValue: number): number;
    getMiddleSectionWidth(availableWidth: number): [boolean, string, number];
    navigateTo(id: string, href: string, target?: '_blank' | '_parent' | '_self' | '_top'): void;
    emulateDefaultLinkClickBehavior(href: string, target?: '_blank' | '_parent' | '_self' | '_top'): void;
    renderItemContent(isFirstItem: boolean, label: string): import("lit").TemplateResult<1>;
    renderItem(item: BreadcrumbsItemWithId, isFirstItem: boolean, isLastItem: boolean, props?: {
        index?: number;
        visibleItemsCount?: number;
        penultimate?: boolean;
    }): import("lit").TemplateResult<1>;
    get formattedItems(): {
        start: BreadcrumbsItemWithId[];
        middle: BreadcrumbsItemWithId[];
        end: BreadcrumbsItemWithId[];
    };
    get invisibleItems(): BreadcrumbsItemWithId[];
    renderStandardBreadcrumbs(): import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
export { Breadcrumbs };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.breadcrumbs]: Breadcrumbs;
    }
}
