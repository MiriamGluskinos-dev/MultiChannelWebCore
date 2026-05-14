var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { IGDSElement } from '../abstractions';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { Checkbox } from '../checkbox';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import styles from './checkbox-group.scss?inline';
let CheckboxGroup = class CheckboxGroup extends IGDSElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.required = false;
        this.invalid = false;
        this.orientation = 'vertical';
        this.onGroupChange = null;
        this.checkboxStates = [];
    }
    firstUpdated() {
        this.addChangeEventListenerForCheckboxes();
    }
    addChangeEventListenerForCheckboxes() {
        const checkboxes = this.getAllCheckboxes();
        if (!checkboxes.length)
            return;
        checkboxes.forEach((checkbox) => {
            if (checkbox instanceof Checkbox) {
                checkbox.addEventListener(IGDS_EVENTS.change, (event) => this.onCheckboxChanged(event, checkbox));
            }
        });
    }
    onCheckboxChanged(event, checkbox) {
        const checkboxes = this.getAllCheckboxes();
        const groupValues = checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value ?? '');
        this.onGroupChange?.(groupValues);
        const index = checkboxes.indexOf(checkbox);
        if (index !== -1) {
            this.checkboxStates = [
                ...this.checkboxStates.slice(0, index),
                event.detail.checked,
                ...this.checkboxStates.slice(index + 1),
            ];
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('disabled')) {
            this.disableChildCheckboxes();
        }
        if (changedProperties.has('invalid')) {
            this.markChildCheckboxesAsInvalid();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeChangeEventListenerForCheckboxes();
    }
    removeChangeEventListenerForCheckboxes() {
        const checkboxes = this.getAllCheckboxes();
        if (!checkboxes.length)
            return;
        checkboxes.forEach((checkbox) => {
            if (checkbox instanceof Checkbox) {
                checkbox.removeEventListener(IGDS_EVENTS.change, (event) => this.onCheckboxChanged(event, checkbox));
            }
        });
    }
    getAllCheckboxes() {
        return [...this.querySelectorAll(IGDS_TAGS.checkbox)];
    }
    disableChildCheckboxes() {
        const checkboxes = this.getAllCheckboxes();
        if (!checkboxes.length)
            return;
        checkboxes.forEach((checkbox) => {
            if (checkbox instanceof Checkbox) {
                checkbox.disabled = this.disabled;
            }
        });
    }
    markChildCheckboxesAsInvalid() {
        const checkboxes = this.getAllCheckboxes();
        if (!checkboxes.length)
            return;
        checkboxes.forEach((checkbox) => {
            if (checkbox instanceof Checkbox) {
                checkbox.required = this.invalid;
            }
        });
    }
    getLabel() {
        return html `
      ${when(this.label, () => html `
          <legend
            id="checkboxGroupLabel"
            class=${classMap({
            'checkbox-group__label': true,
            'checkbox-group__label--disabled': this.disabled,
            'checkbox-group__label--required': this.required,
        })}
          >
            ${this.label}
          </legend>
        `)}
    `;
    }
    getHelpIcon() {
        return html `
      ${when(this.helpIcon, () => html `
          <igds-icon
            node=${this.helpIcon}
            arria-hidden=${!this.helpIcon}
            class="checkbox-group__help-icon"
          >
          </igds-icon>
        `)}
    `;
    }
    getHelpText() {
        return html `
      ${when(this.helpText, () => html `
            <span class="checkbox-group__help-text">${this.helpText}</span>
          `)}
    `;
    }
    getHelpContainer() {
        return html `
      ${when(!this.error && (this.helpIcon || this.helpText), () => html `
          <div id="help-message" class="checkbox-group__help-box">
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `;
    }
    getError() {
        return html `
      ${when(this.error, () => html `
          <igds-default-error-box
            id="checkbox-group-error"
            class=${classMap({
            'checkbox-group__error-box': true,
            'checkbox-group__error-box--hidden': this.isAllCheckboxesChecked(),
        })}
            class="checkbox-group-error-container"
            errormessage=${ifDefined(this.error)}
          ></igds-default-error-box>
        `)}
    `;
    }
    isAllCheckboxesChecked() {
        const checkboxes = this.getAllCheckboxes();
        if (!checkboxes.length)
            return true;
        return (checkboxes.length === this.checkboxStates.length &&
            this.checkboxStates.every((checkboxState) => checkboxState));
    }
    getBottomBox() {
        return html `
      ${when(this.error || this.helpIcon || this.helpText, () => html `
          <div class="checkbox-group__bottom-box">
            ${this.getHelpContainer()} ${this.getError()}
          </div>
        `)}
    `;
    }
    render() {
        return html `
      <fieldset
        aria-labelledby=${ifDefined(this.label ? 'checkboxGroupLabel' : undefined)}
        aria-describedby=${ifDefined(this.helpText ? 'help-message' : undefined)}
        aria-errormessage=${ifDefined(this.error ? 'checkbox-group-error' : undefined)}
        aria-required=${this.required}
        class=${classMap({
            'checkbox-group': true,
            'checkbox-group--vertical': this.orientation === 'vertical',
            'checkbox-group--horizontal': this.orientation === 'horizontal',
        })}
      >
        ${this.getLabel()}
        <slot></slot>
      </fieldset>
      ${this.getBottomBox()}
    `;
    }
};
CheckboxGroup.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], CheckboxGroup.prototype, "label", void 0);
__decorate([
    property({ type: String })
], CheckboxGroup.prototype, "form", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxGroup.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxGroup.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxGroup.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], CheckboxGroup.prototype, "error", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], CheckboxGroup.prototype, "helpIcon", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], CheckboxGroup.prototype, "helpText", void 0);
__decorate([
    property({ type: String })
], CheckboxGroup.prototype, "orientation", void 0);
__decorate([
    property({ attribute: false })
], CheckboxGroup.prototype, "onGroupChange", void 0);
__decorate([
    state()
], CheckboxGroup.prototype, "checkboxStates", void 0);
CheckboxGroup = __decorate([
    customElement(IGDS_TAGS.checkboxGroup)
], CheckboxGroup);
export { CheckboxGroup };
