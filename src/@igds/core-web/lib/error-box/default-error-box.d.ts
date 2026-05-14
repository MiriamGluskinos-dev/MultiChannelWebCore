import { LitElement, PropertyValues } from 'lit';
import '../icon/icon';
declare class DefaultErrorBox extends LitElement {
    static styles: import("lit").CSSResult;
    errormessage: string | null;
    message: HTMLSpanElement;
    isOverflowed?: boolean;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    private resizeHandler;
    checkOverflowing(): void;
    render(): import("lit").TemplateResult<1>;
}
export { DefaultErrorBox };
