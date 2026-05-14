import { createContext } from '@lit/context';
import { IGDS_LIST_VARIANTS } from './constants';
import { isDataListItem } from './utils/isDataListItem';
import { generateId } from '../utils';
export class IgdsListContext {
    constructor() {
        this._listItems = [];
        this._listVariant = IGDS_LIST_VARIANTS.unordered;
        this.onChange = undefined;
    }
    getItems() {
        return this._listItems;
    }
    registerItem(item, itemId) {
        const id = itemId ?? generateId();
        this._listItems = [
            ...this._listItems,
            isDataListItem(item)
                ? {
                    id,
                    data: item,
                }
                : {
                    id,
                    htmlContent: item,
                },
        ];
        this.updateContext();
    }
    setVariant(listVariant) {
        this._listVariant = listVariant;
    }
    getVariant() {
        return this._listVariant;
    }
    updateContext() {
        if (this.onChange !== undefined) {
            this.onChange();
        }
    }
}
export const igdsListContext = createContext(Symbol('igds-list'));
