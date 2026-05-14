var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { Toast } from './toast';
import styles from './toast-container.scss?inline';
let ToastContainer = class ToastContainer extends IGDSElement {
    constructor() {
        super(...arguments);
        this.lastUrl = window.location.href;
        this.closeAllToasts = () => {
            if (this.dialog && this.dialog.open) {
                this.dialog.close();
            }
            const toasts = Array.from(this.children).filter((child) => child instanceof Toast);
            toasts.forEach((toast) => {
                toast.close();
            });
        };
    }
    firstUpdated() {
        const observer = new MutationObserver(() => {
            this.requestUpdate();
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir'],
        });
        this.observeUrlChanges();
        window.addEventListener('popstate', this.closeAllToasts);
        window.addEventListener('beforeunload', this.closeAllToasts);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.cleanupObserver)
            this.cleanupObserver();
        window.removeEventListener('popstate', this.closeAllToasts);
    }
    observeUrlChanges() {
        const observer = new MutationObserver(() => {
            if (this.lastUrl !== window.location.href) {
                this.lastUrl = window.location.href;
                this.closeAllToasts();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        this.cleanupObserver = () => observer.disconnect();
    }
    render() {
        const direction = document.documentElement.getAttribute('dir') || 'ltr';
        return html `
      <dialog
        open
        tabindex="-1"
        class="toast-container"
        dir=${direction}
      >
        <slot></slot>
      </dialog>
    `;
    }
};
ToastContainer.styles = unsafeCSS(styles);
__decorate([
    query('dialog')
], ToastContainer.prototype, "dialog", void 0);
ToastContainer = __decorate([
    customElement(IGDS_TAGS.toastContainer)
], ToastContainer);
export { ToastContainer };
