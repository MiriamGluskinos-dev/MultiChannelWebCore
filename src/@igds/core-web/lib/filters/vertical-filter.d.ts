import { PropertyValues } from 'lit';
import { FilterVertical as Filter, VerticalFilterItem } from './filter';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
declare class VerticalFilter extends IGDSElement {
    static styles: import("lit").CSSResult[];
    set filters(value: Filter[]);
    get filters(): Filter[];
    private _filters;
    clearLabel: string;
    applyLabel: string;
    disableSubmit?: boolean;
    checkboxElements: Element[];
    formValues: Record<string, boolean>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    setCheckboxValues(): void;
    setCheckboxValue(filter: VerticalFilterItem): void;
    render(): import("lit").TemplateResult<1>;
    renderActionButtons(): import("lit").TemplateResult<1>;
    onClear(): void;
    onApply(event: SubmitEvent): void;
    renderFilters(): import("lit").TemplateResult<1>;
    onExpandIconKeyDown(event: KeyboardEvent, index: number): void;
    renderSecondLevel(subLevel: VerticalFilterItem[], index: number): import("lit").TemplateResult<1>;
    handleCheckboxChange(event: CustomEvent, filter: VerticalFilterItem, isSubItem?: boolean): void;
    onExpand(event: Event, index: number): void;
}
export { VerticalFilter };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.verticalFilter]: VerticalFilter;
    }
}
