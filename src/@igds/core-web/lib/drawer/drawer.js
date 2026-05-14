var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { createFocusTrap } from 'focus-trap';
import { customElement, property, query, state } from 'lit/decorators.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_DRAWER_POSITION, ANIMATION_TIMING } from './constants';
import { IGDS_BUTTON_VARIANTS } from '../button';
import { IGDSElement } from '../abstractions';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { lockBodyScrolling, unlockBodyScrolling, isClickInsideDialog, } from '../utils';
import { close } from '@igds/icons';
import styles from './drawer.scss?inline';
let Drawer = class Drawer extends IGDSElement {
    constructor() {
        super();
        this._disableFocusLock = false;
        this.open = false;
        this.position = IGDS_DRAWER_POSITION.right;
        this.hideCloseButton = false;
        this.hideOverlay = false;
        this.isDrawerShown = false;
        this.isAnimationEnded = true;
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.closeByBackdropClick = this.closeByBackdropClick.bind(this);
    }
    set disableFocusLock(value) {
        if (value && this._trap && this._trap.active) {
            this._trap.deactivate();
        }
        this._disableFocusLock = value;
    }
    get disableFocusLock() {
        return this._disableFocusLock;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this._drawerPanel.addEventListener('animationend', this.handleAnimationEnd);
        if (this._drawerPanel) {
            this._trap = createFocusTrap(this._drawerPanel, {
                tabbableOptions: {
                    getShadowRoot: true,
                },
                fallbackFocus: () => this._drawerPanel,
                escapeDeactivates: () => {
                    this.hide();
                    return true;
                },
                clickOutsideDeactivates: true,
            });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._drawerPanel.removeEventListener('animationend', this.handleAnimationEnd);
        this._drawerPanel.removeEventListener('click', this.closeByBackdropClick);
        unlockBodyScrolling(this);
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (!_changedProperties.has('open')) {
            return;
        }
        if (this.open && !this.isDrawerShown) {
            this.show();
            return;
        }
        if (!this.open && this.isDrawerShown) {
            this.hide();
        }
    }
    show() {
        if (this.isDrawerShown) {
            return;
        }
        this._drawerPanel.showModal();
        this.isDrawerShown = true;
        this.open = true;
        this.emit(IGDS_EVENTS.open);
        this._drawerPanel.addEventListener('click', this.closeByBackdropClick);
        lockBodyScrolling(this);
        if (this._trap && !this.disableFocusLock) {
            this._trap.activate();
        }
    }
    hide() {
        if (!this.isDrawerShown) {
            return;
        }
        this.isAnimationEnded = false;
        this.isDrawerShown = false;
        this.open = false;
        this.emit(IGDS_EVENTS.close);
        unlockBodyScrolling(this);
        setTimeout(() => {
            this._drawerPanel.close();
        }, ANIMATION_TIMING);
        if (this._trap && this._trap.active) {
            this._trap.deactivate();
        }
    }
    handleAnimationEnd() {
        this.isAnimationEnded = true;
    }
    closeByBackdropClick(e) {
        if (!this._drawerPanel) {
            return;
        }
        if (!isClickInsideDialog(e, this._drawerPanel.getBoundingClientRect())) {
            this.hide();
        }
    }
    handleSlotChange() {
        if (this._trap && this._drawerPanel) {
            this._trap.updateContainerElements(this._drawerPanel);
        }
    }
    isHidden() {
        return Boolean(!this.isDrawerShown && this.isAnimationEnded);
    }
    isLabelDefined() {
        return typeof this.label === 'string';
    }
    render() {
        return html `
      <dialog
        part="scrollable"
        class=${classMap({
            drawer: true,
            'drawer--open': Boolean(this.isDrawerShown),
            'drawer--right': this.position === IGDS_DRAWER_POSITION.right,
            'drawer--left': this.position === IGDS_DRAWER_POSITION.left,
            'drawer--without-backdrop': Boolean(this.hideOverlay),
        })}
        aria-modal=${ifDefined(this.isDrawerShown ? true : undefined)}
        aria-hidden=${this.isHidden()}
        aria-label=${this.label || 'Drawer'}
        aria-labelledby=${ifDefined(this.isLabelDefined() ? 'title' : undefined)}
        tabindex="0"
      >
        <div class="drawer__box">
          ${when(!this.hideCloseButton || this.isLabelDefined(), () => html `
              <header class="drawer__header">
                ${when(this.isLabelDefined(), () => html ` <h2 class="drawer__title" id="title">
                      ${this.label}
                    </h2>`)}
                ${when(!this.hideCloseButton, () => html `<igds-button
                      variant=${IGDS_BUTTON_VARIANTS.link}
                      class="drawer__close"
                      label="Close"
                      @click=${() => this.hide()}
                      ><igds-icon slot="icon" node=${close}></igds-icon
                    ></igds-button>`)}
              </header>
            `)}
          <section class="drawer__body">
            <slot @slotchange=${this.handleSlotChange}></slot>
          </section>
        </div>
      </dialog>
    `;
    }
};
Drawer.styles = unsafeCSS(styles);
__decorate([
    property({ type: Boolean, reflect: true })
], Drawer.prototype, "open", void 0);
__decorate([
    property({ type: String })
], Drawer.prototype, "position", void 0);
__decorate([
    property({ type: String })
], Drawer.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-close-button' })
], Drawer.prototype, "hideCloseButton", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-overlay' })
], Drawer.prototype, "hideOverlay", void 0);
__decorate([
    state()
], Drawer.prototype, "isDrawerShown", void 0);
__decorate([
    state()
], Drawer.prototype, "isAnimationEnded", void 0);
__decorate([
    property({ type: Boolean, attribute: 'disable-focus-lock' })
], Drawer.prototype, "disableFocusLock", null);
__decorate([
    query('.drawer')
], Drawer.prototype, "_drawerPanel", void 0);
Drawer = __decorate([
    customElement(IGDS_TAGS.drawer)
], Drawer);
export { Drawer };
