var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import { html, unsafeCSS } from 'lit';
import { IGDSElement } from '../abstractions';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { Checkbox } from '../checkbox';
import { Dropdown } from '../dropdown';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_FILTER_TYPE } from './constants';
import { IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS } from '../button';
import { backspace } from '@igds/icons';
import styles from './horizontal-filter.scss?inline';
let HorizontalFilter = class HorizontalFilter extends IGDSElement {
    constructor() {
        super();
        this.filters = [];
        this.clearLabel = 'ניקוי סינון';
        this.dir = 'rtl';
        this.formValues = {};
        this.onApply = this.onApply.bind(this);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.setCheckboxValues();
    }
    setCheckboxValues() {
        const checkboxFilters = this.checkboxFilters;
        if (!checkboxFilters)
            return;
        const checkboxFilterItems = checkboxFilters.items;
        checkboxFilterItems.forEach((checkboxFilterItem) => {
            if (checkboxFilterItem.value) {
                const key = checkboxFilterItem.id
                    ? `${IGDS_FILTER_TYPE.checkbox}-${checkboxFilterItem.id}`
                    : IGDS_FILTER_TYPE.checkbox;
                this.formValues = {
                    ...this.formValues,
                    [key]: checkboxFilterItem.value,
                };
            }
        });
    }
    render() {
        return html `
      <form class="filter" .onsubmit=${this.onApply}>
        ${this.renderDropdownFilters()} ${this.renderCheckboxFilters()}
        ${this.renderActionButtons()}
      </form>
    `;
    }
    onApply(event) {
        event.preventDefault();
        this.emit(IGDS_EVENTS.apply, this.formValues);
    }
    get dropdownFilters() {
        return this.filters.find((filter) => filter.type === `${IGDS_FILTER_TYPE.dropdown}`);
    }
    renderDropdownFilters() {
        const dropdownFilters = this.dropdownFilters;
        const dropdownFilterItems = dropdownFilters ? dropdownFilters.items : [];
        return html `
      <div
        class=${classMap({
            'filter__dropdowns-group': true,
        })}
      >
        ${repeat(dropdownFilterItems, ({ id }) => id, ({ id, label, options, placeholder }) => html `
            <igds-dropdown
              filterable
              dir=${ifDefined(this.dir)}
              exportparts="scrollable"
              class=${classMap({
            filter__dropdown: true,
        })}
              label=${ifDefined(label)}
              placeholder=${ifDefined(placeholder)}
              .options=${options?.length ? options : []}
              @igds-change=${(event) => this.handleDropdownChange(event, id)}
              @igds-clear=${() => this.handleDropdownClear(id)}
            >
            </igds-dropdown>
          `)}
      </div>
    `;
    }
    handleDropdownChange(event, id) {
        const key = id
            ? `${IGDS_FILTER_TYPE.dropdown}-${id}`
            : IGDS_FILTER_TYPE.dropdown;
        this.formValues = {
            ...this.formValues,
            [key]: event.detail.value,
        };
        this.emit(IGDS_EVENTS.filterChanged, this.formValues);
    }
    handleDropdownClear(id) {
        const key = id
            ? `${IGDS_FILTER_TYPE.dropdown}-${id}`
            : IGDS_FILTER_TYPE.dropdown;
        if (this.formValues[key]) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [key]: _, ...newFormValues } = this.formValues;
            this.formValues = newFormValues;
        }
        this.emit(IGDS_EVENTS.filterChanged, this.formValues);
    }
    get checkboxFilters() {
        return this.filters.find((filter) => filter.type === `${IGDS_FILTER_TYPE.checkbox}`);
    }
    renderCheckboxFilters() {
        const checkboxFilters = this.checkboxFilters;
        const checkboxFilterItems = checkboxFilters ? checkboxFilters.items : [];
        return html `
      <div class="filter__checkboxes-group">
        <igds-checkbox-group orientation="horizontal">
          ${repeat(checkboxFilterItems, ({ id }) => id, ({ id, label, value }) => html `
              <igds-checkbox
                id="filter-checkbox"
                label=${ifDefined(label)}
                ?checked=${Boolean(value)}
                @igds-change=${(event) => this.handleCheckboxChange(event, id)}
              >
              </igds-checkbox>
            `)}
        </igds-checkbox-group>
      </div>
    `;
    }
    handleCheckboxChange(event, id) {
        const key = id
            ? `${IGDS_FILTER_TYPE.checkbox}-${id}`
            : IGDS_FILTER_TYPE.checkbox;
        this.formValues = {
            ...this.formValues,
            [key]: event.detail.checked,
        };
        this.emit(IGDS_EVENTS.filterChanged, this.formValues);
    }
    renderActionButtons() {
        return html `
      <div class="filter__action-buttons">
        <igds-button
          variant=${IGDS_BUTTON_VARIANTS.link}
          @click=${this.onClear}
        >
          ${this.clearLabel}
          <igds-icon slot="icon" node=${backspace}></igds-icon>
        </igds-button>
        ${when(this.applyLabel, () => html `
            <igds-button
              type=${IGDS_BUTTON_TYPES.submit}
              ?disabled=${this.disableSubmit}
            >
              ${this.applyLabel}
            </igds-button>
          `)}
      </div>
    `;
    }
    onClear() {
        this.onDropdownsClear();
        this.onCheckboxesClear();
        this.formValues = {};
        this.emit(IGDS_EVENTS.clear, this.formValues);
        this.emit(IGDS_EVENTS.filterChanged, this.formValues);
    }
    onDropdownsClear() {
        if (!this.dropdownElements.length)
            return;
        this.dropdownElements.forEach((dropdownElement) => {
            if (dropdownElement instanceof Dropdown &&
                dropdownElement.selected.length &&
                dropdownElement.value) {
                dropdownElement.selected = [];
                dropdownElement.value = '';
                dropdownElement.valueIcon = null;
                dropdownElement.filterText = '';
            }
        });
    }
    onCheckboxesClear() {
        if (!this.checkboxElements.length)
            return;
        this.checkboxElements.forEach((checkboxElement) => {
            if (checkboxElement instanceof Checkbox && checkboxElement.checked) {
                checkboxElement.checked = false;
            }
        });
    }
};
HorizontalFilter.styles = [unsafeCSS(styles)];
__decorate([
    property({ type: Array })
], HorizontalFilter.prototype, "filters", void 0);
__decorate([
    property({ type: String, attribute: 'clear-label' })
], HorizontalFilter.prototype, "clearLabel", void 0);
__decorate([
    property({ type: String, attribute: 'apply-label' })
], HorizontalFilter.prototype, "applyLabel", void 0);
__decorate([
    property({ type: String })
], HorizontalFilter.prototype, "dir", void 0);
__decorate([
    property({ type: Boolean, attribute: 'disable-submit' })
], HorizontalFilter.prototype, "disableSubmit", void 0);
__decorate([
    state()
], HorizontalFilter.prototype, "formValues", void 0);
__decorate([
    queryAll('.filter__dropdown')
], HorizontalFilter.prototype, "dropdownElements", void 0);
__decorate([
    queryAll('#filter-checkbox')
], HorizontalFilter.prototype, "checkboxElements", void 0);
HorizontalFilter = __decorate([
    customElement(IGDS_TAGS.horizontalFilter)
], HorizontalFilter);
export { HorizontalFilter };
