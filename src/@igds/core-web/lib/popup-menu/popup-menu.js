var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS, IGDS_EVENTS, IGDS_PLACEMENTS, } from '../constants';
import { IGDS_POPUP_MENU_VARIANT } from './constants';
import { throttle, getDirection, MENU_ITEM_HEIGHT, MENU_MAX_HEIGHT, isClickInsideDialog, } from '../utils';
import { igdsPopupMenuContext, IgdsPopupMenuContext } from './popup-menu-context';
import styles from './popup-menu.scss?inline';
import '../icon';
const DELAY_BEFORE_RECALCULATE_MENU_POSITION = 250;
let PopupMenu = class PopupMenu extends IGDSElement {
    set open(value) {
        this._open = value;
        if (value) {
            this.handleOpenMenu();
        }
        else {
            this.handleCloseMenu();
        }
    }
    get open() {
        return this._open;
    }
    constructor() {
        super();
        this.isAllItemHasIcons = true;
        this._open = false;
        this.offset = 4;
        this.minWidth = 166;
        this.variant = IGDS_POPUP_MENU_VARIANT.popup;
        this.items = [];
        this.context = new IgdsPopupMenuContext();
        this.requestUpdatePosition = throttle(() => {
            if (this.open) {
                this.updatePosition();
            }
        }, DELAY_BEFORE_RECALCULATE_MENU_POSITION);
        this.handleClickOutside = (e) => {
            if (!this.dialogElement) {
                return;
            }
            const isInDialog = isClickInsideDialog(e, this.dialogElement.getBoundingClientRect());
            if (!isInDialog) {
                this.requestClose();
                const clickedElement = document.elementFromPoint(e.clientX, e.clientY);
                if (clickedElement &&
                    clickedElement instanceof HTMLElement &&
                    this.triggerElement !== clickedElement) {
                    clickedElement.click();
                }
            }
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleEscapeKey = this.handleEscapeKey.bind(this);
        this.requestUpdatePosition = this.requestUpdatePosition.bind(this);
        this.requestOpen = this.requestOpen.bind(this);
        this.requestClose = this.requestClose.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChange = () => {
            this.items = this.context.getItems();
            this.isAllItemHasIcons = !this.items.some((item) => !item.icon);
        };
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.trigger) {
            this.findTriggerByCssSelector();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('resize', this.requestUpdatePosition);
        window.removeEventListener('scroll', this.requestUpdatePosition);
        window.removeEventListener('keydown', this.handleKeyDown);
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.requestOpen);
        }
    }
    findTriggerByCssSelector() {
        if (!this.trigger) {
            return;
        }
        const triggerElement = document.querySelector(this.trigger);
        if (!triggerElement) {
            return;
        }
        this.triggerElement = triggerElement;
        this.triggerElement.addEventListener('click', this.requestOpen);
    }
    handleOpenMenu() {
        if (!this.dialogElement) {
            return;
        }
        this.updatePosition();
        if (this.listElement && this.selectedItemId === undefined) {
            this.listElement.scrollTo(0, 0);
        }
        this.dialogElement.showModal();
        setTimeout(() => {
            document.addEventListener('mousedown', this.handleClickOutside);
        });
        window.addEventListener('resize', this.requestUpdatePosition);
        window.addEventListener('scroll', this.requestUpdatePosition);
        window.addEventListener('keydown', this.handleKeyDown);
        this.dialogElement.addEventListener('cancel', this.handleEscapeKey);
        this.emit(IGDS_EVENTS.open, 'opened');
        if (this.triggerElement) {
            this.triggerElement.setAttribute('open', 'true');
        }
    }
    handleCloseMenu() {
        if (!this.dialogElement) {
            return;
        }
        this.dialogElement.close();
        this.emit(IGDS_EVENTS.close, 'closed');
        this.focusedItemId = undefined;
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('resize', this.requestUpdatePosition);
        window.removeEventListener('scroll', this.requestUpdatePosition);
        window.removeEventListener('keydown', this.handleKeyDown);
        this.dialogElement.removeEventListener('cancel', this.handleEscapeKey);
        if (this.triggerElement) {
            this.triggerElement.removeAttribute('open');
        }
    }
    requestOpen() {
        this.open = true;
    }
    requestClose() {
        this.open = false;
    }
    handleEscapeKey(event) {
        event.preventDefault();
        this.requestClose();
    }
    handleTriggerSlotChange(e) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        if (childNodes.length > 0) {
            this.triggerElement = childNodes[0];
            this.triggerElement.addEventListener('click', this.requestOpen);
        }
    }
    updatePosition() {
        if (!this.triggerElement) {
            return;
        }
        const triggerRect = this.triggerElement.getBoundingClientRect();
        const menuHeight = this.calculateMenuHeight();
        const availableBottomSpace = this.calculateAvailableBottomSpace(triggerRect);
        const hasEnoughBottomSpace = availableBottomSpace >= menuHeight;
        const direction = getDirection(this);
        const leftScrollbarShift = document.body.getBoundingClientRect().left;
        const positionStyles = this.buildPositionStyles({
            triggerRect,
            menuHeight,
            hasEnoughBottomSpace,
            direction,
            leftScrollbarShift,
            availableBottomSpace,
        });
        Object.assign(this.dialogElement.style, positionStyles);
    }
    calculateMenuHeight() {
        const fullMenuHeight = this.items.length * MENU_ITEM_HEIGHT;
        return Math.min(fullMenuHeight, MENU_MAX_HEIGHT);
    }
    calculateAvailableBottomSpace(triggerRect) {
        return window.innerHeight - triggerRect.bottom - this.offset;
    }
    buildPositionStyles(params) {
        const { triggerRect, menuHeight, hasEnoughBottomSpace, direction, leftScrollbarShift, availableBottomSpace, } = params;
        return {
            ...this.calculateHorizontalPosition(triggerRect, direction, leftScrollbarShift),
            ...this.calculateVerticalPosition({
                triggerRect,
                menuHeight,
                hasEnoughBottomSpace,
                availableBottomSpace,
            }),
            ...this.calculateWidth(),
            ...this.calculatePlacementSpecificPosition(triggerRect, direction, availableBottomSpace),
        };
    }
    calculateHorizontalPosition(triggerRect, direction, leftScrollbarShift) {
        if (direction === 'ltr') {
            return {
                insetInlineStart: `${triggerRect.left - leftScrollbarShift}px`,
            };
        }
        else {
            return {
                insetInlineStart: `${document.body.offsetWidth - triggerRect.right + leftScrollbarShift}px`,
            };
        }
    }
    calculateVerticalPosition(params) {
        const { triggerRect, hasEnoughBottomSpace, availableBottomSpace } = params;
        if (hasEnoughBottomSpace) {
            return {
                top: `${triggerRect.bottom + this.offset}px`,
                bottom: 'auto',
            };
        }
        else {
            return {
                bottom: `${availableBottomSpace + MENU_ITEM_HEIGHT + 2 * this.offset}px`,
                top: 'auto',
            };
        }
    }
    calculateWidth() {
        const widthStyles = {
            minWidth: `${this.minWidth}px`,
        };
        if (this.placement === undefined) {
            widthStyles.width = `${this.triggerElement.getBoundingClientRect().width}px`;
        }
        else {
            widthStyles.width = 'auto';
        }
        if (this.maxWidth !== undefined) {
            widthStyles.maxWidth = `${this.maxWidth}px`;
        }
        return widthStyles;
    }
    calculatePlacementSpecificPosition(triggerRect, direction, availableBottomSpace) {
        if (!this.placement) {
            return {};
        }
        const placement = this.placement;
        const styles = {};
        if (this.isTopPlacement(placement)) {
            styles.bottom = `${availableBottomSpace + MENU_ITEM_HEIGHT + 2 * this.offset}px`;
            styles.top = 'auto';
        }
        if (this.isBottomPlacement(placement)) {
            styles.top = `${triggerRect.bottom + this.offset}px`;
            styles.bottom = 'auto';
        }
        if (this.isEndPlacement(placement)) {
            styles.insetInlineStart = 'auto';
            styles.insetInlineEnd =
                direction === 'ltr'
                    ? `${document.body.offsetWidth - triggerRect.right}px`
                    : `${triggerRect.left}px`;
        }
        return styles;
    }
    isTopPlacement(placement) {
        return [
            IGDS_PLACEMENTS.topStart,
            IGDS_PLACEMENTS.top,
            IGDS_PLACEMENTS.topEnd,
        ].includes(placement);
    }
    isBottomPlacement(placement) {
        return [
            IGDS_PLACEMENTS.bottomStart,
            IGDS_PLACEMENTS.bottom,
            IGDS_PLACEMENTS.bottomEnd,
        ].includes(placement);
    }
    isEndPlacement(placement) {
        return [IGDS_PLACEMENTS.topEnd, IGDS_PLACEMENTS.bottomEnd].includes(placement);
    }
    handleItemClick({ id }) {
        if (this.selectedItemId === id) {
            return;
        }
        this.context?.emit(id);
        this.requestClose();
    }
    processSelectedIndex(selectedIndex) {
        if (selectedIndex === -1) {
            this.setNextFocusedItemId(0);
            return;
        }
        if (selectedIndex < this.items.length - 1) {
            this.setNextFocusedItemId(selectedIndex + 1);
            return;
        }
        if (selectedIndex > 0) {
            this.setNextFocusedItemId(selectedIndex - 1);
        }
    }
    handleArrowDown(event, focusedIndex) {
        if (event.key !== "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */) {
            return false;
        }
        event.preventDefault();
        if (this.focusedItemId === undefined) {
            if (this.selectedItemId === undefined) {
                this.setNextFocusedItemId(0);
                return true;
            }
            const selectedIndex = this.items.findIndex((item) => item.id === this.selectedItemId);
            this.processSelectedIndex(selectedIndex);
            return true;
        }
        if (focusedIndex < this.items.length - 1) {
            this.setNextFocusedItemId(focusedIndex + 1);
        }
        return false;
    }
    handleArrowUp(event, focusedIndex) {
        if (event.key !== "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */) {
            return false;
        }
        event.preventDefault();
        if (this.focusedItemId === undefined) {
            return this.handleInitialFocus();
        }
        return this.handleFocusedMove(focusedIndex);
    }
    handleInitialFocus() {
        if (this.selectedItemId === undefined) {
            this.setPrevFocusedItemId(this.items.length - 1);
            return true;
        }
        const selectedIndex = this.findSelectedItemIndex();
        if (selectedIndex === -1) {
            this.setPrevFocusedItemId(this.items.length - 1);
            return true;
        }
        return this.handleSelectedItemFocus(selectedIndex);
    }
    findSelectedItemIndex() {
        return this.items.findIndex((item) => item.id === this.selectedItemId);
    }
    handleSelectedItemFocus(selectedIndex) {
        if (selectedIndex > 0) {
            this.setNextFocusedItemId(selectedIndex - 1);
            return true;
        }
        if (selectedIndex === 0 && this.items.length > 1) {
            this.setNextFocusedItemId(selectedIndex + 1);
        }
        return true;
    }
    handleFocusedMove(focusedIndex) {
        if (focusedIndex > 0) {
            this.setPrevFocusedItemId(focusedIndex - 1);
        }
        return false;
    }
    handleKeyDown(event) {
        if (event.key === "Tab" /* IGDS_EVENT_KEYS.Tab */) {
            this.requestClose();
            return;
        }
        if (this.items.length === 0 ||
            ![
                "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
                "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
                "Enter" /* IGDS_EVENT_KEYS.Enter */,
            ].includes(event.key)) {
            return;
        }
        const focusedIndex = this.items.findIndex((item) => item.id === this.focusedItemId);
        if (this.handleArrowDown(event, focusedIndex)) {
            return;
        }
        if (this.handleArrowUp(event, focusedIndex)) {
            return;
        }
        if (event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */ &&
            focusedIndex >= 0) {
            event.preventDefault();
            this.handleItemClick(this.items[focusedIndex]);
        }
    }
    setNextFocusedItemId(index) {
        if (this.selectedItemId !== this.items[index].id) {
            this.focusedItemId = this.items[index].id;
            this.scrollToIndexWhenMoveDown(index);
        }
        else if (this.items.length > index + 1) {
            this.focusedItemId = this.items[index + 1].id;
            this.scrollToIndexWhenMoveDown(index + 1);
        }
    }
    setPrevFocusedItemId(index) {
        if (this.selectedItemId !== this.items[index].id) {
            this.focusedItemId = this.items[index].id;
            this.scrollToIndexWhenMoveUp(index);
        }
        else if (index >= 1) {
            this.focusedItemId = this.items[index - 1].id;
            this.scrollToIndexWhenMoveUp(index - 1);
        }
    }
    scrollToIndexWhenMoveDown(index) {
        if ((index - 5) * MENU_ITEM_HEIGHT - this.listElement.scrollTop < 0) {
            return;
        }
        this.listElement.scrollTo(0, (index - 4) * MENU_ITEM_HEIGHT);
    }
    scrollToIndexWhenMoveUp(index) {
        if (index * MENU_ITEM_HEIGHT - this.listElement.scrollTop > 0) {
            return;
        }
        this.listElement.scrollTo(0, index * MENU_ITEM_HEIGHT);
    }
    render() {
        return html `
      <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
      <dialog
        role="menu"
        class=${classMap({
            'dropdown-popup': true,
            'dropdown-popup--menu': this.variant === IGDS_POPUP_MENU_VARIANT.menu,
        })}
      >
        <slot></slot>
        <ul class="dropdown-popup__list">
          ${this.items.map((item) => html `
              <li
                class=${classMap({
            'dropdown-popup__list-item': true,
            'dropdown-popup__list-item--active': this.selectedItemId === item.id,
            'dropdown-popup__list-item--focus-visible': this.focusedItemId === item.id,
        })}
                @click=${() => this.handleItemClick(item)}
                @keyup=${() => { }}
              >
                ${when(item.icon !== undefined && this.isAllItemHasIcons, () => html `
                    <igds-icon
                      node=${item.icon}
                      ?fill=${item.iconVariant === 'fill'}
                    ></igds-icon>
                  `)}
                <span class="dropdown-popup__label">${item.label}</span>
              </li>
            `)}
        </ul>
      </dialog>
    `;
    }
};
PopupMenu.styles = unsafeCSS(styles);
__decorate([
    property({ type: Boolean, reflect: true })
], PopupMenu.prototype, "open", null);
__decorate([
    property({ type: String, attribute: 'trigger' })
], PopupMenu.prototype, "trigger", void 0);
__decorate([
    property({ type: Number })
], PopupMenu.prototype, "offset", void 0);
__decorate([
    property({ type: String, attribute: 'selected-item-id' })
], PopupMenu.prototype, "selectedItemId", void 0);
__decorate([
    property({ type: Number, attribute: 'min-width' })
], PopupMenu.prototype, "minWidth", void 0);
__decorate([
    property({ type: Number, attribute: 'max-width' })
], PopupMenu.prototype, "maxWidth", void 0);
__decorate([
    property({ type: String })
], PopupMenu.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], PopupMenu.prototype, "placement", void 0);
__decorate([
    state()
], PopupMenu.prototype, "items", void 0);
__decorate([
    state()
], PopupMenu.prototype, "focusedItemId", void 0);
__decorate([
    query('dialog')
], PopupMenu.prototype, "dialogElement", void 0);
__decorate([
    query('.dropdown-popup__list')
], PopupMenu.prototype, "listElement", void 0);
__decorate([
    provide({ context: igdsPopupMenuContext })
], PopupMenu.prototype, "context", void 0);
PopupMenu = __decorate([
    customElement(IGDS_TAGS.popupMenu)
], PopupMenu);
export { PopupMenu };
