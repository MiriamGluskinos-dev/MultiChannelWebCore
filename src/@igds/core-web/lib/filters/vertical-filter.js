var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { Checkbox } from '../checkbox';
import { IGDSElement } from '../abstractions';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS } from '../button';
import { backspace, chevronUp, chevronDown } from '@igds/icons';
import styles from './vertical-filter.scss?inline';
let VerticalFilter = class VerticalFilter extends IGDSElement {
    constructor() {
        super(...arguments);
        this._filters = [];
        this.clearLabel = 'ניקוי סינון';
        this.formValues = {};
    }
    set filters(value) {
        if (!value) {
            this._filters = [];
            return;
        }
        this._filters = value.map((filter) => ({
            ...filter,
            subLevel: filter.subLevel?.length ? filter.subLevel : [],
        }));
    }
    get filters() {
        return this._filters;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.setCheckboxValues();
    }
    setCheckboxValues() {
        if (!this.filters.length)
            return;
        this.filters.forEach((filter) => {
            if (filter.value) {
                this.setCheckboxValue(filter);
            }
            if (filter.subLevel) {
                filter.subLevel.forEach((subLevelItem) => {
                    if (subLevelItem.value) {
                        this.setCheckboxValue(subLevelItem);
                    }
                });
            }
        });
    }
    setCheckboxValue(filter) {
        const key = filter.id ? `checkbox-${filter.id}` : 'checkbox';
        if (filter.value) {
            this.formValues = {
                ...this.formValues,
                [key]: filter.value,
            };
        }
    }
    render() {
        return html `
      <aside>${this.renderActionButtons()} ${this.renderFilters()}</aside>
    `;
    }
    renderActionButtons() {
        return html `
      <header class="filter__action-buttons">
        <igds-button
          variant=${IGDS_BUTTON_VARIANTS.link}
          @click=${this.onClear}
        >
          ${this.clearLabel}
          <igds-icon slot="icon" node=${backspace}> </igds-icon>
        </igds-button>
        ${when(this.applyLabel, () => html `
            <igds-button
              type=${IGDS_BUTTON_TYPES.submit}
              @click=${this.onApply}
              ?disabled=${this.disableSubmit}
            >
              ${this.applyLabel}
            </igds-button>
          `)}
      </header>
    `;
    }
    onClear() {
        if (!this.checkboxElements.length)
            return;
        this.checkboxElements.forEach((checkboxElement) => {
            if (checkboxElement instanceof Checkbox && checkboxElement.checked) {
                checkboxElement.checked = false;
            }
        });
        this.formValues = {};
        this.emit(IGDS_EVENTS.clear, this.formValues);
    }
    onApply(event) {
        event.preventDefault();
        this.emit(IGDS_EVENTS.apply, this.formValues);
    }
    renderFilters() {
        return html `
      <form>
        ${repeat(this.filters, ({ id }) => id, (filterItem, index) => html `
            <div
              class="filter__first-level-box"
              aria-expanded=${ifDefined(filterItem.expanded)}
              aria-controls=${ifDefined(filterItem.subLevel?.length ? `content-${index + 1}` : undefined)}
              @click=${(event) => this.onExpand(event, index)}
              @keydown=${() => { }}
            >
              ${when(filterItem.label || filterItem.value, () => html `
                  <igds-checkbox
                    ?checked=${filterItem.value}
                    label=${ifDefined(filterItem.label)}
                    class="filter__checkbox"
                    @igds-change=${(event) => this.handleCheckboxChange(event, filterItem)}
                  >
                  </igds-checkbox>
                `)}
              ${when(filterItem.subLevel?.length, () => html `
                  <igds-icon
                    node=${filterItem.expanded ? chevronUp : chevronDown}
                    tabindex="0"
                    role="button"
                    aria-label="Expand icon"
                    @keydown=${(event) => this.onExpandIconKeyDown(event, index)}
                    class="filter__expand-icon"
                  >
                  </igds-icon>
                `)}
              ${when(filterItem.count, () => html `
                  <span class="filter__count">
                    ${filterItem.count?.toString().padStart(3, '0')}
                  </span>
                `)}
            </div>
            <igds-divider></igds-divider>
            ${when(filterItem.subLevel?.length && filterItem.expanded, () => this.renderSecondLevel(filterItem.subLevel ?? [], index))}
          `)}
      </form>
    `;
    }
    onExpandIconKeyDown(event, index) {
        if (["Enter" /* IGDS_EVENT_KEYS.Enter */, " " /* IGDS_EVENT_KEYS.Space */].includes(event.key)) {
            this.onExpand(event, index);
        }
    }
    renderSecondLevel(subLevel, index) {
        return html `
      <fieldset id=${`content-${index + 1}`} class="filter__fieldset">
        ${repeat(subLevel, (subLevelItem) => subLevelItem.id, (subLevelItem) => html `
            <div
              class=${classMap({
            'filter__second-level-box': true,
            'filter__second-level-box--ltr': this.dir === 'ltr',
        })}
            >
              <igds-checkbox
                ?checked=${subLevelItem.value}
                label=${ifDefined(subLevelItem.label)}
                class="filter__checkbox"
                @igds-change=${(event) => this.handleCheckboxChange(event, subLevelItem, true)}
              >
              </igds-checkbox>
              <span class="filter__count"> ${subLevelItem.count} </span>
            </div>
          `)}
      </fieldset>
    `;
    }
    handleCheckboxChange(event, filter, isSubItem) {
        event.stopPropagation();
        const key = filter.id ? `checkbox-${filter.id}` : 'checkbox';
        this.formValues = {
            ...this.formValues,
            [key]: event.detail.checked,
        };
        filter.value = !filter.value;
        if (isSubItem) {
            this.filters.forEach((filterItem) => {
                if (filterItem.subLevel?.length) {
                    filterItem.subLevel.forEach((subLevelItem) => {
                        if (subLevelItem.id === filter.id) {
                            subLevelItem.value = !subLevelItem.value;
                        }
                    });
                }
            });
        }
        else {
            this.filters.forEach((filterItem) => {
                if (filterItem.id === filter.id) {
                    filterItem.value = !filterItem.value;
                }
            });
        }
        this.emit(IGDS_EVENTS.filterChanged, this.formValues);
    }
    onExpand(event, index) {
        if (event.target instanceof Checkbox) {
            return;
        }
        this.filters[index].expanded = !this.filters[index].expanded;
        this.requestUpdate();
    }
};
VerticalFilter.styles = [unsafeCSS(styles)];
__decorate([
    property({ type: Array })
], VerticalFilter.prototype, "filters", null);
__decorate([
    property({ type: String, attribute: 'clear-label' })
], VerticalFilter.prototype, "clearLabel", void 0);
__decorate([
    property({ type: String, attribute: 'apply-label' })
], VerticalFilter.prototype, "applyLabel", void 0);
__decorate([
    property({ type: Boolean, attribute: 'disable-submit' })
], VerticalFilter.prototype, "disableSubmit", void 0);
__decorate([
    queryAll('.filter__checkbox')
], VerticalFilter.prototype, "checkboxElements", void 0);
__decorate([
    state()
], VerticalFilter.prototype, "formValues", void 0);
VerticalFilter = __decorate([
    customElement(IGDS_TAGS.verticalFilter)
], VerticalFilter);
export { VerticalFilter };
