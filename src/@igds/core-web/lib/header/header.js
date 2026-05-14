var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS, IGDS_EVENTS, } from '../constants';
import { IGDS_HEADER_VARIANT } from './constants';
import { getCssValue } from '../utils';
import { IGDS_BUTTON_VARIANTS } from '../button';
import { search, arrow } from '@igds/icons';
import styles from './header.scss?inline';
// eslint-disable-next-line no-duplicate-imports
import '../button';
import '../icon';
import '../divider';
const IS_MOBILE = `(max-width: ${getCssValue("--igds-light-ref-device-width-tablet" /* IGDS_BREAKPOINT_VARS.tablet */, '768px')})`;
const IS_TABLET = `(max-width: ${getCssValue("--igds-light-ref-device-width-desktop-s" /* IGDS_BREAKPOINT_VARS.desktopS */, '1200px')})`;
let Header = class Header extends IGDSElement {
    constructor() {
        super();
        this.logoAlt = '';
        this.frontPageUrl = '/';
        this.variant = IGDS_HEADER_VARIANT.white;
        this.searchLabel = 'לְחַפֵּשׂ';
        this.isSearchExpanded = false;
        this.isSearchButtonShown = true;
        this.isBottomNav = false;
        this.hasSearch = false;
        this.isMobile = false;
        this.isTablet = false;
        this.expandSearch = () => {
            if (this.searchContainer) {
                this.searchContainer.classList.add('header__search--visible');
            }
            if (this.searchEl) {
                this.searchEl.classList.add('header__search-field-wrapper--block');
                this.searchEl.setAttribute('aria-hidden', 'false');
                setTimeout(() => {
                    this.searchEl.classList.add('header__search-field-wrapper--visible');
                    this.searchEl.setAttribute('tabindex', '0');
                    this.searchEl.focus();
                }, 0);
            }
        };
        this.collapseSearch = () => {
            if (this.searchEl) {
                this.searchEl.classList.remove('header__search-field-wrapper--visible');
                this.searchContainer.classList.remove('header__search--visible');
                this.searchEl.classList.remove('header__search-field-wrapper--block');
                this.searchEl.setAttribute('aria-hidden', 'true');
                this.searchEl.setAttribute('tabindex', '-1');
                this.isSearchExpanded = false;
                this.isSearchButtonShown = true;
            }
        };
        this.handleShowSearch = (e) => {
            e.stopPropagation();
            if (this.isMobile) {
                this.isSearchExpanded = true;
            }
            this.isSearchButtonShown = false;
            this.expandSearch();
        };
        this.handleLogoClick = (event, originalEvent) => {
            originalEvent?.preventDefault();
            this.emit(IGDS_EVENTS.logoClick, event);
        };
        this.handleLogoKeyDown = (event) => {
            if (event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */ ||
                event.key === " " /* IGDS_EVENT_KEYS.Space */) {
                this.handleLogoClick('idle');
            }
        };
        this._mobileMediaQueryObserver = window.matchMedia(IS_MOBILE);
        this._tabletMediaQueryObserver = window.matchMedia(IS_TABLET);
        this.handleScreenChange = this.handleScreenChange.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this._mobileMediaQueryObserver.addEventListener('change', this.handleScreenChange);
        this._tabletMediaQueryObserver.addEventListener('change', this.handleScreenChange);
        this.handleScreenChange();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._mobileMediaQueryObserver.removeEventListener('change', this.handleScreenChange);
        this._tabletMediaQueryObserver.removeEventListener('change', this.handleScreenChange);
        this.mutationObserver?.disconnect();
    }
    handleScreenChange() {
        this.isMobile = this._mobileMediaQueryObserver.matches;
        this.isTablet = this._tabletMediaQueryObserver.matches;
        if (this.searchElement === undefined) {
            return;
        }
        if (this.isTablet) {
            this.searchElement.removeAttribute('show-clear');
        }
        else {
            this.searchElement.setAttribute('show-clear', '');
        }
        if (this.authElement !== undefined) {
            this.authElement.setAttribute('variant', this.isMobile
                ? IGDS_BUTTON_VARIANTS.alternative
                : IGDS_BUTTON_VARIANTS.secondary);
            if (this.isMobile) {
                this.authElement.setAttribute('icon-only', '');
            }
            else {
                this.authElement.removeAttribute('icon-only');
            }
        }
    }
    get isOnFrontPage() {
        return (window.location.href ===
            new URL(this.frontPageUrl, window.location.origin).href);
    }
    handleBottomNavSlotChange(e) {
        const slot = e.target;
        const assignedNodes = slot.assignedNodes({ flatten: true });
        const hasElements = assignedNodes.some((node) => node.nodeType === Node.ELEMENT_NODE);
        this.isBottomNav = hasElements;
    }
    handleSearchSlotChange(e) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        this.searchElement = childNodes.find((child) => child.tagName.toLowerCase() === IGDS_TAGS.searchField);
        if (this.searchElement !== undefined) {
            this.hasSearch = true;
            if (!this.isTablet) {
                this.searchElement.setAttribute('show-clear', '');
            }
        }
    }
    handleAuthSlotChange(e) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        this.authElement = childNodes.find((child) => child.tagName.toLowerCase() === IGDS_TAGS.button);
        if (this.authElement === undefined) {
            return;
        }
        if (this.isMobile) {
            this.authElement.setAttribute('variant', IGDS_BUTTON_VARIANTS.alternative);
            this.authElement.setAttribute('icon-only', '');
        }
        if (this.variant === IGDS_HEADER_VARIANT.brand) {
            this.authElement.setAttribute('inverted', '');
        }
    }
    handleNavSlotChange(e) {
        if (!e.target || this.variant === IGDS_HEADER_VARIANT.white) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        childNodes.forEach((node) => {
            if (!node.tagName) {
                return;
            }
            if (node.tagName.toLowerCase() === IGDS_TAGS.popupMenu) {
                const triggerButton = node.querySelector(`${IGDS_TAGS.button}[slot="trigger"]`);
                if (triggerButton) {
                    triggerButton.setAttribute('inverted', '');
                }
            }
            if (node.tagName.toLowerCase() === IGDS_TAGS.button) {
                node.setAttribute('inverted', '');
            }
        });
    }
    handleHamburgerMenuOpen() {
        if (!this.hamburgerIcon) {
            return;
        }
        this.hamburgerIcon.setAttribute('name', 'close');
    }
    handleHamburgerMenuClose() {
        if (!this.hamburgerIcon) {
            return;
        }
        this.hamburgerIcon.setAttribute('name', 'menu');
    }
    findHamburgerButton(e) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        const popupMenu = childNodes.find((child) => child.tagName.toLowerCase() === IGDS_TAGS.popupMenu);
        if (!popupMenu) {
            return;
        }
        const button = popupMenu.querySelector(`${IGDS_TAGS.button}[slot="trigger"]`);
        if (!button) {
            return;
        }
        const icon = button.querySelector(`${IGDS_TAGS.icon}[slot="icon"]`);
        if (icon) {
            this.hamburgerIcon = icon;
        }
    }
    renderHamburgerSlot() {
        return html `
      <div
        class=${classMap({
            header__hamburger: true,
            'header__hamburger--extra-margin': !this.isSearchExpanded,
        })}
        @igds-open=${this.handleHamburgerMenuOpen}
        @igds-close=${this.handleHamburgerMenuClose}
      >
        <slot name="hamburger" @slotchange=${this.findHamburgerButton}></slot>
      </div>
    `;
    }
    renderLogo() {
        if (this.isSearchExpanded) {
            return;
        }
        return when(this.isOnFrontPage, () => html `
        <div
          class="header__logo"
          aria-label="אתה בדף הבית"
          title="דף הבית"
          @click=${() => this.handleLogoClick('idle')}
          @keydown=${this.handleLogoKeyDown}
        >
          <img
            src="${this.logoUrl}"
            alt="${this.logoAlt}"
            class="header__logo-image"
          />
        </div>
      `, () => html `
        <a
          class="header__logo"
          href="${this.frontPageUrl}"
          aria-label="עבור אל העמוד הראשי"
          title="לעמוד הראשי"
          @click=${(event) => this.handleLogoClick('navigate', event)}
        >
          <img
            src="${this.logoUrl}"
            alt="${this.logoAlt}"
            class="header__logo-image"
          />
        </a>
      `);
    }
    renderNavSlot() {
        return html `
      <nav class="header__nav" aria-label="ניווט ראשי">
        <slot @slotchange=${this.handleNavSlotChange}></slot>
      </nav>
    `;
    }
    renderNavigation() {
        return html `
      <nav
        class=${classMap({
            'header__extra-nav': true,
            'header__extra-nav--hidden': !this.isSearchButtonShown,
        })}
        aria-label="ניווט נוסף"
        aria-hidden=${ifDefined(this.isSearchButtonShown ? 'true' : undefined)}
      >
        <slot name="extra-nav" @slotchange=${this.handleNavSlotChange}></slot>
      </nav>
    `;
    }
    renderSearch() {
        return html `
      <div
        class="header__search"
        class=${classMap({
            header__search: true,
            'header__search--hidden': !this.hasSearch,
        })}
        tabindex="-1"
        aria-hidden="true"
      >
        <div
          class="header__search-field-wrapper"
          @igds-clear=${this.collapseSearch}
        >
          <slot name="search" @slotchange=${this.handleSearchSlotChange}></slot>
        </div>

        ${when(this.isSearchButtonShown, () => html `
            <igds-button
              variant=${IGDS_BUTTON_VARIANTS.alternative}
              class="header__search-button"
              @click=${this.handleShowSearch}
              label=${this.searchLabel}
              ?inverted=${this.variant === IGDS_HEADER_VARIANT.brand}
            >
              <igds-icon slot="icon" node=${search}></igds-icon>
            </igds-button>
          `)}
      </div>
    `;
    }
    renderAuth() {
        return html `
      <div class=${classMap({ 'header__full-width-block': !this.hasSearch })}>
        ${when(!this.isSearchExpanded, () => html `<slot
              name="auth"
              @slotchange=${this.handleAuthSlotChange}
            ></slot>`, () => html `
            <igds-button
              variant=${IGDS_BUTTON_VARIANTS.alternative}
              @click=${this.collapseSearch}
            >
              <igds-icon
                slot="icon"
                node=${arrow}
                class="header__back-icon"
              ></igds-icon>
            </igds-button>
          `)}
      </div>
    `;
    }
    renderBottomNavigation() {
        return html `
      <div
        class=${classMap({
            'header__bottom-nav': true,
            'header__bottom-nav--empty': !this.isBottomNav,
        })}
        role="navigation"
        aria-label="ניווט תחתון"
      >
        ${when(this.variant === 'white' && this.isBottomNav, () => html `<igds-divider></igds-divider>`)}
        <div
          class=${classMap({
            'header__bottom-nav-content': true,
            'header__bottom-nav-content--empty': !this.isBottomNav,
        })}
        >
          <slot
            name="bottom"
            @slotchange=${this.handleBottomNavSlotChange}
          ></slot>
        </div>
      </div>
    `;
    }
    render() {
        return html `
      <header class="header header--${this.variant}">
        <div
          class=${classMap({
            'header__top-row': true,
            'header__top-row--brand': this.variant === 'brand',
        })}
        >
          ${this.renderHamburgerSlot()} ${this.renderLogo()}
          ${this.renderNavSlot()} ${this.renderNavigation()}
          ${this.renderSearch()} ${this.renderAuth()}
        </div>
        ${this.renderBottomNavigation()}
      </header>
    `;
    }
};
Header.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Header.prototype, "logoUrl", void 0);
__decorate([
    property({ type: String })
], Header.prototype, "logoAlt", void 0);
__decorate([
    property({ type: String })
], Header.prototype, "frontPageUrl", void 0);
__decorate([
    property({ type: String })
], Header.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Header.prototype, "searchLabel", void 0);
__decorate([
    state()
], Header.prototype, "isSearchExpanded", void 0);
__decorate([
    state()
], Header.prototype, "isSearchButtonShown", void 0);
__decorate([
    state()
], Header.prototype, "isBottomNav", void 0);
__decorate([
    state()
], Header.prototype, "hasSearch", void 0);
__decorate([
    state()
], Header.prototype, "isMobile", void 0);
__decorate([
    state()
], Header.prototype, "isTablet", void 0);
__decorate([
    query('.header__search')
], Header.prototype, "searchContainer", void 0);
__decorate([
    query('.header__search-field-wrapper')
], Header.prototype, "searchEl", void 0);
Header = __decorate([
    customElement(IGDS_TAGS.header)
], Header);
export { Header };
