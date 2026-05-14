var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state, query, queryAll, } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { choose } from 'lit/directives/choose.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import Sortable from 'sortablejs';
import { IGDS_TAGS, IGDS_EVENTS, DELAY_BEFORE_CHECKING_TRUNCATED, } from '../constants';
import { IGDSElement } from '../abstractions';
import styles from './table.scss?inline';
import { IgdsTableContext, igdsTableContext } from './context';
import { isTextCell, isBadgeCell, isLinkCell } from './utils';
import { getDirection, throttle } from '../utils';
import { sortDefault, sortDown, sortUp, menu, chevronDown, helpOutlined, moreVertical, checkmark, } from '@igds/icons';
import '../checkbox';
import '../badge';
import '../icon';
import '../animate-height';
import '../menu';
import '../tooltip';
import '../input';
let Table = class Table extends IGDSElement {
    constructor() {
        super();
        this._hasExpandableRow = false;
        this._newCellValue = '';
        this._maxTableSize = 0;
        this._slottedCellObservers = [];
        this.context = new IgdsTableContext();
        this.header = [];
        this.rows = [];
        this.selectedRows = [];
        this._expandedRowIds = [];
        this.resizeHandler = throttle(() => {
            this.checkTruncated();
        }, DELAY_BEFORE_CHECKING_TRUNCATED);
        this.resizeHandler = this.resizeHandler.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChangeHeader = () => {
            this.header = this.context.getHeader();
            this._maxTableSize = Math.max(this.header.length, ...this.rows.map((row) => row.cells.length));
        };
        this.context.onChangeRows = () => {
            this.rows = this.context.getRows();
            this._maxTableSize = Math.max(this.header.length, ...this.rows.map((row) => row.cells.length));
            this._hasExpandableRow = this.rows.some((row) => row.slot !== undefined && row.expandable);
            if (this.selectable) {
                this.selectedRows = this.rows.reduce((acc, row) => (row.selected ? [...acc, row.id] : [...acc]), []);
            }
            this._expandedRowIds = this.rows.reduce((acc, row) => (row.expanded ? [...acc, row.id] : [...acc]), []);
        };
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._sortable) {
            this._sortable.destroy();
            this._sortable = undefined;
        }
        window.removeEventListener('resize', this.resizeHandler);
        this.disconnectSlottedCellObservers();
    }
    disconnectSlottedCellObservers() {
        this._slottedCellObservers.forEach((observer) => observer.disconnect());
        this._slottedCellObservers = [];
    }
    update(changedProperties) {
        super.update(changedProperties);
        this.processDroppablePropertyUpdate(changedProperties);
        this.processTruncatedPropertyUpdate(changedProperties);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if ((!changedProperties.has('header') && !changedProperties.has('rows')) ||
            changedProperties.get('rows') === undefined) {
            return;
        }
        this.processSlottedElements();
    }
    processSlottedElements() {
        (async () => {
            await this.updateComplete;
            this.boxes.forEach((box) => {
                const rowId = box.getAttribute('data-clone-id');
                if (!rowId) {
                    return;
                }
                const rowWithTheSlot = this.rows.find((row) => row.id === rowId);
                if (!rowWithTheSlot || !rowWithTheSlot.slot) {
                    return;
                }
                rowWithTheSlot.slot.forEach((node) => {
                    if (node.tagName &&
                        node.tagName.toLowerCase() === IGDS_TAGS.table &&
                        node.shadowRoot) {
                        node.shadowRoot.childNodes.forEach((shadowNode) => {
                            box.append(shadowNode);
                        });
                    }
                    else {
                        box.append(node);
                    }
                });
            });
            this.processSlottedCells();
        })();
    }
    processSlottedCells() {
        this.cells.forEach((box) => this.moveSlottedContent(box));
        this.disconnectSlottedCellObservers();
        this.cells.forEach((box) => this.setupSlottedCellObserver(box));
    }
    moveSlottedContent(box) {
        const { row, slottedCell } = this.getSlottedCellData(box);
        if (!row) {
            return;
        }
        if (!slottedCell && box.children.length > 0) {
            while (box.firstChild) {
                box.removeChild(box.firstChild);
            }
        }
        else if (slottedCell && box.children.length > 0) {
            while (box.firstChild) {
                slottedCell.appendChild(box.firstChild);
            }
        }
    }
    setupSlottedCellObserver(box) {
        const { row, slottedCell } = this.getSlottedCellData(box);
        if (!row || !slottedCell) {
            return;
        }
        const syncContent = () => {
            while (box.firstChild) {
                box.removeChild(box.firstChild);
            }
            if (slottedCell.children.length > 0) {
                Array.from(slottedCell.children).forEach((child) => {
                    box.appendChild(child);
                });
            }
        };
        syncContent();
        const observer = new MutationObserver(() => {
            observer.disconnect();
            syncContent();
            observer.observe(slottedCell, {
                childList: true,
                subtree: false,
            });
        });
        observer.observe(slottedCell, {
            childList: true,
            subtree: false,
        });
        this._slottedCellObservers.push(observer);
    }
    getSlottedCellData(box) {
        const rowId = box.getAttribute('data-row-id');
        const slottedIndex = parseInt(box.getAttribute('data-slotted-index') ?? '-1', 10);
        if (!rowId || slottedIndex < 0) {
            return { row: null, slottedCell: null };
        }
        const row = this.rows.find((r) => r.id === rowId);
        if (!row) {
            return { row: null, slottedCell: null };
        }
        const slottedCell = row.slottedCells?.[slottedIndex] ?? null;
        return { row, slottedCell };
    }
    processDroppablePropertyUpdate(changedProperties) {
        if (this.droppable &&
            (changedProperties.get('rows') !== undefined ||
                changedProperties.has('droppable'))) {
            this.initDragAndDrop();
        }
    }
    processTruncatedPropertyUpdate(changedProperties) {
        if (this.truncated &&
            this.cellText &&
            this.cellText.length > 0 &&
            (changedProperties.get('rows') !== undefined ||
                changedProperties.has('truncated'))) {
            setTimeout(() => {
                this.checkTruncated();
            }, DELAY_BEFORE_CHECKING_TRUNCATED);
            window.addEventListener('resize', this.resizeHandler);
        }
        if (changedProperties.has('truncated') && !this.truncated) {
            window.removeEventListener('resize', this.resizeHandler);
        }
    }
    initDragAndDrop() {
        if (!this.tbody ||
            !this.rows ||
            this.rows.length === 0 ||
            !this.header ||
            this.header.length === 0) {
            return;
        }
        if (this._sortable) {
            this._sortable.destroy();
        }
        this._sortable = Sortable.create(this.tbody, {
            onStart: () => {
                this.emit(IGDS_EVENTS.dragStart, 'drag-started');
            },
            onEnd: (event) => {
                const oldRowIndex = event.oldIndex;
                const newRowIndex = event.newIndex;
                this.emit(IGDS_EVENTS.dragEnd, 'drag-ended', {
                    oldRowIndex,
                    newRowIndex,
                });
                this.resetSortingOrder();
                if (newRowIndex === undefined || oldRowIndex === undefined) {
                    return;
                }
                this.rows.splice(newRowIndex, 0, {
                    ...this.rows.splice(oldRowIndex, 1)[0],
                });
                this.context.updateAllRows(this.rows);
            },
            handle: '.table__dnd-button',
            animation: 150,
            fallbackClass: 'table__fallback-item',
        });
    }
    checkTruncated() {
        if (!this.cellText || this.cellText.length === 0) {
            return;
        }
        this.cellText.forEach((item) => {
            const text = item.querySelector('.table__cell-text');
            const isOverflowed = text.scrollWidth > text.clientWidth;
            if (isOverflowed) {
                item.removeAttribute('disabled');
            }
            else {
                item.setAttribute('disabled', 'true');
            }
        });
    }
    handleSelect(e, id) {
        if (e.detail.checked) {
            this.selectedRows = [...this.selectedRows, id];
        }
        else {
            this.selectedRows = this.selectedRows.filter((rowId) => rowId !== id);
        }
        this.emit(IGDS_EVENTS.rowSelect, this.selectedRows);
    }
    handleSelectAll() {
        if (this.selectedRows.length > 0) {
            this.selectedRows = [];
            return;
        }
        this.selectedRows = this.rows.map(({ id }) => id);
    }
    handleExpandAll() {
        if (this._expandedRowIds.length > 0) {
            this._expandedRowIds = [];
            return;
        }
        this._expandedRowIds = this.rows.map(({ id }) => id);
    }
    toggleRowSlot(id) {
        if (this._expandedRowIds.includes(id)) {
            this._expandedRowIds = this._expandedRowIds.filter((rowId) => rowId !== id);
        }
        else {
            this._expandedRowIds = [...this._expandedRowIds, id];
        }
    }
    handleAction(action, rowId, rowIndex) {
        this.emit(IGDS_EVENTS.callAction, { rowId, rowIndex, action });
    }
    resetSortingOrder() {
        this.context.setHeader(this.header.map((column) => ({
            ...column,
            sortingOrder: undefined,
            sortable: false,
        })));
    }
    changeSortingOrder(columnIndex, option) {
        if (columnIndex >= this._maxTableSize) {
            console.warn(`Sorting order error. Column index is out of bounds.
        Table has ${this._maxTableSize} columns, try working with ${columnIndex} column index`);
            return;
        }
        const currentColumnSortingOrder = this.header[columnIndex].sortingOrder;
        const sortingDirection = (currentColumnSortingOrder === 'asc' ? -1 : 1) *
            (option?.reorder ? -1 : 1);
        this.context.updateAllRows(this.rows.sort((a, b) => {
            if (isTextCell(a.cells[columnIndex]) &&
                isTextCell(b.cells[columnIndex])) {
                return (a.cells[columnIndex].value.localeCompare(b.cells[columnIndex].value, undefined, { numeric: true }) * sortingDirection);
            }
            if ((isBadgeCell(a.cells[columnIndex]) &&
                isBadgeCell(b.cells[columnIndex])) ||
                (isLinkCell(a.cells[columnIndex]) && isLinkCell(b.cells[columnIndex]))) {
                return (a.cells[columnIndex].label.localeCompare(b.cells[columnIndex].label, undefined, { numeric: true }) * sortingDirection);
            }
            return 0;
        }));
        this.context.setHeader(this.header.map((column, index) => {
            if (index === columnIndex) {
                return {
                    ...column,
                    sortingOrder: sortingDirection > 0 ? 'asc' : 'desc',
                };
            }
            return { ...column, sortingOrder: undefined };
        }));
        this.emit(IGDS_EVENTS.sortingOrderChange, {
            [columnIndex]: sortingDirection > 0 ? 'asc' : 'desc',
        });
    }
    editCell() {
        if (!this.editable || !this._focusedCell) {
            return;
        }
        const cellValue = this.getCellValue(this._focusedCell.row, this._focusedCell.cell);
        if (cellValue === undefined) {
            // Not a text value cell
            return;
        }
        this.editableCell = {
            row: this._focusedCell.row,
            cell: this._focusedCell.cell,
        };
        this._newCellValue = cellValue;
        this.focusCellByAddress(this._focusedCell.row, this._focusedCell.cell, true);
    }
    cancelEditCell() {
        if (!this.editable || !this._focusedCell) {
            return;
        }
        this.editableCell = undefined;
        this.focusCellByAddress(this._focusedCell.row, this._focusedCell.cell);
    }
    handleEditCellInput(e) {
        this._newCellValue = e.detail.value;
    }
    saveCellValue() {
        if (!this._focusedCell) {
            return;
        }
        const rowIndex = this._focusedCell.row;
        const cellIndex = this._focusedCell.cell;
        const previousValue = this.getCellValue(rowIndex, cellIndex);
        if (previousValue !== this._newCellValue) {
            this.context.updateAllRows(this.rows.map((row, rowIdx) => {
                if (rowIdx !== rowIndex) {
                    return row;
                }
                return {
                    ...row,
                    cells: row.cells.map((cell, cellIdx) => {
                        if (cellIdx !== cellIndex || !isTextCell(cell)) {
                            return cell;
                        }
                        return { ...cell, value: this._newCellValue };
                    }),
                };
            }));
            this.emit(IGDS_EVENTS.cellChange, {
                rowIndex,
                cellIndex,
                newValue: this._newCellValue,
            });
            if (this.header[cellIndex].sortingOrder) {
                this.changeSortingOrder(cellIndex, { reorder: true });
            }
        }
        this.cancelEditCell();
    }
    getCellValue(rowIndex, cellIndex) {
        if (rowIndex >= 0 &&
            rowIndex < this.rows.length &&
            cellIndex >= 0 &&
            cellIndex < this.rows[rowIndex].cells.length) {
            const cell = this.rows[rowIndex].cells[cellIndex];
            return isTextCell(cell) ? cell.value : undefined;
        }
        return undefined;
    }
    setFocusedCell(rowIndex, cellIndex) {
        this._focusedCell = { row: rowIndex, cell: cellIndex };
    }
    handleCellClick(rowIndex, cellIndex) {
        if (this.editable &&
            this._clickedCell &&
            this._clickedCell.row === rowIndex &&
            this._clickedCell.cell === cellIndex) {
            this.editCell();
        }
        this._clickedCell = { row: rowIndex, cell: cellIndex };
        this.emit(IGDS_EVENTS.cellClick, { rowIndex, cellIndex });
    }
    handleInputKeydown(event) {
        if (event.key === "Escape" /* IGDS_EVENT_KEYS.Escape */) {
            return;
        }
        if (event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */ &&
            (event.ctrlKey || event.shiftKey)) {
            this.saveCellValue();
        }
        event.stopPropagation();
    }
    isRelevantKey(key) {
        return ([
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
            "Enter" /* IGDS_EVENT_KEYS.Enter */,
            "Home" /* IGDS_EVENT_KEYS.Home */,
            "End" /* IGDS_EVENT_KEYS.End */,
            "Escape" /* IGDS_EVENT_KEYS.Escape */,
        ].includes(key) && this._focusedCell);
    }
    handleEnterDown(key) {
        if (key === "Enter" /* IGDS_EVENT_KEYS.Enter */) {
            this.editCell();
            if (this._focusedCell?.row !== undefined &&
                this._focusedCell?.cell !== undefined) {
                this.emit(IGDS_EVENTS.cellEnterPressed, {
                    rowIndex: this._focusedCell.row,
                    cellIndex: this._focusedCell.cell,
                });
            }
            return true;
        }
        return false;
    }
    handleEscapeDown(key) {
        if (key === "Escape" /* IGDS_EVENT_KEYS.Escape */) {
            this.cancelEditCell();
            return true;
        }
        return false;
    }
    moveUp(event, previousRow) {
        if (this._focusedCell.row > 0) {
            event.preventDefault();
            return this._focusedCell.row - 1;
        }
        return previousRow;
    }
    moveDown(event, previousRow) {
        if (this._focusedCell.row + 1 < this.rows.length) {
            event.preventDefault();
            return this._focusedCell.row + 1;
        }
        return previousRow;
    }
    moveStart(previousCell) {
        if (this._focusedCell.row > 0) {
            return this._focusedCell.cell - 1;
        }
        return previousCell;
    }
    moveEnd(previousCell) {
        if (this._focusedCell.cell + 1 < this._maxTableSize) {
            return this._focusedCell.cell + 1;
        }
        return previousCell;
    }
    processArrowsKeyDown(event) {
        let newRow = this._focusedCell.row;
        let newCell = this._focusedCell.cell;
        const [ArrowStart, ArrowEnd] = getDirection(this) === 'rtl'
            ? ["ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */, "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */]
            : ["ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */, "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */];
        switch (event.key) {
            case "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */:
                newRow = this.moveUp(event, newRow);
                break;
            case "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */:
                newRow = this.moveDown(event, newRow);
                break;
            case ArrowStart:
                newCell = this.moveStart(newCell);
                break;
            case ArrowEnd:
                newCell = this.moveEnd(newCell);
                break;
            case "Home" /* IGDS_EVENT_KEYS.Home */:
                newCell = 0;
                event.preventDefault();
                break;
            case "End" /* IGDS_EVENT_KEYS.End */:
                newCell = this._maxTableSize - 1;
                event.preventDefault();
                break;
        }
        this.focusCellByAddress(newRow, newCell);
    }
    handleKeyDown(event) {
        if (!this.isRelevantKey(event.key))
            return;
        if (this.handleEnterDown(event.key))
            return;
        if (this.handleEscapeDown(event.key))
            return;
        this.processArrowsKeyDown(event);
    }
    focusCellByAddress(row, cell, setFocusOnInput) {
        if (!this.domRows ||
            row < 0 ||
            this.domRows.length <= row ||
            cell < 0 ||
            this._maxTableSize <= cell) {
            return;
        }
        const cells = this.domRows[row].querySelectorAll(`[data-cell]`);
        if (setFocusOnInput) {
            setTimeout(() => {
                const input = cells[cell]
                    .querySelector('igds-input')
                    ?.shadowRoot?.querySelector('textarea');
                input?.select();
                input?.focus();
            });
        }
        else {
            cells[cell].focus();
        }
    }
    handleClickLinkCell(event, option) {
        if (!option?.isEmitEvent) {
            return;
        }
        event.preventDefault();
        this.emit(IGDS_EVENTS.cellLinkClick, option.id ?? 'link id is not specified');
    }
    getTruncatedValue(value) {
        return when(this.truncated, () => html `
        <igds-tooltip
          content=${value}
          placement="bottom"
          class="table__cell-tooltip"
          disabled
          data-cell-text
        >
          <div class="table__cell-text">${value}</div>
        </igds-tooltip>
      `, () => value);
    }
    renderExpandableRow(row) {
        return when(row.slot !== undefined && row.expandable, () => html `
        <tr class="table__row">
          <td
            class="table__cell table__cell--expandable"
            style=${styleMap({
            gridColumnEnd: this._maxTableSize +
                (this.selectable ? 1 : 0) +
                2 +
                (this.actions !== undefined ? 1 : 0),
        })}
            colspan=${this._maxTableSize +
            (this.selectable ? 1 : 0) +
            1 +
            (this.actions !== undefined ? 1 : 0)}
          >
            <igds-animate-height
              ?expand=${this._expandedRowIds.includes(row.id)}
            >
              <div
                class="table__expanded-slot-box"
                data-clone-id="${row.id}"
              ></div>
            </igds-animate-height>
          </td>
        </tr>
      `);
    }
    renderExpandAllCellControl() {
        return when(this._hasExpandableRow, () => html `
        <th class="table__cell table__cell--header table__cell--has-control">
          <button
            type="button"
            class="table__header-control"
            @click=${this.handleExpandAll}
          >
            ${this._expandedRowIds.length > 0
            ? 'Expand all rows'
            : 'Collapse all rows'}
          </button>
        </th>
      `);
    }
    renderExpandCellControl(row) {
        return when(this._hasExpandableRow, () => html `
        <td class="table__cell table__cell--has-control">
          ${when(row.slot !== undefined && row.expandable, () => html `
              <button
                class="table__button"
                @click=${() => this.toggleRowSlot(row.id)}
              >
                <igds-icon
                  node=${chevronDown}
                  class=${classMap({
            'table__expand-icon': true,
            'table__expand-icon--rotated': this._expandedRowIds.includes(row.id),
        })}
                ></igds-icon>
              </button>
            `)}
        </td>
      `);
    }
    renderSelectAllCellControl() {
        return when(this.selectable, () => html `
        <th class="table__cell table__cell--header table__cell--has-control">
          <button
            type="button"
            class="table__header-control"
            @click=${this.handleSelectAll}
          >
            ${this.selectedRows.length > 0 ? 'Clear selection' : 'Select all'}
          </button>
        </th>
      `);
    }
    renderSelectCellControl(row) {
        return when(this.selectable, () => html `
        <td class="table__cell table__cell--has-control">
          <igds-checkbox
            @igds-change=${(e) => this.handleSelect(e, row.id)}
            ?checked=${this.selectedRows.includes(row.id)}
            aria-label="Select row"
          ></igds-checkbox>
        </td>
      `);
    }
    getDataColumnTracks() {
        if (!this.header.length) {
            return `repeat(${this._maxTableSize}, minmax(min-content, auto))`;
        }
        const tracks = this.header.map((col) => {
            if (col.width) {
                return col.width;
            }
            const min = col.minWidth ?? 'min-content';
            const max = col.maxWidth ?? 'auto';
            return `minmax(${min}, ${max})`;
        });
        const extra = this._maxTableSize - this.header.length;
        const padding = Array(extra > 0 ? extra : 0).fill('minmax(min-content, auto)');
        return [...tracks, ...padding].join(' ');
    }
    renderPlaceholderCellControl() {
        return when(this.droppable, () => html `
        <th
          class="table__cell table__cell--header table__cell--has-control"
        ></th>
      `);
    }
    renderHeaderCell(column, index) {
        if (!column.sortable && !column.tooltip) {
            return html `
        <th
          class="table__cell table__cell--header ${classMap({
                'table__cell--truncated': Boolean(this.truncated),
            })}"
        >
          ${this.getTruncatedValue(column.name)}
        </th>
      `;
        }
        return html `
      <th
        class="table__cell table__cell--header table__cell--has-sorting-control"
      >
        <div class="table__column-controls">
          ${column.name}
          <section class="table__control-box">
            ${when(column.sortable, () => html `
                <button
                  type="button"
                  class="table__sorting-control"
                  @click=${() => this.changeSortingOrder(index)}
                >
                  ${choose(column.sortingOrder, [
            [
                undefined,
                () => html `<igds-icon node=${sortDefault}></igds-icon>`,
            ],
            [
                'asc',
                () => html `<igds-icon node=${sortDown}></igds-icon>`,
            ],
            [
                'desc',
                () => html `<igds-icon node=${sortUp}></igds-icon>`,
            ],
        ])}
                </button>
              `)}
            ${when(column.tooltip, () => html `
                <igds-tooltip
                  content=${column.tooltip ?? ''}
                  placement="bottom"
                  class="table__tooltip"
                >
                  <igds-icon
                    node=${helpOutlined}
                    class="table__tooltip-icon"
                    tabindex="0"
                  >
                  </igds-icon>
                </igds-tooltip>
              `)}
          </section>
        </div>
      </th>
    `;
    }
    renderTableHeader() {
        return html `
      <thead class="table__head-box">
        <tr class="table__row">
          ${this.renderExpandAllCellControl()}
          ${this.renderSelectAllCellControl()}
          ${this.renderPlaceholderCellControl()}
          ${repeat(this.header, ({ id }) => id, (column, index) => this.renderHeaderCell(column, index))}
          ${when(this.actions !== undefined, () => html `
              <th
                class="table__cell table__cell--header table__cell--has-control"
              ></th>
            `)}
          ${when(this.header.length < this._maxTableSize, () => repeat(Array.from({ length: this._maxTableSize - this.header.length }), () => html `<th class="table__cell table__cell--header"></th>`))}
        </tr>
      </thead>
    `;
    }
    renderActionCellControl(row, rowIndex) {
        return when(this.actions !== undefined, () => html `
        <td class="table__cell table__cell--has-control">
          <igds-menu position="bottom-end" class="table__menu">
            <button class="table__button" slot="trigger">
              <igds-icon
                node=${moreVertical}
                class="table__expand-icon"
              ></igds-icon>
            </button>
            ${repeat(this.actions, (action) => action, (action) => html `
                <igds-menu-item
                  slot="menu-item"
                  label=${action}
                  @igds-click=${() => this.handleAction(action, row.id, rowIndex)}
                ></igds-menu-item>
              `)}
          </igds-menu>
        </td>
      `);
    }
    renderCellsToCompleteTableRow() {
        // renderRowCells handles all header columns, so we only need to fill
        // cells beyond header.length if _maxTableSize is larger
        return when(this.header.length < this._maxTableSize, () => repeat(Array.from({
            length: this._maxTableSize - this.header.length,
        }), () => html ` <td class="table__cell" data-cell></td> `));
    }
    renderDragAndDropCellControl() {
        return when(this.droppable, () => html `
        <td class="table__cell table__cell--has-control">
          <button
            type="button"
            class="table__dnd-button"
            aria-label="גרור כדי לסדר מחדש את הרשימה"
          >
            <igds-icon node=${menu} class="list__dnd-icon"></igds-icon>
          </button>
        </td>
      `);
    }
    renderLinkCell(cell) {
        return when(cell.disabled, () => html `
        <div
          class="table__cell-link table__cell-link--disabled"
          title=${cell.title}
        >
          ${cell.label}
        </div>
      `, () => html `
        <a
          href=${cell.url}
          title=${cell.title}
          target=${ifDefined(cell.target ? cell.target : undefined)}
          class="table__cell-link"
          @click=${(event) => this.handleClickLinkCell(event, {
            isEmitEvent: cell.isEmitEvent,
            id: cell.id,
        })}
          >${cell.label}</a
        >
      `);
    }
    renderTextCell(cell, cellIndex, rowIndex) {
        return when(this.editableCell?.row === rowIndex &&
            this.editableCell?.cell === cellIndex, () => html `
        <igds-input
          type="textarea"
          rows="1"
          autoheight
          default-value=${cell.value}
          placeholder="נתוני תא"
          icon=${checkmark}
          icon-position="right"
          @igds-input=${this.handleEditCellInput}
          @igds-input-icon-click=${this.saveCellValue}
          @click=${(e) => e.stopPropagation()}
          @keydown=${this.handleInputKeydown}
        ></igds-input>
      `, () => this.getTruncatedValue(cell.value));
    }
    renderTableCell(cell, cellIndex, rowIndex) {
        const isContainBadge = isBadgeCell(cell);
        return html `
      <td
        class=${classMap({
            table__cell: true,
            'table__cell--editable': Boolean(this.editable) || Boolean(this.focusable),
            'table__cell--show-input': this.editableCell?.row === rowIndex &&
                this.editableCell?.cell === cellIndex,
            'table__cell--truncated': Boolean(this.truncated),
            'table__cell--contain-badge': isContainBadge,
        })}
        tabindex=${ifDefined(this.editable || this.focusable ? 0 : undefined)}
        @focus=${() => this.setFocusedCell(rowIndex, cellIndex)}
        @click=${() => this.handleCellClick(rowIndex, cellIndex)}
        data-cell
      >
        ${when(isTextCell(cell), () => this.renderTextCell(cell, cellIndex, rowIndex))}
        ${when(isContainBadge, () => html `
            <igds-badge
              label=${cell.label}
              variant=${cell.variant}
            ></igds-badge>
          `)}
        ${when(isLinkCell(cell), () => this.renderLinkCell(cell))}
      </td>
    `;
    }
    renderSlottedCell(row, slottedCellIndex) {
        return html `
      <td
        class=${classMap({
            table__cell: true,
            'table__cell--slotted': true,
        })}
        data-cell
        data-row-id="${row.id}"
        data-slotted-index="${slottedCellIndex}"
      ></td>
    `;
    }
    renderRowCells(row, rowIndex) {
        let regularCellIndex = 0;
        let slottedCellIndex = 0;
        return this.header.map((column, columnIndex) => {
            if (column.slotted) {
                const currentSlottedIndex = slottedCellIndex;
                slottedCellIndex++;
                return this.renderSlottedCell(row, currentSlottedIndex);
            }
            const cell = row.cells[regularCellIndex];
            regularCellIndex++;
            if (cell) {
                return this.renderTableCell(cell, columnIndex, rowIndex);
            }
            // Empty cell for missing data
            return html `<td class="table__cell" data-cell></td>`;
        });
    }
    render() {
        return html `
      <div
        class=${classMap({
            table__box: true,
            'table__box--truncate': Boolean(this.truncated),
        })}
        part="scrollable"
      >
        <table
          class=${classMap({
            table: true,
            'table--droppable': Boolean(this.droppable),
        })}
          style=${styleMap({
            gridTemplateColumns: `
              ${this._hasExpandableRow ? '60px' : ''}
              ${this.selectable ? '60px' : ''}
              ${this.droppable ? '60px' : ''}
              ${this.getDataColumnTracks()}
              ${this.actions !== undefined ? '48px' : ''}
            `,
        })}
        >
          ${this.renderTableHeader()}
          <tbody class="table__body-box" @keydown=${this.handleKeyDown}>
            ${repeat(this.rows, ({ id }) => id, (row, rowIndex) => html `
                <tr class="table__row" data-row>
                  ${this.renderExpandCellControl(row)}
                  ${this.renderSelectCellControl(row)}
                  ${this.renderDragAndDropCellControl()}
                  ${this.renderRowCells(row, rowIndex)}
                  ${this.renderActionCellControl(row, rowIndex)}
                  ${this.renderCellsToCompleteTableRow()}
                </tr>
                ${this.renderExpandableRow(row)}
              `)}
          </tbody>
        </table>
        <slot></slot>
      </div>
    `;
    }
};
Table.styles = unsafeCSS(styles);
__decorate([
    property({ type: Boolean })
], Table.prototype, "selectable", void 0);
__decorate([
    property({ type: Boolean })
], Table.prototype, "editable", void 0);
__decorate([
    property({ type: Boolean })
], Table.prototype, "focusable", void 0);
__decorate([
    property({ type: Boolean })
], Table.prototype, "truncated", void 0);
__decorate([
    property({ type: Array })
], Table.prototype, "actions", void 0);
__decorate([
    property({ type: Boolean })
], Table.prototype, "droppable", void 0);
__decorate([
    provide({ context: igdsTableContext })
], Table.prototype, "context", void 0);
__decorate([
    state()
], Table.prototype, "header", void 0);
__decorate([
    state()
], Table.prototype, "rows", void 0);
__decorate([
    state()
], Table.prototype, "selectedRows", void 0);
__decorate([
    state()
], Table.prototype, "_expandedRowIds", void 0);
__decorate([
    state()
], Table.prototype, "editableCell", void 0);
__decorate([
    query('.table__body-box')
], Table.prototype, "tbody", void 0);
__decorate([
    queryAll('[data-row]')
], Table.prototype, "domRows", void 0);
__decorate([
    queryAll('[data-cell-text]')
], Table.prototype, "cellText", void 0);
__decorate([
    queryAll('[data-clone-id]')
], Table.prototype, "boxes", void 0);
__decorate([
    queryAll('[data-cell]')
], Table.prototype, "cells", void 0);
Table = __decorate([
    customElement(IGDS_TAGS.table)
], Table);
export { Table };
