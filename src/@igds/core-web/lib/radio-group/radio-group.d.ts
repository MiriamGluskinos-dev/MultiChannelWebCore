import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { RadioButton } from '../radio/radio';
declare class RadioGroup extends IGDSElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    label?: string;
    name?: string;
    form?: string;
    defaultValue: string;
    value: string | null;
    disabled: boolean;
    required: boolean;
    error?: string;
    helpIcon: string;
    helpText?: string;
    orientation: 'horizontal' | 'vertical';
    private _internals;
    constructor();
    protected firstUpdated(_changedProperties: PropertyValues): void;
    initializeRadios(): void;
    onRadioChange(event: Event): void;
    getChildRadios(): RadioButton[];
    private get isArrowKey();
    private shouldHandleArrowKey;
    private isNonRadioInputFocused;
    private getEnabledRadios;
    private getArrowIncrement;
    private getNextIndex;
    private focusAndCheckRadio;
    private moveSelectionByArrowKey;
    protected updated(changedProperties: PropertyValues): void;
    private setDefaultValue;
    private disableChildRadios;
    getLabel(): import("lit").TemplateResult<1>;
    getHelpIcon(): import("lit").TemplateResult<1>;
    getHelpText(): import("lit").TemplateResult<1>;
    getHelpContainer(): import("lit").TemplateResult<1>;
    getError(): import("lit").TemplateResult<1>;
    getBottomContainer(): import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
export { RadioGroup };
declare global {
    interface HTMLElementTagNameMap {
        'igds-radio-group': RadioGroup;
    }
}
