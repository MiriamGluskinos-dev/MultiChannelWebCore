import { IGDSElement } from '../abstractions';
import { PropertyValues } from 'lit';
import { SidebarItem } from './sidebar-item';
import { IGDS_SIDEBAR_VARIANTS } from './constants';
import { IGDS_EVENT_KEYS, IGDS_TAGS } from '../constants';
declare class Sidebar extends IGDSElement {
    constructor();
    static styles: import("lit").CSSResult;
    variant?: `${IGDS_SIDEBAR_VARIANTS}`;
    label?: string;
    open: boolean;
    dir: string;
    highlightedId: string | null;
    slottedSidebarItems: Array<Element> | null;
    sidebarElements: Array<HTMLElement>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private handleDocumentMouseDown;
    protected updated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    onSelectSidebarItem(event: Event): void;
    removeSelectedClass(): void;
    getSidebarItems(): HTMLElement[] | undefined;
    getSidebarItemElements(): SidebarItem[];
    render(): import("lit").TemplateResult<1>;
    isRelevantKey(key: IGDS_EVENT_KEYS): boolean;
    updateSlottedSidebarItems(): void;
    handleEnterOrSpaceDown(key: IGDS_EVENT_KEYS): void;
    getHighlightedItemIndex(key: IGDS_EVENT_KEYS, highlightedItem: Element | undefined): number;
    handleArrowsDown(event: KeyboardEvent): void;
    handleLeftOrRightDown(key: IGDS_EVENT_KEYS): void;
    onKeyDown(event: KeyboardEvent): void;
    openSubmenuAndAddSubMenuItem(): void;
    closeSubMenuAndRemoveSubMenuItem(): void;
    removeHighlightedClass(): void;
    closeAllSubMenus(): void;
    private initIconTextSidebar;
    private initSidebarItemFocusListener;
    private onItemFocus;
    private onItemBlur;
    private removeFirstSidebarItemListeners;
}
export { Sidebar };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.sidebar]: Sidebar;
    }
}
