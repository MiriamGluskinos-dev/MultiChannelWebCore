import { MenuItem } from './types/menu-item';
export declare class IgdsPopupMenuContext {
    private itemMap;
    private eventEmitters;
    onChange: (() => void) | undefined;
    getItems(): MenuItem[];
    updateItem(id: string, itemDetails: MenuItem): void;
    deleteItem(id: string): void;
    updateContext(): void;
    emit(id: string): void;
    subscribe(id: string, subscriber: (item: MenuItem) => void): void;
    unsubscribe(id: string): void;
    updateLabel(id: string, label: string): void;
}
export declare const igdsPopupMenuContext: {
    __context__: IgdsPopupMenuContext;
};
