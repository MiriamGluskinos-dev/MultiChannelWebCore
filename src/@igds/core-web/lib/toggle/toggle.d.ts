import { AngularFormElement } from '../abstractions';
declare class Toggle extends AngularFormElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private _internals;
    constructor();
    componentId: string;
    labelTitle?: string;
    labelText?: string;
    name?: string;
    form?: string;
    defaultValue?: string;
    disabled: boolean;
    onChange?: ((event: Event) => void) | null;
    onChangeHandler(event: Event): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    private getLabel;
    render(): import("lit").TemplateResult<1>;
}
export { Toggle };
declare global {
    interface HTMLElementTagNameMap {
        'igds-toggle': Toggle;
    }
}
