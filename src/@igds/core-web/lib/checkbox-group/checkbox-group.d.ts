import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { Checkbox } from '../checkbox';
declare class CheckboxGroup extends IGDSElement {
    static styles: import("lit").CSSResult;
    label?: string;
    form?: string;
    disabled: boolean;
    required: boolean;
    invalid: boolean;
    error?: string;
    helpIcon: string;
    helpText?: string;
    orientation: 'horizontal' | 'vertical';
    onGroupChange?: ((event: string[]) => void) | null;
    checkboxStates: boolean[];
    firstUpdated(): void;
    addChangeEventListenerForCheckboxes(): void;
    private onCheckboxChanged;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    removeChangeEventListenerForCheckboxes(): void;
    getAllCheckboxes(): Checkbox[];
    private disableChildCheckboxes;
    private markChildCheckboxesAsInvalid;
    getLabel(): import("lit").TemplateResult<1>;
    getHelpIcon(): import("lit").TemplateResult<1>;
    getHelpText(): import("lit").TemplateResult<1>;
    getHelpContainer(): import("lit").TemplateResult<1>;
    getError(): import("lit").TemplateResult<1>;
    isAllCheckboxesChecked(): boolean;
    getBottomBox(): import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
export { CheckboxGroup };
declare global {
    interface HTMLElementTagNameMap {
        'igds-checkbox-group': CheckboxGroup;
    }
}
