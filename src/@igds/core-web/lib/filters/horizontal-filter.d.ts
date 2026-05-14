import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { FilterHorizontal as Filter } from './filter';
import { IGDS_TAGS } from '../constants';
declare class HorizontalFilter extends IGDSElement {
    constructor();
    static styles: import("lit").CSSResult[];
    filters: Filter[];
    clearLabel: string;
    applyLabel: string;
    dir: string;
    disableSubmit?: boolean;
    formValues: Record<string, string | boolean>;
    dropdownElements: Element[];
    checkboxElements: Element[];
    protected firstUpdated(_changedProperties: PropertyValues): void;
    setCheckboxValues(): void;
    render(): import("lit").TemplateResult<1>;
    onApply(event: SubmitEvent): void;
    get dropdownFilters(): Filter | undefined;
    renderDropdownFilters(): import("lit").TemplateResult<1>;
    handleDropdownChange(event: CustomEvent, id: string): void;
    handleDropdownClear(id: string): void;
    get checkboxFilters(): Filter | undefined;
    renderCheckboxFilters(): import("lit").TemplateResult<1>;
    handleCheckboxChange(event: CustomEvent, id: string): void;
    renderActionButtons(): import("lit").TemplateResult<1>;
    onClear(): void;
    onDropdownsClear(): void;
    onCheckboxesClear(): void;
}
export { HorizontalFilter };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.horizontalFilter]: HorizontalFilter;
    }
}
