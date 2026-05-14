var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { paginationContext } from './context';
import styles from './pagination-item.scss?inline';
let PaginationItem = class PaginationItem extends IGDSElement {
    constructor() {
        super(...arguments);
        this.href = '';
    }
    registerItem() {
        this.context?.registerItem(this.href);
    }
    connectedCallback() {
        super.connectedCallback();
        this.registerItem();
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('href')) {
            this.registerItem();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.unregisterItem(this.href);
    }
    render() {
        return null;
    }
};
PaginationItem.styles = unsafeCSS(styles);
__decorate([
    consume({ context: paginationContext })
], PaginationItem.prototype, "context", void 0);
__decorate([
    property({ type: String })
], PaginationItem.prototype, "href", void 0);
PaginationItem = __decorate([
    customElement(IGDS_TAGS.paginationItem)
], PaginationItem);
export { PaginationItem };
