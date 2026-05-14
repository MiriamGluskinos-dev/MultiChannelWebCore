import { createContext } from '@lit/context';
import { generateId } from '../utils';
export class IgdsTableContext {
    constructor() {
        this._header = [];
        this._rows = [];
        this.onChangeHeader = undefined;
        this.onChangeRows = undefined;
    }
    getHeader() {
        return this._header;
    }
    setHeader(columns) {
        this._header = [...columns];
        this.updateContext('header');
    }
    removeHeader() {
        this._header = [];
        this.updateContext('header');
    }
    getRows() {
        return this._rows;
    }
    registerRow(id, { cells, slottedCells, selected, expanded, expandable }) {
        this._rows = [
            ...this._rows,
            {
                id,
                cells: cells.map((cell) => {
                    if (cell.id === undefined) {
                        return {
                            ...cell,
                            id: generateId(),
                        };
                    }
                    return cell;
                }),
                slottedCells,
                selected,
                expanded,
                expandable,
            },
        ];
        this.updateContext('rows');
        return id;
    }
    updateRow(id, { cells, slottedCells, selected, expanded, expandable }) {
        this._rows = this._rows.map((row) => row.id === id
            ? { ...row, cells, slottedCells, selected, expanded, expandable }
            : row);
        this.updateContext('rows');
    }
    updateAllRows(newRows) {
        this._rows = [...newRows];
        this.updateContext('rows');
    }
    updateRowSlot(id, slot) {
        this._rows = this._rows.map((row) => row.id === id ? { ...row, slot } : row);
        this.updateContext('rows');
    }
    removeRow(id) {
        this._rows = this._rows.filter((row) => row.id !== id);
        this.updateContext('rows');
    }
    updateContext(part) {
        if (part === 'header' && this.onChangeHeader) {
            this.onChangeHeader();
        }
        if (part === 'rows' && this.onChangeRows) {
            this.onChangeRows();
        }
    }
}
export const igdsTableContext = createContext(Symbol('igds-table'));
