import { BreadcrumbsItemDetails } from './types/breadcrumbs-item-details';
export declare class IgdsBreadcrumbsContext {
    private itemMap;
    private eventEmitters;
    onChange: (() => void) | undefined;
    getItems(): {
        id: string;
        href: string;
        label: string;
        rel?: string;
        target?: "_blank" | "_parent" | "_self" | "_top";
    }[];
    updateItem(id: string, itemDetails: BreadcrumbsItemDetails): void;
    deleteItem(id: string): void;
    emit(id: string): void;
    subscribe(id: string, subscriber: (item: BreadcrumbsItemDetails) => void): void;
    unsubscribe(id: string): void;
    updateLabel(id: string, label: string): void;
    updateContext(): void;
}
export declare const igdsBreadcrumbsContext: {
    __context__: IgdsBreadcrumbsContext;
};
