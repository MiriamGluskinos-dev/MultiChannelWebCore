import { createContext } from '@lit/context';
export class IgdsCarouselContext {
    constructor() {
        this._carouselItems = [];
        this.subscribers = new Set();
    }
    get carouselItems() {
        return this._carouselItems;
    }
    addCarouselItem(item) {
        this._carouselItems = [...this._carouselItems, item];
        this.notifySubscribers();
    }
    removeCarouselItem(item) {
        this._carouselItems = this._carouselItems.filter((el) => el !== item);
        this.notifySubscribers();
    }
    subscribe(callback) {
        this.subscribers.add(callback);
        return () => this.subscribers.delete(callback);
    }
    notifySubscribers() {
        this.subscribers.forEach((callback) => callback());
    }
}
export const igdsCarouselContext = createContext(Symbol('igds-carousel'));
