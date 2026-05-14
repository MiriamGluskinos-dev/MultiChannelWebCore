import { LitElement, PropertyValues } from 'lit';
declare class Icon extends LitElement {
    static styles: import("lit").CSSResult;
    private _iconSize;
    name?: string;
    node: string;
    color?: string;
    accessibleName?: string;
    set size(value: number | string | undefined);
    get size(): number | string | undefined;
    getIconSizeInPixels(size: number | string | undefined): number;
    protected updated(_changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
export { Icon };
declare global {
    interface HTMLElementTagNameMap {
        'igds-icon': Icon;
    }
}
