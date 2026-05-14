import { createContext } from '@lit/context';
export class IgdsBreadcrumbsContext {
    constructor() {
        this.itemMap = new Map();
        this.eventEmitters = new Map();
        this.onChange = undefined;
    }
    getItems() {
        return Array.from(this.itemMap.entries()).map(([id, value]) => ({
            ...value,
            id,
        }));
    }
    updateItem(id, itemDetails) {
        this.itemMap.set(id, itemDetails);
        this.updateContext();
    }
    deleteItem(id) {
        this.itemMap.delete(id);
        this.updateContext();
    }
    emit(id) {
        const emitter = this.eventEmitters.get(id);
        const item = this.itemMap.get(id);
        if (emitter && item) {
            emitter(item);
        }
    }
    subscribe(id, subscriber) {
        this.eventEmitters.set(id, subscriber);
    }
    unsubscribe(id) {
        this.eventEmitters.delete(id);
    }
    updateLabel(id, label) {
        const oldItemDetails = this.itemMap.get(id);
        if (!oldItemDetails) {
            return;
        }
        this.itemMap.set(id, { ...oldItemDetails, label });
        this.updateContext();
    }
    updateContext() {
        if (this.onChange !== undefined) {
            this.onChange();
        }
    }
}
export const igdsBreadcrumbsContext = createContext(Symbol('igds-breadcrumbs'));
