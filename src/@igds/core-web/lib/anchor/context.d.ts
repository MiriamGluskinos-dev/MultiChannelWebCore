type AnchorData = {
    id?: string;
    title?: string;
    href: string;
    active?: boolean;
};
export declare class IgdsAnchorContext {
    private _anchors;
    onChangeAnchors?: () => void;
    getAnchors(): AnchorData[];
    registerAnchor(id: string, { title, href, active }: AnchorData): string;
    removeAnchor(id: string): void;
    updateContext(part: 'anchors'): void;
}
export declare const igdsAnchorContext: {
    __context__: IgdsAnchorContext;
};
export {};
