import { createContext } from '@lit/context';
export class PaginationContext {
    constructor() {
        this._paginationItems = [];
        this.onChangePagination = undefined;
    }
    get paginationItems() {
        return this._paginationItems;
    }
    registerItem(currentHref) {
        const existingIndex = this._paginationItems.findIndex(({ href }) => href === currentHref);
        if (existingIndex >= 0) {
            this._paginationItems = this._paginationItems.map((data, index) => {
                if (data.href === currentHref) {
                    return { pageNumber: index + 1, href: currentHref };
                }
                return data;
            });
        }
        else if (currentHref) {
            this._paginationItems = [
                ...this._paginationItems,
                { pageNumber: this._paginationItems.length + 1, href: currentHref },
            ];
        }
        if (this.onChangePagination) {
            this.onChangePagination();
        }
    }
    unregisterItem(currentHref) {
        this._paginationItems = this._paginationItems.filter(({ href }) => href !== currentHref);
    }
}
export const paginationContext = createContext(Symbol('pagination-context'));
