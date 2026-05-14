import { PropertyValues } from 'lit';
import { IGDS_RADIO_VARIANTS } from './constants';
import '../icon/icon';
import '../error-box/default-error-box';
import { IGDSElement } from '../abstractions';
declare class RadioButton extends IGDSElement {
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private _internals;
    value: string;
    checked: boolean;
    componentId: string;
    disabled: boolean;
    required: boolean;
    form?: string;
    helpText?: string;
    helpIcon: string;
    invalid: boolean;
    name?: string;
    label?: string;
    variant: `${IGDS_RADIO_VARIANTS}`;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    error?: string;
    textCardTitle?: string;
    private readonly input;
    private readonly optionInput;
    private readonly inputContainer;
    onChange?: ((event: Event, value: string | null) => void) | null;
    get validity(): ValidityState;
    checkValidity(): boolean;
    reportValidity(): boolean;
    constructor();
    private justifyRadioInputPosition;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private applyInternalInputValidityOnComponent;
    render(): import("lit").TemplateResult<1>;
    onInputChange(event: Event): void;
    onInput(event: Event): void;
    onChangeHandler(event: Event): void;
    setFormValue(checked: boolean, value: string): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    private getRadioContainer;
    private getLabel;
    private getHelpContainer;
    private getHelpIcon;
    private getHelpText;
    private getError;
}
export { RadioButton };
declare global {
    interface HTMLElementTagNameMap {
        'igds-radio': RadioButton;
    }
}
