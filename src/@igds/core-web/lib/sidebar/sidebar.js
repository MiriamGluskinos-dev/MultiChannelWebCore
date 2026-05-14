var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IGDSElement } from '../abstractions';
import { html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements, state, } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { SidebarItem } from './sidebar-item';
import { IGDS_SIDEBAR_VARIANTS } from './constants';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { calculateIndexIncrement, isElementInViewport } from '../utils';
import styles from './sidebar.scss?inline';
let Sidebar = class Sidebar extends IGDSElement {
    constructor() {
        super();
        this.variant = IGDS_SIDEBAR_VARIANTS.default;
        this.open = false;
        this.dir = 'rtl';
        this.highlightedId = null;
        this.slottedSidebarItems = null;
        this.onSelectSidebarItem = this.onSelectSidebarItem.bind(this);
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
        this.onItemFocus = this.onItemFocus.bind(this);
        this.onItemBlur = this.onItemBlur.bind(this);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.addEventListener(IGDS_EVENTS.click, this.onSelectSidebarItem);
        setTimeout(() => {
            document.addEventListener('click', this.handleDocumentMouseDown, {
                once: true,
            });
            this.initSidebarItemFocusListener();
            if (this.variant === IGDS_SIDEBAR_VARIANTS.iconText) {
                this.initIconTextSidebar();
            }
        });
    }
    handleDocumentMouseDown() {
        this.removeHighlightedClass();
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('open')) {
            if (this.open) {
                this.emit(IGDS_EVENTS.open);
            }
            if (!this.open) {
                this.removeHighlightedClass();
                this.closeAllSubMenus();
                this.emit(IGDS_EVENTS.close);
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeFirstSidebarItemListeners();
    }
    onSelectSidebarItem(event) {
        const value = event.detail.value;
        const isSubMenuItem = event.detail.isSubMenuItem;
        this.removeSelectedClass();
        const slottedSidebarItems = this.getSidebarItemElements();
        if (!slottedSidebarItems)
            return;
        slottedSidebarItems.forEach((slottedSidebarItem) => {
            if (slottedSidebarItem.id === value &&
                slottedSidebarItem.shadowRoot?.querySelector('.sidebar-item')) {
                slottedSidebarItem.shadowRoot
                    .querySelector('.sidebar-item')
                    ?.classList.add(isSubMenuItem
                    ? 'sidebar-item--selected'
                    : 'sidebar-item--selected-with-left-border');
            }
        });
    }
    removeSelectedClass() {
        const sidebarItems = this.getSidebarItems();
        if (!sidebarItems)
            return;
        sidebarItems.forEach((sidebarItem) => {
            if (sidebarItem.classList.contains('sidebar-item--selected-with-left-border')) {
                sidebarItem.classList.remove('sidebar-item--selected-with-left-border');
            }
            if (sidebarItem.classList.contains('sidebar-item--selected')) {
                sidebarItem.classList.remove('sidebar-item--selected');
            }
        });
    }
    getSidebarItems() {
        const sidebarItems = [];
        const slottedSidebarItems = this.getSidebarItemElements();
        if (!slottedSidebarItems)
            return;
        slottedSidebarItems.forEach((slottedSidebarItem) => {
            if (slottedSidebarItem.shadowRoot?.querySelector('.sidebar-item')) {
                sidebarItems.push(slottedSidebarItem.shadowRoot.querySelector('.sidebar-item'));
            }
        });
        return sidebarItems;
    }
    getSidebarItemElements() {
        return [...this.querySelectorAll(IGDS_TAGS.sidebarItem)];
    }
    render() {
        return html `
      <div
        role="menu"
        aria-label=${this.label ? this.label : 'Sidebar menu'}
        class=${classMap({
            sidebar: true,
            'sidebar--open': this.open,
        })}
        @keydown=${this.onKeyDown}
      >
        <slot></slot>
        ${when(this.label, () => html ` <span class="sidebar__header">${this.label}</span> `)}
        <slot name="sidebar-item" class="sidebar-slot"></slot>
      </div>
    `;
    }
    isRelevantKey(key) {
        return [
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            " " /* IGDS_EVENT_KEYS.Space */,
        ].includes(key);
    }
    updateSlottedSidebarItems() {
        if (!this.highlightedId) {
            this.slottedSidebarItems = this.sidebarElements.filter((sidebarElement) => sidebarElement instanceof SidebarItem && !sidebarElement.disabled);
        }
    }
    // eslint-disable-next-line complexity
    handleEnterOrSpaceDown(key) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(key)) {
            if (!this.slottedSidebarItems?.length)
                return;
            const highlightedItem = this.slottedSidebarItems?.find((slottedSidebarItem) => slottedSidebarItem.id === this.highlightedId);
            if (highlightedItem &&
                highlightedItem instanceof SidebarItem &&
                highlightedItem.subMenu)
                return;
            // eslint-disable-next-line complexity
            this.slottedSidebarItems.forEach((slottedSidebarItem) => {
                if (slottedSidebarItem instanceof SidebarItem &&
                    slottedSidebarItem.isSubMenuItem &&
                    slottedSidebarItem.shadowRoot
                        ?.querySelector('.sidebar-item')
                        ?.classList.contains('sidebar-item--selected')) {
                    slottedSidebarItem.shadowRoot
                        .querySelector('.sidebar-item')
                        ?.classList.remove('sidebar-item--selected');
                }
                if (slottedSidebarItem.shadowRoot
                    ?.querySelector('.sidebar-item')
                    ?.classList.contains('sidebar-item--selected-with-left-border')) {
                    slottedSidebarItem.shadowRoot
                        .querySelector('.sidebar-item')
                        .classList.remove('sidebar-item--selected-with-left-border');
                }
            });
            highlightedItem instanceof SidebarItem && highlightedItem.isSubMenuItem
                ? highlightedItem?.shadowRoot
                    ?.querySelector('.sidebar-item')
                    ?.classList.add('sidebar-item--selected')
                : highlightedItem?.shadowRoot
                    ?.querySelector('.sidebar-item')
                    ?.classList.add('sidebar-item--selected-with-left-border');
        }
    }
    getHighlightedItemIndex(key, highlightedItem) {
        const indexIncrement = calculateIndexIncrement(key);
        const isDomElementHighlighted = highlightedItem?.shadowRoot
            ?.querySelector('.sidebar-item')
            ?.classList.contains('sidebar-item--highlighted');
        let index = isDomElementHighlighted
            ? this.slottedSidebarItems.indexOf(highlightedItem) + indexIncrement
            : 0;
        if (index < 0) {
            index = this.slottedSidebarItems.length - 1;
        }
        if (index > this.slottedSidebarItems.length - 1) {
            index = 0;
        }
        return index;
    }
    handleArrowsDown(event) {
        if (!["ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */, "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */].includes(event.key) ||
            !this.slottedSidebarItems) {
            return;
        }
        const highlightedItem = this.slottedSidebarItems?.find((slottedSidebarItem) => slottedSidebarItem.id === this.highlightedId);
        const index = this.getHighlightedItemIndex(event.key, highlightedItem);
        this.removeHighlightedClass();
        const item = this.slottedSidebarItems[index].shadowRoot?.querySelector('.sidebar-item');
        item?.classList.add('sidebar-item--highlighted');
        item?.focus();
        this.highlightedId = this.slottedSidebarItems[index].id;
        if (!isElementInViewport(this.slottedSidebarItems[index])) {
            this.slottedSidebarItems[index].scrollIntoView(false);
        }
        event.preventDefault();
    }
    handleLeftOrRightDown(key) {
        if (this.dir === 'rtl' || !this.dir) {
            if (key === "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */) {
                this.openSubmenuAndAddSubMenuItem();
            }
            if (key === "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */) {
                this.closeSubMenuAndRemoveSubMenuItem();
            }
        }
        if (this.dir === 'ltr') {
            if (key === "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */) {
                this.openSubmenuAndAddSubMenuItem();
            }
            if (key === "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */) {
                this.closeSubMenuAndRemoveSubMenuItem();
            }
        }
    }
    onKeyDown(event) {
        if (!this.isRelevantKey(event.key))
            return;
        this.updateSlottedSidebarItems();
        this.handleEnterOrSpaceDown(event.key);
        this.handleArrowsDown(event);
        this.handleLeftOrRightDown(event.key);
    }
    openSubmenuAndAddSubMenuItem() {
        if (!this.slottedSidebarItems)
            return;
        const highlightedItem = this.slottedSidebarItems?.find((slottedSidebarItem) => slottedSidebarItem.id === this.highlightedId);
        if (highlightedItem &&
            highlightedItem instanceof SidebarItem &&
            highlightedItem.subMenu) {
            const subMenuItems = highlightedItem.querySelectorAll('[slot="sidebar-submenu-item"]');
            const highlightedIndex = this.slottedSidebarItems.indexOf(highlightedItem);
            this.slottedSidebarItems = [
                ...this.slottedSidebarItems.slice(0, highlightedIndex + 1),
                ...Array.from(subMenuItems),
                ...this.slottedSidebarItems.slice(highlightedIndex + 1),
            ];
            highlightedItem.expanded = true;
            this.highlightedId = highlightedItem.id;
        }
    }
    closeSubMenuAndRemoveSubMenuItem() {
        if (!this.slottedSidebarItems)
            return;
        const highlightedItem = this.slottedSidebarItems.find((slottedSidebarItem) => slottedSidebarItem.id === this.highlightedId);
        if (highlightedItem &&
            highlightedItem instanceof SidebarItem &&
            highlightedItem.subMenu) {
            const subMenuItems = highlightedItem.querySelectorAll('[slot="sidebar-submenu-item"]');
            if (subMenuItems.length) {
                const highlightedIndex = this.slottedSidebarItems.indexOf(highlightedItem);
                const subMenuItemsArray = Array.from(subMenuItems);
                this.slottedSidebarItems = this.slottedSidebarItems.filter((item, index) => index <= highlightedIndex || !subMenuItemsArray.includes(item));
            }
            highlightedItem.expanded = false;
        }
    }
    removeHighlightedClass() {
        const sidebarItems = this.getSidebarItemElements();
        if (!sidebarItems)
            return;
        sidebarItems.forEach((sidebarItem) => {
            if (sidebarItem.shadowRoot
                ?.querySelector('.sidebar-item')
                ?.classList.contains('sidebar-item--highlighted')) {
                sidebarItem.shadowRoot
                    .querySelector('.sidebar-item')
                    ?.classList.remove('sidebar-item--highlighted');
            }
        });
    }
    closeAllSubMenus() {
        const slottedSidebarItems = this.sidebarElements.filter((sidebarElement) => sidebarElement instanceof SidebarItem && !sidebarElement.disabled);
        slottedSidebarItems.forEach((slottedSidebarItem) => {
            if (slottedSidebarItem.subMenu && slottedSidebarItem.expanded) {
                slottedSidebarItem.expanded = false;
            }
        });
    }
    initIconTextSidebar() {
        const sidebarItems = this.getSidebarItems();
        if (!sidebarItems)
            return;
        sidebarItems?.forEach((slottedSidebarItem) => {
            slottedSidebarItem?.classList.add('sidebar-item--icon-text');
        });
    }
    initSidebarItemFocusListener() {
        const sidebarItems = this.getSidebarItems();
        if (!sidebarItems)
            return;
        sidebarItems.forEach((sidebarItem) => {
            sidebarItem.addEventListener('focus', this.onItemFocus);
            sidebarItem.addEventListener('blur', this.onItemBlur);
        });
    }
    onItemFocus(event) {
        event.target.classList.add('sidebar-item--highlighted');
        const parentElement = this.sidebarElements?.find((item) => {
            return item?.shadowRoot?.querySelector('.sidebar-item') === event.target;
        });
        if (parentElement) {
            this.highlightedId = parentElement.id;
        }
        if (!this.slottedSidebarItems) {
            this.slottedSidebarItems = this.sidebarElements.filter((sidebarElement) => sidebarElement instanceof SidebarItem && !sidebarElement.disabled);
        }
    }
    onItemBlur() {
        this.removeHighlightedClass();
    }
    removeFirstSidebarItemListeners() {
        const sidebarItems = this.getSidebarItems();
        if (!sidebarItems)
            return;
        sidebarItems.forEach((sidebarItem) => {
            sidebarItem.removeEventListener('focus', this.onItemFocus);
            sidebarItem.removeEventListener('blur', this.onItemBlur);
        });
    }
};
Sidebar.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Sidebar.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Sidebar.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], Sidebar.prototype, "open", void 0);
__decorate([
    property({ type: String, reflect: true })
], Sidebar.prototype, "dir", void 0);
__decorate([
    state()
], Sidebar.prototype, "highlightedId", void 0);
__decorate([
    state()
], Sidebar.prototype, "slottedSidebarItems", void 0);
__decorate([
    queryAssignedElements({ slot: 'sidebar-item' })
], Sidebar.prototype, "sidebarElements", void 0);
Sidebar = __decorate([
    customElement(IGDS_TAGS.sidebar)
], Sidebar);
export { Sidebar };
