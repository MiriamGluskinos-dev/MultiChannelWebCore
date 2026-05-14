export declare class IgdsCarouselContext {
    private _carouselItems;
    private subscribers;
    get carouselItems(): HTMLElement[];
    addCarouselItem(item: HTMLElement): void;
    removeCarouselItem(item: HTMLElement): void;
    subscribe(callback: () => void): () => boolean;
    notifySubscribers(): void;
}
export declare const igdsCarouselContext: {
    __context__: IgdsCarouselContext;
};
