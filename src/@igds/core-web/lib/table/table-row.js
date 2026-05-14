var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { consume } from '@lit/context';
import { property, customElement } from 'lit/decorators.js';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { igdsTableContext } from './context';
import { generateId } from '../utils';
import styles from './hidden.scss?inline';
let TableRow = class TableRow extends IGDSElement {
    getCells() {
        if (!this.cells || !Array.isArray(this.cells)) {
            return [];
        }
        return this.cells;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const cells = this.getCells();
        if (this._rowId) {
            const currentRow = this.context
                ?.getRows()
                .find((r) => r.id === this._rowId);
            this.context?.updateRow(this._rowId, {
                cells,
                slottedCells: currentRow?.slottedCells,
                selected: this.selected,
                expanded: this.expanded,
                expandable: this.expandable !== 'false',
            });
        }
        else {
            const id = this.rowId ?? generateId();
            this._rowId = this.context?.registerRow(id, {
                cells,
                slottedCells: [],
                selected: this.selected,
                expanded: this.expanded,
                expandable: this.expandable !== 'false',
            });
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._rowId) {
            this.context?.removeRow(this._rowId);
        }
    }
    handleSlotChange(e) {
        if (!this.context || !this._rowId) {
            return;
        }
        const slot = e.target;
        const assignedNodes = slot.assignedNodes({ flatten: true });
        const slottedCells = assignedNodes.filter((node) => node.tagName && node.tagName.toLowerCase() === IGDS_TAGS.tableCell);
        const cells = this.getCells();
        this.context.updateRow(this._rowId, {
            cells,
            slottedCells,
            selected: this.selected,
            expanded: this.expanded,
            expandable: this.expandable !== 'false',
        });
        // expandable row slots
        const nonCellSlotNodes = assignedNodes.filter((node) => node.nodeType === Node.ELEMENT_NODE &&
            (!node.tagName || node.tagName.toLowerCase() !== IGDS_TAGS.tableCell));
        if (nonCellSlotNodes.length > 0) {
            this.context.updateRowSlot(this._rowId, nonCellSlotNodes);
        }
    }
    render() {
        return html ` <slot @slotchange=${this.handleSlotChange}></slot> `;
    }
};
TableRow.styles = unsafeCSS(styles);
__decorate([
    property({ type: Array })
], TableRow.prototype, "cells", void 0);
__decorate([
    property({ type: String, attribute: 'id' })
], TableRow.prototype, "rowId", void 0);
__decorate([
    property({ type: Boolean })
], TableRow.prototype, "selected", void 0);
__decorate([
    property({ type: String })
], TableRow.prototype, "expandable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TableRow.prototype, "expanded", void 0);
__decorate([
    consume({ context: igdsTableContext })
], TableRow.prototype, "context", void 0);
TableRow = __decorate([
    customElement(IGDS_TAGS.tableRow)
], TableRow);
export { TableRow };
