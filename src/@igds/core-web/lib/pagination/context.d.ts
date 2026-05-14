import { ItemDetails } from './types/item-details';
export declare class PaginationContext {
    private _paginationItems;
    onChangePagination?: () => void;
    get paginationItems(): ItemDetails[];
    registerItem(currentHref: string): void;
    unregisterItem(currentHref: string): void;
}
export declare const paginationContext: {
    __context__: PaginationContext;
};
