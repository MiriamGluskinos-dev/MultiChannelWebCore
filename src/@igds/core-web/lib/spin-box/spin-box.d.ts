import { AngularFormElement } from '../abstractions';
import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDS_SPIN_BOX_SIZES } from './constants';
declare class SpinBox extends AngularFormElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    private _internals;
    componentId: string;
    size: `${IGDS_SPIN_BOX_SIZES}`;
    label?: string;
    name?: string;
    form?: string;
    defaultValue?: string;
    disabled: boolean;
    required: boolean;
    min: number;
    max: number;
    helpText?: string;
    helpIcon: string;
    tooltip?: string;
    tooltipQuestion?: string;
    tooltipIcon: boolean;
    invalid: boolean;
    error?: string;
    autoFocus: boolean;
    onChange: ((event: Event) => void) | null;
    inputElement: HTMLInputElement;
    constructor();
    protected firstUpdated(_changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
    getTooltipIcon(): import("lit").TemplateResult<1>;
    getTooltipQuestion(): import("lit").TemplateResult<1>;
    isAddButtonDisabled(): boolean;
    onInputChange(event: Event): void;
    onInput(event: Event): void;
    onInputFocus(event: Event): void;
    onInputBlur(event: Event): void;
    isSubtractButtonDisabled(): boolean;
    getError(): import("lit").TemplateResult<1>;
    getHelpBox(): import("lit").TemplateResult<1>;
    getHelpIcon(): import("lit").TemplateResult<1>;
    getHelpText(): import("lit").TemplateResult<1>;
    onAdd: () => void;
    onSubtract: () => void;
}
export { SpinBox };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.spinBox]: SpinBox;
    }
}
