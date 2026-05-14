var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { computePosition, offset, size } from '@floating-ui/dom';
import { IGDSElement } from '../abstractions';
import { MenuItem } from './menu-item';
import { calculateIndexIncrement, getCssValue, getDirection, throttle, } from '../utils';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, queryAssignedElements, state, } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_EVENTS, IGDS_PLACEMENTS, IGDS_TAGS, } from '../constants';
import { DELAY_BEFORE_RECALCULATE_MENU_POSITION, IGDS_MENU_VARIANT, MENU_WIDTH, } from './constants';
import { chevronDown, chevronRight } from '@igds/icons';
import styles from './menu.scss?inline';
let Menu = class Menu extends IGDSElement {
    constructor() {
        super();
        this.CSS_QUERY = `(max-width: ${getCssValue("--igds-light-ref-device-width-mobile" /* IGDS_BREAKPOINT_VARS.mobile */, '360px')})`;
        this.variant = IGDS_MENU_VARIANT.default;
        this.triggerButton = null;
        this.open = false;
        this.position = IGDS_PLACEMENTS.bottom;
        this.offset = null;
        this.highlightedId = null;
        this.highlightedSubMenuId = null;
        this.isSubMenuShown = false;
        this.resizeHandler = throttle(() => {
            if (this.open) {
                this.setMenuPosition();
            }
        }, DELAY_BEFORE_RECALCULATE_MENU_POSITION);
        this._mediaQueryObserver = window.matchMedia(this.CSS_QUERY);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.addEventListener(IGDS_EVENTS.click, this.onSelectMenuItem);
        this.initializeTriggerButton();
    }
    onSelectMenuItem(event) {
        if (this.isMobile() &&
            event instanceof CustomEvent &&
            event.detail.subMenu) {
            this.onSelectMenuItemOnMobile(event);
        }
        else {
            this.toggleMenu();
            this.isSubMenuShown = false;
        }
        this.removeHighlightedClass();
        this.removeHighlightedSubmenuClass();
    }
    onSelectMenuItemOnMobile(event) {
        const slottedMenuItems = this.getSlottedMenuItems();
        if (!slottedMenuItems)
            return;
        const selectedMenuItem = slottedMenuItems.find((slottedMenuItem) => slottedMenuItem.id === event.detail.id);
        if (!selectedMenuItem)
            return;
        this.subMenuItems = [
            ...selectedMenuItem.querySelectorAll(IGDS_TAGS.menuItem),
        ];
        this.isSubMenuShown = true;
    }
    initializeTriggerButton() {
        if (typeof this.triggerButton === 'string') {
            this.triggerButton = document.getElementById(this.triggerButton);
            if (this.triggerButton) {
                this.triggerButton.style.position = 'relative';
            }
        }
        if (this.triggerButton instanceof HTMLElement) {
            this.triggerButton.addEventListener('click', this.toggleMenu);
            this.triggerButton.addEventListener('keydown', this.onKeyDown);
        }
    }
    initializeIndentedMenu() {
        const slottedMenuItems = this.getSlottedMenuItems();
        if (!slottedMenuItems?.length)
            return;
        slottedMenuItems.forEach((slottedMenuItem) => {
            if (slottedMenuItem instanceof MenuItem && !slottedMenuItem.icon) {
                slottedMenuItem.shadowRoot
                    ?.querySelector('.menu-item')
                    ?.classList.add('menu-item--indented');
            }
        });
    }
    handleTriggerChange(event) {
        if (!event.target) {
            return;
        }
        this.triggers.forEach((trigger) => {
            trigger.addEventListener('click', this.toggleMenu);
            trigger.addEventListener('keydown', this.onKeyDown);
        });
    }
    toggleMenu() {
        this.open = !this.open;
        if (this.open) {
            this.menuElements.forEach((menuElement) => {
                if (menuElement instanceof MenuItem) {
                    menuElement.isSubMenuShown = false;
                }
            });
            this.isSubMenuShown = false;
            this.setMenuPosition();
            this.emit(IGDS_EVENTS.open);
            setTimeout(() => {
                document.addEventListener('click', this.handleDocumentMouseDown, {
                    once: true,
                });
            });
            window.addEventListener('resize', this.resizeHandler);
        }
        else {
            this.highlightedId = null;
            this.highlightedSubMenuId = null;
            this.removeHighlightedClass();
            this.removeHighlightedSubmenuClass();
            this.emit(IGDS_EVENTS.close);
            if (this.triggerButton && this.triggerButton instanceof HTMLElement) {
                this.triggerButton.blur();
            }
        }
    }
    handleDocumentMouseDown(event) {
        const path = event.composedPath();
        const clickedOnTrigger = this.triggerButton instanceof HTMLElement &&
            path.includes(this.triggerButton);
        if (this && !path.includes(this) && !clickedOnTrigger) {
            this.open = false;
            this.emit(IGDS_EVENTS.close);
        }
        this.highlightedSubMenuId = null;
        this.removeHighlightedClass();
        this.removeHighlightedSubmenuClass();
    }
    async setMenuPosition() {
        if (!this.menuElement || (!this.triggerButton && !this.triggers)) {
            return;
        }
        const menu = this.shadowRoot?.getElementById('menu');
        if (!menu)
            return;
        const element = (this.triggerButton ? this.triggerButton : this);
        const { x, y } = await computePosition(element, menu, {
            placement: this.getPlacement(this.position),
            middleware: [
                offset(this.offset ?? 2),
                size({
                    apply() {
                        Object.assign(menu.style, {
                            width: `${MENU_WIDTH}px`,
                        });
                    },
                    padding: 5,
                }),
            ],
        });
        Object.assign(this.menuElement.style, {
            left: `${x}px`,
            top: `${y}px`,
        });
    }
    getPlacement(position) {
        const { leftSide, rightSide } = getDirection(this) === 'rtl'
            ? { leftSide: 'right', rightSide: 'left' }
            : { leftSide: 'left', rightSide: 'right' };
        const placementMap = {
            [IGDS_PLACEMENTS.top]: 'top',
            [IGDS_PLACEMENTS.bottom]: 'bottom',
            [IGDS_PLACEMENTS.bottomStart]: 'bottom-start',
            [IGDS_PLACEMENTS.bottomEnd]: 'bottom-end',
            [IGDS_PLACEMENTS.topStart]: 'top-start',
            [IGDS_PLACEMENTS.topEnd]: 'top-end',
            [IGDS_PLACEMENTS.insetInlineEnd]: `${rightSide}`,
            [IGDS_PLACEMENTS.insetInlineStart]: `${leftSide}`,
            [IGDS_PLACEMENTS.insetInlineEndBottom]: `${rightSide}-end`,
            [IGDS_PLACEMENTS.insetInlineEndTop]: `${rightSide}-start`,
            [IGDS_PLACEMENTS.insetInlineStartTop]: `${leftSide}-start`,
            [IGDS_PLACEMENTS.insetInlineStartBottom]: `${leftSide}-end`,
        };
        return placementMap[position];
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (this.variant === IGDS_MENU_VARIANT.indent) {
            this.initializeIndentedMenu();
        }
        if (_changedProperties.has('open')) {
            this.addStylesToTriggerButtonIcon();
        }
    }
    addStylesToTriggerButtonIcon() {
        if (this.triggerButton instanceof HTMLElement) {
            const iconElement = this.triggerButton.querySelector(IGDS_TAGS.icon);
            if (iconElement?.node === chevronDown) {
                iconElement.style.transform = `rotate(${this.open ? 180 : 0}deg)`;
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener(IGDS_EVENTS.click, this.onSelectMenuItem);
        window.removeEventListener('resize', this.resizeHandler);
        if (this.triggers && this.triggers.length > 0) {
            this.triggers.forEach((trigger) => {
                trigger.removeEventListener('click', this.toggleMenu);
                trigger.removeEventListener('keydown', this.onKeyDown);
            });
        }
    }
    render() {
        return html `
      <slot name="trigger" @slotchange=${this.handleTriggerChange}></slot>
      <div
        id="menu"
        class=${classMap({
            menu: true,
            'menu--open': this.open,
        })}
        role="menu"
        aria-label=${this.label ? this.label : 'Menu'}
      >
        ${when((this.variant === IGDS_MENU_VARIANT.header && this.label) ||
            (this.isMobile() && this.label && this.isSubMenuShown), () => html `
            <div class="menu__header">
              ${when(this.isSubMenuShown, () => html `
                  <igds-icon
                    role="button"
                    tabindex="0"
                    aria-label="Back to main menu icon"
                    class="menu__header-icon"
                    node=${chevronRight}
                    @click=${this.onBackIconClick}
                    @keydown=${this.onBackIconKeyDown}
                  >
                  </igds-icon>
                `)}
              <span>${this.label}</span>
            </div>
            ${when(this.variant === IGDS_MENU_VARIANT.mobileHeader, () => html ` <igds-divider></igds-divider> `)}
          `)}
        ${when(!this.isSubMenuShown, () => html ` <slot name="menu-item" class="menu-slot"></slot> `)}
        ${when(this.isSubMenuShown && this.subMenuItems?.length, () => html `
            ${repeat(this.subMenuItems, (subMenuItem) => html `
                <igds-menu-item
                  ?disabled=${subMenuItem.disabled}
                  ?withDivider=${subMenuItem.withDivider}
                  id=${subMenuItem.id}
                  label=${subMenuItem.label}
                  icon=${ifDefined(subMenuItem.icon)}
                >
                </igds-menu-item>
              `)}
          `)}
      </div>
    `;
    }
    isMobile() {
        return this._mediaQueryObserver.matches;
    }
    onBackIconKeyDown(event) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(event.key)) {
            this.onBackIconClick();
        }
    }
    onBackIconClick() {
        this.isSubMenuShown = false;
    }
    getMenuItems() {
        const slottedMenuItems = this.getSlottedMenuItems();
        if (!slottedMenuItems)
            return;
        const menuItems = [];
        slottedMenuItems.forEach((slottedMenuItem) => {
            if (slottedMenuItem.shadowRoot?.querySelector('.menu-item')) {
                menuItems.push(slottedMenuItem.shadowRoot?.querySelector('.menu-item'));
            }
        });
        return menuItems;
    }
    getSlottedMenuItems() {
        if (!this.menuElements?.length)
            return;
        return this.menuElements.filter((element) => element instanceof MenuItem && !element.disabled);
    }
    isRelevantKey(key) {
        return [
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            "Escape" /* IGDS_EVENT_KEYS.Escape */,
            " " /* IGDS_EVENT_KEYS.Space */,
        ].includes(key);
    }
    handleEnterOrSpaceDown(key, menuItems) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(key) &&
            this.highlightedId &&
            menuItems?.length) {
            this.open = !this.open;
            const highlightedItem = this.menuElements.find((menuElement) => menuElement.id === this.highlightedId);
            if (!highlightedItem)
                return;
            const highlightedItemLabel = highlightedItem.label;
            this.emit(IGDS_EVENTS.click, highlightedItemLabel, {
                id: this.highlightedId,
            });
            this.highlightedId = null;
        }
    }
    handleEscapeDown(key) {
        if (key === "Escape" /* IGDS_EVENT_KEYS.Escape */) {
            this.open = false;
        }
    }
    handleArrowLeftDown(key) {
        if (key === "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */) {
            this.dir === 'ltr'
                ? this.hideSubmenu()
                : this.showSubmenuAndAddSubMenuItems();
        }
    }
    handleArrowRightDown(key) {
        if (key === "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */) {
            this.dir === 'ltr'
                ? this.showSubmenuAndAddSubMenuItems()
                : this.hideSubmenu();
        }
    }
    // eslint-disable-next-line complexity
    handleNavigateOnOpenSubmenu(key) {
        if (this.isSubmenuOpen() &&
            this.highlightedSubMenuId &&
            ["ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */, "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */].includes(key)) {
            this.removeHighlightedClass();
            if (!this.slottedSubMenuItems?.length)
                return true;
            let subMenuItemIndex = this.slottedSubMenuItems.findIndex((item) => item.id === this.highlightedSubMenuId);
            subMenuItemIndex = subMenuItemIndex + calculateIndexIncrement(key);
            if (subMenuItemIndex < 0)
                return true;
            if (subMenuItemIndex >= this.slottedSubMenuItems.length) {
                subMenuItemIndex = 0;
            }
            this.removeHighlightedSubmenuClass();
            const nextItem = this.slottedSubMenuItems[subMenuItemIndex]?.shadowRoot?.querySelector('.menu-item');
            if (nextItem) {
                nextItem.classList.add('menu-item--highlighted');
                this.highlightedSubMenuId =
                    this.slottedSubMenuItems[subMenuItemIndex].id;
            }
            return true;
        }
        return false;
    }
    getIndex(key, menuItems) {
        const activeItem = this.getCurrentItem();
        const indexIncrement = calculateIndexIncrement(key);
        return activeItem ? menuItems.indexOf(activeItem) + indexIncrement : 0;
    }
    // eslint-disable-next-line complexity
    handleNavigateOnCloseSubmenu(key, menuItems) {
        if (!menuItems ||
            this.isSubmenuOpen() ||
            !["ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */, "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */].includes(key)) {
            return;
        }
        let index = this.getIndex(key, menuItems);
        if (index < 0) {
            index = menuItems.length - 1;
        }
        if (index > menuItems.length - 1) {
            index = 0;
        }
        this.removeHighlightedClass();
        this.setCurrentItem(menuItems[index]);
        if (!this.menuElements?.length)
            return;
        const currentMenuElement = this.menuElements.find((element) => element.shadowRoot?.querySelector('.menu-item') === menuItems[index]);
        if (currentMenuElement) {
            this.highlightedId = currentMenuElement?.id;
        }
    }
    handleArrowDownWhenNotHighlightedSubmenu(key) {
        if (key === "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */ &&
            this.isSubmenuOpen() &&
            !this.highlightedSubMenuId) {
            this.focusFirstSubmenuItem();
            return true;
        }
        return false;
    }
    onKeyDown(event) {
        if (!this.isRelevantKey(event.key))
            return;
        const menuItems = this.getMenuItems();
        this.handleEnterOrSpaceDown(event.key, menuItems);
        this.handleEscapeDown(event.key);
        this.handleArrowLeftDown(event.key);
        this.handleArrowRightDown(event.key);
        if (this.handleNavigateOnOpenSubmenu(event.key)) {
            return;
        }
        if (this.handleArrowDownWhenNotHighlightedSubmenu(event.key)) {
            return;
        }
        this.handleNavigateOnCloseSubmenu(event.key, menuItems);
    }
    removeHighlightedSubmenuClass() {
        if (!this.slottedSubMenuItems?.length)
            return;
        this.slottedSubMenuItems.forEach((menuItem) => {
            const submenuElement = menuItem.shadowRoot?.querySelector('.menu-item');
            if (submenuElement?.classList.contains('menu-item--highlighted')) {
                submenuElement.classList.remove('menu-item--highlighted');
            }
        });
    }
    focusFirstSubmenuItem() {
        if (!this.slottedSubMenuItems?.length)
            return;
        this.removeHighlightedClass();
        const firstSubMenuItem = this.slottedSubMenuItems[0]?.shadowRoot?.querySelector('.menu-item');
        if (firstSubMenuItem) {
            firstSubMenuItem.classList.add('menu-item--highlighted');
            this.setCurrentItem(firstSubMenuItem);
        }
        this.highlightedSubMenuId = this.slottedSubMenuItems[0].id;
    }
    showSubmenuAndAddSubMenuItems() {
        const highlightedItem = this.menuElements.find((menuElement) => menuElement.id === this.highlightedId);
        if (highlightedItem &&
            highlightedItem instanceof MenuItem &&
            highlightedItem.subMenu) {
            this.slottedSubMenuItems = [
                ...highlightedItem.querySelectorAll('[slot="submenu-item"]'),
            ];
            highlightedItem.isSubMenuShown = true;
        }
    }
    isSubmenuOpen() {
        const highlightedItem = this.menuElements.find((menuElement) => menuElement.id === this.highlightedId);
        return (highlightedItem instanceof MenuItem && highlightedItem.isSubMenuShown);
    }
    hideSubmenu() {
        const highlightedItem = this.menuElements.find((menuElement) => menuElement.id === this.highlightedId);
        this.removeHighlightedSubmenuClass();
        this.highlightedSubMenuId = null;
        if (highlightedItem instanceof MenuItem && highlightedItem.subMenu) {
            highlightedItem.isSubMenuShown = false;
            this.slottedSubMenuItems = [];
            const currentMainItem = highlightedItem.shadowRoot?.querySelector('.menu-item');
            if (currentMainItem) {
                this.setCurrentItem(currentMainItem);
            }
        }
    }
    removeHighlightedClass() {
        const menuItems = this.getMenuItems();
        if (!menuItems)
            return;
        menuItems.forEach((menuItem) => {
            if (menuItem.classList.contains('menu-item--highlighted')) {
                menuItem.classList.remove('menu-item--highlighted');
            }
        });
    }
    getCurrentItem() {
        const menuItems = this.getMenuItems();
        if (!menuItems)
            return;
        return menuItems.find((element) => element.classList.contains('menu-item--highlighted'));
    }
    setCurrentItem(menuItem) {
        const menuItems = this.getMenuItems();
        if (!menuItems)
            return;
        menuItems.forEach((element) => element === menuItem
            ? element.classList.add('menu-item--highlighted')
            : element);
    }
};
Menu.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Menu.prototype, "variant", void 0);
__decorate([
    property({ type: String, attribute: 'trigger-button' })
], Menu.prototype, "triggerButton", void 0);
__decorate([
    property({ type: String })
], Menu.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], Menu.prototype, "open", void 0);
__decorate([
    property({ type: String })
], Menu.prototype, "position", void 0);
__decorate([
    property({ type: Number })
], Menu.prototype, "offset", void 0);
__decorate([
    state()
], Menu.prototype, "highlightedId", void 0);
__decorate([
    state()
], Menu.prototype, "highlightedSubMenuId", void 0);
__decorate([
    state()
], Menu.prototype, "isSubMenuShown", void 0);
__decorate([
    query('.menu')
], Menu.prototype, "menuElement", void 0);
__decorate([
    queryAssignedElements({ slot: 'menu-item' })
], Menu.prototype, "menuElements", void 0);
__decorate([
    queryAssignedElements({ slot: 'trigger' })
], Menu.prototype, "triggers", void 0);
Menu = __decorate([
    customElement(IGDS_TAGS.menu)
], Menu);
export { Menu };
