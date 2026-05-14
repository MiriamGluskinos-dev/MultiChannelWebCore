var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { unsafeCSS } from 'lit';
import { consume } from '@lit/context';
import { property, customElement } from 'lit/decorators.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { igdsTableContext } from './context';
import styles from './hidden.scss?inline';
let TableHeader = class TableHeader extends IGDSElement {
    updated(changedProperties) {
        super.updated(changedProperties);
        const columns = typeof this.columns === 'string'
            ? JSON.parse(this.columns)
            : this.columns;
        if (columns && Array.isArray(columns)) {
            this.context?.setHeader(columns);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.context?.removeHeader();
    }
};
TableHeader.styles = unsafeCSS(styles);
__decorate([
    property({ type: Array })
], TableHeader.prototype, "columns", void 0);
__decorate([
    consume({ context: igdsTableContext })
], TableHeader.prototype, "context", void 0);
TableHeader = __decorate([
    customElement(IGDS_TAGS.tableHeader)
], TableHeader);
export { TableHeader };
