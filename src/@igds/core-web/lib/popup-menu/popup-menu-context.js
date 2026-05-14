import { createContext } from '@lit/context';
export class IgdsPopupMenuContext {
    constructor() {
        this.itemMap = new Map();
        this.eventEmitters = new Map();
        this.onChange = undefined;
    }
    getItems() {
        return Array.from(this.itemMap.values());
    }
    updateItem(id, itemDetails) {
        this.itemMap.set(id, itemDetails);
        this.updateContext();
    }
    deleteItem(id) {
        this.itemMap.delete(id);
        this.updateContext();
    }
    updateContext() {
        if (this.onChange !== undefined) {
            this.onChange();
        }
    }
    emit(id) {
        const emitter = Array.from(this.itemMap.entries()).find(([_, value]) => value.id === id);
        if (emitter) {
            const [key, item] = emitter;
            this.eventEmitters.get(key)?.(item);
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
}
export const igdsPopupMenuContext = createContext(Symbol('igds-popup-menu'));
