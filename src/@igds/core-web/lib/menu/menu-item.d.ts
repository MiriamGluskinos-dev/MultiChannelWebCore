import { PropertyValues } from 'lit';
import { Placement } from '@floating-ui/dom';
import { IGDSElement } from '../abstractions';
declare class MenuItem extends IGDSElement {
    private CSS_QUERY;
    private readonly _mediaQueryObserver;
    constructor();
    static styles: import("lit").CSSResult;
    componentId: string;
    label: string;
    header?: string;
    icon: string;
    disabled: boolean;
    subMenu: boolean;
    withDivider: boolean;
    isSubMenuShown: boolean;
    menuItemElement: HTMLElement;
    subMenuSlotElement: HTMLSlotElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    updateDeviceType(): void;
    isMobile(): boolean;
    setMenuItemEventListeners(): void;
    removeMenuItemEventListeners(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    updated(): void;
    render(): import("lit").TemplateResult<1>;
    getSubMenu(): import("lit").TemplateResult<1>;
    onSelect(): void;
    setSubmenuPosition(): Promise<void>;
    getSubMenuPlacement(): Placement;
    disconnectedCallback(): void;
}
export { MenuItem };
declare global {
    interface HTMLElementTagNameMap {
        'igds-menu-item': MenuItem;
    }
}
