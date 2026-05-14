import { PropertyValues } from 'lit';
import { AngularFormElement } from '../abstractions';
import { IGDS_CHECKBOX_VARIANTS } from './constants';
import '../icon/icon';
import '../error-box/default-error-box';
declare class Checkbox extends AngularFormElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private _internals;
    constructor();
    componentId: string;
    disabled: boolean;
    required: boolean;
    form?: string;
    defaultValue?: string;
    helpText?: string;
    helpIcon: string;
    invalid: boolean;
    indeterminate: boolean;
    name?: string;
    label: string | null;
    error?: string;
    private readonly input;
    private readonly textInput;
    private readonly inputContainer;
    onChange?: ((event: Event, value?: string | null) => void) | null;
    variant: `${IGDS_CHECKBOX_VARIANTS}`;
    imageSrc?: string;
    imageAlt?: string;
    description?: string;
    get validity(): ValidityState;
    checkValidity(): boolean;
    reportValidity(): boolean;
    private applyInternalInputValidityOnComponent;
    private justifyInputPosition;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit").TemplateResult<1>;
    onInputChange(event: Event): void;
    onInput(event: Event): void;
    private onChangeHandler;
    setFormValue(checked: boolean, value: string): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    private getCheckboxContainer;
    private getLabel;
    getHelpContainer(): import("lit").TemplateResult<1>;
    getHelpIcon(): import("lit").TemplateResult<1>;
    getHelpText(): import("lit").TemplateResult<1>;
    getError(): import("lit").TemplateResult<1>;
}
export { Checkbox };
declare global {
    interface HTMLElementTagNameMap {
        'igds-checkbox': Checkbox;
    }
}
