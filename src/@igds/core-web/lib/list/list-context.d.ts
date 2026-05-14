import { IGDS_LIST_VARIANTS } from './constants';
import { DataListItemDetails } from './types/data-list-item-details';
import { ListItemDetails } from './types/list-item-details';
export declare class IgdsListContext {
    private _listItems;
    private _listVariant;
    onChange: (() => void) | undefined;
    getItems(): ListItemDetails[];
    registerItem(item: HTMLElement[] | DataListItemDetails, itemId?: string): void;
    setVariant(listVariant: `${IGDS_LIST_VARIANTS}`): void;
    getVariant(): "data" | "ordered" | "unordered";
    updateContext(): void;
}
export declare const igdsListContext: {
    __context__: IgdsListContext;
};
