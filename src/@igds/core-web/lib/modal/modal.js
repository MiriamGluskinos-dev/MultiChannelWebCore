var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_MODAL_TYPE, DELAY_BEFORE_RECALCULATE_MODAL_HEIGHT, } from './constants';
import { createFocusTrap } from 'focus-trap';
import { throttle, lockBodyScrolling, unlockBodyScrolling, isClickInsideDialog, } from '../utils';
import styles from './modal.scss?inline';
import tokens from './tokens.scss?inline';
import '../icon';
import '../button';
import { close } from '@igds/icons';
let Modal = class Modal extends IGDSElement {
    set disabledFocusLock(value) {
        if (value) {
            this.deactivateFocusLock();
        }
        this._disabledFocusLock = value;
    }
    get disabledFocusLock() {
        return this._disabledFocusLock;
    }
    requestClose() {
        this.open = false;
    }
    closeByBackdropClick(e) {
        if (!this.dialogElement) {
            return;
        }
        if (!isClickInsideDialog(e, this.dialogElement.getBoundingClientRect())) {
            this.requestClose();
        }
    }
    handleOpenModal() {
        if (!this.dialogElement) {
            return;
        }
        this.dialogElement.showModal();
        this.dialogElement.addEventListener('click', this.closeByBackdropClick);
        this.closeButton?.focus();
        if (this.trap && !this.disabledFocusLock) {
            this.trap.activate();
        }
        this.checkHeightOverflow();
        lockBodyScrolling(this);
        this.emit(IGDS_EVENTS.open, 'opened');
    }
    handleCloseModal() {
        if (!this.dialogElement) {
            return;
        }
        this.dialogElement.close();
        unlockBodyScrolling(this);
        this.deactivateFocusLock();
        this.emit(IGDS_EVENTS.close, 'closed');
    }
    handlePrimaryButtonClick() {
        this.emit(IGDS_EVENTS.primaryClick, 'primaryClicked');
        this.requestClose();
    }
    handleSecondaryButtonClick() {
        this.emit(IGDS_EVENTS.secondaryClick, 'secondaryClicked');
        this.requestClose();
    }
    handleSlotChange() {
        if (this.trap && this.dialogElement) {
            this.trap.updateContainerElements(this.dialogElement);
        }
    }
    checkHeightOverflow() {
        if (!this.open) {
            return;
        }
        if (this.bodyElement) {
            this.isHeightOverflowed =
                this.bodyElement.clientHeight !== this.bodyElement.scrollHeight;
        }
    }
    handleCancelingDialogWhenFocusLockDisabled(openChanged) {
        if (!this.disabledFocusLock || !openChanged) {
            return;
        }
        if (this.open) {
            this.dialogElement?.addEventListener('cancel', this.requestClose, {
                once: true,
            });
        }
        else {
            this.dialogElement?.removeEventListener('cancel', this.requestClose);
        }
    }
    deactivateFocusLock() {
        if (this.trap && this.trap.active) {
            this.trap.deactivate();
        }
    }
    constructor() {
        super();
        this._disabledFocusLock = false;
        this.type = IGDS_MODAL_TYPE.default;
        this.top = 0; // it affects only to coach-mark modals (set top position)
        this.start = 0; // it affects only to coach-mark modals (set inline start position)
        this.isHeightOverflowed = false;
        this.resizeHandler = throttle(() => {
            this.checkHeightOverflow();
        }, DELAY_BEFORE_RECALCULATE_MODAL_HEIGHT);
        this.closeByBackdropClick = this.closeByBackdropClick.bind(this);
        this.resizeHandler = this.resizeHandler.bind(this);
        this.requestClose = this.requestClose.bind(this);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        if (this.dialogElement) {
            this.trap = createFocusTrap(this.dialogElement, {
                tabbableOptions: {
                    getShadowRoot: true,
                },
                escapeDeactivates: () => {
                    this.requestClose();
                    return true;
                },
                clickOutsideDeactivates: true,
            });
        }
        window.addEventListener('resize', this.resizeHandler);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('open')) {
            if (this.open) {
                this.handleOpenModal();
            }
            else {
                this.handleCloseModal();
            }
        }
        this.handleCancelingDialogWhenFocusLockDisabled(changedProperties.has('open'));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.dialogElement) {
            this.dialogElement.removeEventListener('click', this.closeByBackdropClick);
        }
        window.removeEventListener('resize', this.resizeHandler);
        this.dialogElement?.removeEventListener('cancel', this.requestClose);
        unlockBodyScrolling(this);
        this.deactivateFocusLock();
    }
    render() {
        return html `
      <dialog
        class=${classMap({
            modal: true,
            'modal--has-image': Boolean(this.imageSrc),
            'modal--animated': Boolean(this.animated),
            'modal--overflowed': this.isHeightOverflowed,
            'modal--type-simple': this.type === IGDS_MODAL_TYPE.simple,
            'modal--type-coach-mark': this.type === IGDS_MODAL_TYPE.coachMark,
        })}
        aria-modal=${ifDefined(this.open ? true : undefined)}
        style=${this.type === IGDS_MODAL_TYPE.coachMark
            ? styleMap({
                marginTop: `${this.top}px`,
                marginInlineStart: `${this.start}px`,
            })
            : nothing}
        aria-labelledby="header"
      >
        <header class="modal__header-box">
          <button
            class="modal__button-close"
            type="button"
            @click=${this.requestClose}
            aria-label="Close modal"
          >
            <igds-icon node=${close} class="modal__icon-close"></igds-icon>
          </button>
          ${when(this.imageSrc, () => html `
                <img
                  class=${classMap({
            modal__image: true,
            'modal__image--auto-size': Boolean(this.imageAutoSize) && !this.mobileImageSrc,
            'modal__image--desktop': Boolean(this.mobileImageSrc),
        })}
                  src=${this.imageSrc}
                  alt=${this.imageAlt ?? ''}
                  role=${ifDefined(this.imageAlt ? undefined : 'presentation')}
                />
              `)}
          ${when(this.mobileImageSrc, () => html `
                <img
                  class="modal__image modal__image--mobile"
                  src=${this.mobileImageSrc}
                  alt=${this.mobileImageAlt ?? ''}
                  role=${ifDefined(this.mobileImageAlt ? undefined : 'presentation')}
                />
              `)}
          <h2 class="modal__header" id="header">${this.label}</h2>
        </header>
        <div class="modal__separator"></div>
        <article class="modal__body" part="scrollable">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </article>
        <div class="modal__separator modal__separator--bottom"></div>
        <slot name="footer" @slotchange=${this.handleSlotChange}>
          <footer class="modal__footer">
            ${when(this.primaryActionLabel, () => html `
                  <igds-button
                    variant="primary"
                    @igds-click=${this.handlePrimaryButtonClick}
                    class="modal__button modal__button--primary"
                  >
                    ${this.primaryActionLabel}
                  </igds-button>
                `)}
            ${when(this.secondaryActionLabel, () => html `
                  <igds-button
                    variant="secondary"
                    @igds-click=${this.handleSecondaryButtonClick}
                    class="modal__button modal__button--secondary"
                  >
                    ${this.secondaryActionLabel}
                  </igds-button>
                `)}
          </footer>
        </slot>
      </dialog>
    `;
    }
};
Modal.styles = [unsafeCSS(tokens), unsafeCSS(styles)];
__decorate([
    property({ type: Boolean, reflect: true })
], Modal.prototype, "open", void 0);
__decorate([
    property({ type: String })
], Modal.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Modal.prototype, "type", void 0);
__decorate([
    property({ type: Number })
], Modal.prototype, "top", void 0);
__decorate([
    property({ type: Number })
], Modal.prototype, "start", void 0);
__decorate([
    property({ type: Boolean, attribute: 'image-auto-size' })
], Modal.prototype, "imageAutoSize", void 0);
__decorate([
    property({ type: String, attribute: 'image-src' })
], Modal.prototype, "imageSrc", void 0);
__decorate([
    property({ type: String, attribute: 'image-alt' })
], Modal.prototype, "imageAlt", void 0);
__decorate([
    property({ type: String, attribute: 'mobile-image-src' })
], Modal.prototype, "mobileImageSrc", void 0);
__decorate([
    property({ type: String, attribute: 'mobile-image-alt' })
], Modal.prototype, "mobileImageAlt", void 0);
__decorate([
    property({ type: String, attribute: 'primary-action-label' })
], Modal.prototype, "primaryActionLabel", void 0);
__decorate([
    property({ type: String, attribute: 'secondary-action-label' })
], Modal.prototype, "secondaryActionLabel", void 0);
__decorate([
    property({ type: String })
], Modal.prototype, "animated", void 0);
__decorate([
    property({ type: Boolean, attribute: 'disable-focus-lock' })
], Modal.prototype, "disabledFocusLock", null);
__decorate([
    query('dialog')
], Modal.prototype, "dialogElement", void 0);
__decorate([
    query('.modal__body')
], Modal.prototype, "bodyElement", void 0);
__decorate([
    query('.modal__button-close')
], Modal.prototype, "closeButton", void 0);
__decorate([
    state()
], Modal.prototype, "isHeightOverflowed", void 0);
Modal = __decorate([
    customElement(IGDS_TAGS.modal)
], Modal);
export { Modal };
