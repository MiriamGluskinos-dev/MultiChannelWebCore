var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TOAST_TYPES, IGDS_TOAST_VARIANT, IGDS_TOAST_ICONS, } from './constants';
import styles from './toast.scss?inline';
import { IGDS_BUTTON_VARIANTS, IGDS_BUTTON_SIZES } from '../button';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { close } from '@igds/icons';
import '../icon';
import './toast-container';
let Toast = class Toast extends IGDSElement {
    constructor() {
        super(...arguments);
        this.type = IGDS_TOAST_TYPES.inline;
        this.variant = IGDS_TOAST_VARIANT.info;
        this.duration = 1000;
        this.inline = false;
        this.autoClose = false;
        this.closable = false;
        this.originalParent = null;
    }
    getToastContainer() {
        let container = document.querySelector('igds-toast-container');
        if (!container) {
            container = document.createElement('igds-toast-container');
            document.body.appendChild(container);
        }
        return container;
    }
    show() {
        const container = this.getToastContainer();
        const dir = document.documentElement.getAttribute('dir') || 'ltr';
        container.setAttribute('dir', dir);
        if (!this.originalParent) {
            this.originalParent = this.parentElement;
        }
        container.appendChild(this);
        this.style.display = 'block';
        this.classList.add('show');
        this.classList.remove('hide');
        if (this.autoClose) {
            this.handleAutoClose();
        }
    }
    close() {
        this.clearAutoClose();
        this.classList.add('hide');
        this.classList.remove('show');
        setTimeout(() => {
            this.style.display = 'none';
            const container = this.getToastContainer();
            if (this.parentElement === container) {
                container.removeChild(this);
            }
            if (this.originalParent) {
                this.originalParent.appendChild(this);
            }
            if (container.children.length === 0) {
                container.parentElement?.removeChild(container);
            }
            this.emit(IGDS_EVENTS.close, 'close toast');
        }, 300);
    }
    handleAutoClose() {
        this.clearAutoClose();
        this.closeTimeout = window.setTimeout(() => this.close(), this.duration);
    }
    clearAutoClose() {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = undefined;
        }
    }
    handleLinkClick(event) {
        event.stopPropagation();
        if (this.linkActionUrl) {
            window.open(this.linkActionUrl, '_self');
        }
    }
    getIcon() {
        const iconNode = IGDS_TOAST_ICONS[this.variant];
        return html `<igds-icon
      node=${iconNode}
      class="toast__icon toast__icon--${this.variant}"
    ></igds-icon>`;
    }
    getToastClass() {
        const isInline = this.type === IGDS_TOAST_TYPES.inline;
        const isFloat = this.type === IGDS_TOAST_TYPES.floating;
        return classMap({
            toast: true,
            toast__inline: isInline,
            toast__float: isFloat,
            'toast__inline--success': isInline && this.variant === IGDS_TOAST_VARIANT.success,
            'toast__inline--failure': isInline && this.variant === IGDS_TOAST_VARIANT.failure,
            'toast__inline--attention': isInline && this.variant === IGDS_TOAST_VARIANT.attention,
            'toast__inline--info': isInline && this.variant === IGDS_TOAST_VARIANT.info,
            [`toast--${this.variant}`]: true,
        });
    }
    renderFloatingToast() {
        return html `
      <div
        class="${this.getToastClass()}"
        role="alert"
        aria-live="${this.variant === IGDS_TOAST_VARIANT.failure
            ? 'assertive'
            : 'polite'}"
        tabindex="0"
      >
        <div class="toast__content-wrapper">
          ${this.getIcon()}
          <section class="toast__content">
            <slot name="title"></slot>
            <slot></slot>
          </section>
        </div>
        ${when(this.closable, () => html `<igds-button
            variant=${IGDS_BUTTON_VARIANTS.link}
            size=${IGDS_BUTTON_SIZES.small}
            class="toast__button"
            @igds-click=${() => this.close()}
            label="Close toast"
          >
            ${this.closeActionLabel}
            <igds-icon
              slot="second-icon"
              node=${close}
              class="toast__button-icon"
            ></igds-icon>
          </igds-button>`)}
      </div>
    `;
    }
    renderInlineToast() {
        this.classList.add('show');
        return html `
      <div
        class="${this.getToastClass()}"
        role="status"
        aria-live="${this.variant === IGDS_TOAST_VARIANT.failure
            ? 'assertive'
            : 'polite'}"
        tabindex="0"
      >
        <div class="toast__content-wrapper">
          ${this.getIcon()}
          <section class="toast__content">
            <slot name="title"></slot>
            <slot></slot>
            ${when(this.linkActionUrl && this.linkActionLabel, () => html ` <button
                class="toast__button toast__button-link"
                aria-label="Close toast"
                @click=${this.handleLinkClick}
              >
                ${this.linkActionLabel}
              </button>`)}
          </section>
        </div>
      </div>
    `;
    }
    render() {
        return html ` ${when(this.type === IGDS_TOAST_TYPES.floating, () => this.renderFloatingToast(), () => this.renderInlineToast())}`;
    }
};
Toast.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Toast.prototype, "type", void 0);
__decorate([
    property({ type: String })
], Toast.prototype, "variant", void 0);
__decorate([
    property({ type: Number })
], Toast.prototype, "duration", void 0);
__decorate([
    property({ type: Boolean })
], Toast.prototype, "inline", void 0);
__decorate([
    property({
        type: Boolean,
        attribute: 'auto-close',
        converter: (value) => value !== null && value !== 'false',
    })
], Toast.prototype, "autoClose", void 0);
__decorate([
    property({
        type: Boolean,
        reflect: true,
        converter: (value) => value !== null && value !== 'false',
    })
], Toast.prototype, "closable", void 0);
__decorate([
    property({ type: String, attribute: 'link-action-label' })
], Toast.prototype, "linkActionLabel", void 0);
__decorate([
    property({ type: String, attribute: 'link-action-url' })
], Toast.prototype, "linkActionUrl", void 0);
__decorate([
    property({ type: String, attribute: 'close-action-label' })
], Toast.prototype, "closeActionLabel", void 0);
Toast = __decorate([
    customElement(IGDS_TAGS.toast)
], Toast);
export { Toast };
