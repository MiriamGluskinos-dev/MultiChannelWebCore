var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { consume } from '@lit/context';
import { customElement, property, query } from 'lit/decorators.js';
import { igdsBreadcrumbsContext, } from './breadcrumb-context';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { generateId } from '../utils';
import styles from './breadcrumb-item.scss?inline';
let BreadcrumbItem = class BreadcrumbItem extends IGDSElement {
    updateItem() {
        this.label = this.getText(this.itemSlot);
        this.context?.updateItem(this.localId, {
            href: this.href,
            label: this.label,
            rel: this.rel,
            target: this.target,
        });
    }
    getText(element) {
        const childNodes = element.assignedNodes({ flatten: true });
        return childNodes.reduce((result, item) => {
            return result + item.textContent?.trim();
        }, '');
    }
    emitEvent({ href }) {
        this.emit(IGDS_EVENTS.navigate, href);
    }
    connectedCallback() {
        super.connectedCallback();
        this.context?.subscribe(this.localId, this.emitEvent);
    }
    handleSlotChange(e) {
        if (!e.target) {
            return;
        }
        const text = this.getText(e.target);
        if (this.label === text) {
            return;
        }
        this.label = text;
        this.updateItem();
    }
    constructor() {
        super();
        this.label = '';
        this.localId = generateId();
        this.href = '#';
        this.rel = 'noreferrer noopener';
        this.emitEvent = this.emitEvent.bind(this);
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('href') ||
            changedProperties.has('target') ||
            changedProperties.has('rel')) {
            this.updateItem();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.unsubscribe(this.localId);
        this.context?.deleteItem(this.localId);
    }
    render() {
        return html `<slot @slotchange=${this.handleSlotChange}></slot>`;
    }
};
BreadcrumbItem.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], BreadcrumbItem.prototype, "href", void 0);
__decorate([
    property({ type: String })
], BreadcrumbItem.prototype, "target", void 0);
__decorate([
    property({ type: String })
], BreadcrumbItem.prototype, "rel", void 0);
__decorate([
    consume({ context: igdsBreadcrumbsContext })
], BreadcrumbItem.prototype, "context", void 0);
__decorate([
    query('slot')
], BreadcrumbItem.prototype, "itemSlot", void 0);
BreadcrumbItem = __decorate([
    customElement(IGDS_TAGS.breadcrumbItem)
], BreadcrumbItem);
export { BreadcrumbItem };
