var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { computePosition, offset, size } from '@floating-ui/dom';
import { customElement, property, query, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { getCssValue, getDirection } from '../utils';
import { IGDSElement } from '../abstractions';
import { IGDS_EVENTS, IGDS_TAGS, } from '../constants';
import { MENU_WIDTH } from './constants';
import styles from './menu-item.scss?inline';
import { chevronLeft, chevronRight } from '@igds/icons';
let MenuItem = class MenuItem extends IGDSElement {
    constructor() {
        super();
        this.CSS_QUERY = `(max-width: ${getCssValue("--igds-light-ref-device-width-mobile" /* IGDS_BREAKPOINT_VARS.mobile */, '360px')})`;
        this.disabled = false;
        this.subMenu = false;
        this.withDivider = false;
        this.isSubMenuShown = false;
        this._mediaQueryObserver = window.matchMedia(this.CSS_QUERY);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.updateDeviceType = this.updateDeviceType.bind(this);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (!this.isMobile()) {
            this.setMenuItemEventListeners();
        }
        this._mediaQueryObserver.addEventListener('change', this.updateDeviceType);
    }
    updateDeviceType() {
        if (this.subMenu && !this.isMobile()) {
            this.setMenuItemEventListeners();
        }
        else {
            this.removeMenuItemEventListeners();
        }
    }
    isMobile() {
        return this._mediaQueryObserver.matches;
    }
    setMenuItemEventListeners() {
        this.menuItemElement.addEventListener('mouseenter', this.onMouseEnter);
        this.menuItemElement.addEventListener('mouseleave', this.onMouseLeave);
    }
    removeMenuItemEventListeners() {
        this.menuItemElement.removeEventListener('mouseenter', this.onMouseEnter);
        this.menuItemElement.removeEventListener('mouseleave', this.onMouseLeave);
    }
    onMouseEnter() {
        this.isSubMenuShown = true;
        this.emit(IGDS_EVENTS.hover, this.label);
    }
    onMouseLeave() {
        this.isSubMenuShown = false;
    }
    updated() {
        if (this.isSubMenuShown) {
            this.setSubmenuPosition();
        }
    }
    render() {
        return html `
      <div
        role="menuitem"
        class=${classMap({
            'menu-item': true,
            'menu-item--disabled': this.disabled,
            'menu-item--positioned': this.subMenu,
        })}
        aria-haspopup=${ifDefined(this.subMenu ? 'menu' : undefined)}
        aria-expanded=${ifDefined(this.subMenu ? this.isSubMenuShown : undefined)}
        @click=${this.onSelect}
        @keydown=${() => { }}
      >
        ${when(this.icon, () => html `
            <igds-icon
              class="menu-item__icon"
              node=${this.icon}
              aria-hidden=${!this.icon}
            >
            </igds-icon>
          `)}
        <span
          class=${classMap({
            'menu-item__content': true,
            'menu-item__content--disabled': this.disabled,
        })}
        >
          ${when(this.header, () => html ` <span class="menu-item__header">${this.header}</span> `)}
          <span
            class=${classMap({
            'menu-item__label': true,
            'menu-item__label--disabled': this.disabled,
            'menu-item__label--smaller': Boolean(this.header),
        })}
          >
            ${this.label}
          </span>
        </span>
        ${this.getSubMenu()}
      </div>
      ${when(this.withDivider, () => html ` <igds-divider></igds-divider> `)}
    `;
    }
    getSubMenu() {
        const direction = getDirection(this);
        return html `
      ${when(this.subMenu, () => html `
          <igds-icon
            class="menu-item__submenu-indicator"
            node=${direction === 'rtl' ? chevronLeft : chevronRight}
          >
          </igds-icon>
          ${when(this.isSubMenuShown && !this.isMobile(), () => html `
              <div
                id="menu-item-submenu"
                role="menu"
                class="menu-item__submenu"
              >
                <slot class="submenu-slot" name="submenu-item"></slot>
              </div>
            `)}
        `)}
    `;
    }
    onSelect() {
        if (this.disabled || (this.subMenu && !this.isMobile()))
            return;
        this.emit(IGDS_EVENTS.click, this.label, {
            id: this.componentId,
            subMenu: this.subMenu,
        });
    }
    async setSubmenuPosition() {
        if (!this.menuItemElement)
            return;
        const menuItemSubMenuElement = this.shadowRoot?.getElementById('menu-item-submenu');
        if (!menuItemSubMenuElement)
            return;
        const { x, y } = await computePosition(this.menuItemElement, menuItemSubMenuElement, {
            placement: this.getSubMenuPlacement(),
            middleware: [
                offset(1),
                size({
                    apply() {
                        Object.assign(menuItemSubMenuElement.style, {
                            width: `${MENU_WIDTH}px`,
                        });
                    },
                }),
            ],
        });
        Object.assign(menuItemSubMenuElement.style, {
            left: `${x}px`,
            top: `${y}px`,
        });
    }
    getSubMenuPlacement() {
        return getDirection(this) === 'rtl' ? 'left-start' : 'right-start';
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.menuItemElement.removeEventListener('mouseenter', this.onMouseEnter);
        this.menuItemElement.removeEventListener('mouseleave', this.onMouseLeave);
    }
};
MenuItem.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: 'id' })
], MenuItem.prototype, "componentId", void 0);
__decorate([
    property({ type: String })
], MenuItem.prototype, "label", void 0);
__decorate([
    property({ type: String })
], MenuItem.prototype, "header", void 0);
__decorate([
    property({ type: String })
], MenuItem.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], MenuItem.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, attribute: 'submenu' })
], MenuItem.prototype, "subMenu", void 0);
__decorate([
    property({ type: Boolean })
], MenuItem.prototype, "withDivider", void 0);
__decorate([
    state()
], MenuItem.prototype, "isSubMenuShown", void 0);
__decorate([
    query('.menu-item')
], MenuItem.prototype, "menuItemElement", void 0);
__decorate([
    query('.submenu-slot')
], MenuItem.prototype, "subMenuSlotElement", void 0);
MenuItem = __decorate([
    customElement(IGDS_TAGS.menuItem)
], MenuItem);
export { MenuItem };
