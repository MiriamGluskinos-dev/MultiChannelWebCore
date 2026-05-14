var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, unsafeCSS } from 'lit';
import { AngularFormElement } from '../abstractions';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_CHECKBOX_VARIANTS, CHECKBOX_TEXT_ONLY_AND_SPACES_REGULAR_EXPRESSION, } from './constants';
import { IGDS_ICON_SIZES } from '../icon';
import { checkmark } from '@igds/icons';
import '../icon/icon';
import '../error-box/default-error-box';
import styles from './checkbox.scss?inline';
let Checkbox = class Checkbox extends AngularFormElement {
    constructor() {
        super();
        this.componentId = 'checkbox';
        this.disabled = false;
        this.required = false;
        this.defaultValue = this.DEFAULT_VALUE;
        this.invalid = false;
        this.indeterminate = false;
        this.label = null;
        this.onChange = null;
        this.variant = IGDS_CHECKBOX_VARIANTS.default;
        this._internals = this.attachInternals();
    }
    get validity() {
        return this._internals.validity;
    }
    checkValidity() {
        return this._internals.checkValidity();
    }
    reportValidity() {
        return this._internals.reportValidity();
    }
    applyInternalInputValidityOnComponent(input = this.input) {
        if (input == null) {
            return;
        }
        this._internals.setValidity(input.validity, this.error || input.validationMessage || `${this.name} value is invalid`, input);
    }
    justifyInputPosition() {
        const webComponentBoundingClientRect = this.getBoundingClientRect();
        const containerBoundingClientRect = this.inputContainer?.getBoundingClientRect();
        if (containerBoundingClientRect && this.input) {
            this.input.style.top = `${containerBoundingClientRect.top - webComponentBoundingClientRect.top}px`;
            this.input.style.left = `${containerBoundingClientRect.left - webComponentBoundingClientRect.left}px`;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.justifyInputPosition();
        this.applyInternalInputValidityOnComponent();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('error') || changedProperties.has('required')) {
            this.applyInternalInputValidityOnComponent();
        }
    }
    render() {
        return html `
      <label
        for=${this.componentId}
        class=${classMap({
            checkbox: true,
            'checkbox--card': this.variant === IGDS_CHECKBOX_VARIANTS.card,
            'checkbox--disabled-card': this.variant === IGDS_CHECKBOX_VARIANTS.card && this.disabled,
        })}
      >
        <input
          type="checkbox"
          id=${this.componentId}
          class="checkbox__input"
          value=${ifDefined(this.value || this.defaultValue)}
          name=${ifDefined(this.name === null ? undefined : this.name)}
          form=${ifDefined(this.form)}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          aria-invalid=${this.required}
          aria-errormessage="checkbox-error"
          aria-describedby=${ifDefined(!this.ariaLabel ? 'help-message' : undefined)}
          aria-label=${ifDefined(this.ariaLabel ? this.ariaLabel : undefined)}
          tabindex="0"
          @change=${this.onChangeHandler}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        ${this.getCheckboxContainer()}
        ${when(this.imageSrc && this.imageAlt, () => html `
            <img
              src=${ifDefined(this.imageSrc)}
              alt=${ifDefined(this.imageAlt)}
              class="checkbox__image"
            />
          `)}
        <slot name="checkbox-label" class="checkbox__label-slot">
          ${this.getLabel()}
        </slot>
        ${when(this.description, () => html `
            <span class="checkbox__description"> ${this.description} </span>
          `)}
        ${when(this.variant === IGDS_CHECKBOX_VARIANTS.withInput, () => html `
            <input
              name=${ifDefined(this.name)}
              value=${ifDefined(this.value || '')}
              ?disabled=${this.disabled}
              @change=${this.onInputChange}
              @input=${this.onInput}
              class=${classMap({
            'checkbox__option-input': true,
            'checkbox__option-input--invalid': this.invalid,
            'checkbox__option-input--disabled': Boolean(this.disabled),
        })}
              tabindex="0"
            />
          `)}
      </label>
      ${this.getHelpContainer()} ${this.getError()}
    `;
    }
    onInputChange(event) {
        const input = event.target;
        if (this.input) {
            this.input.value = input.value;
            this.input.dispatchEvent(new Event('change'));
        }
    }
    onInput(event) {
        const input = event.target;
        input.value = input.value.replace(CHECKBOX_TEXT_ONLY_AND_SPACES_REGULAR_EXPRESSION, '');
    }
    onChangeHandler(event) {
        const input = event.target;
        const formValue = this.variant === IGDS_CHECKBOX_VARIANTS.withInput
            ? this.textInput?.value ?? ''
            : input.value;
        this.checked = input?.checked;
        this.value = formValue;
        this.setFormValue(input?.checked, formValue);
        this.applyInternalInputValidityOnComponent(input);
        event.currentTarget.value = formValue;
        this.onChange?.(event, this.checked ? formValue : null);
        this.emit(IGDS_EVENTS.change, input.value, { checked: input.checked });
    }
    setFormValue(checked, value) {
        if (checked) {
            const formValue = this.variant === IGDS_CHECKBOX_VARIANTS.withInput
                ? this.textInput?.value ?? ''
                : value;
            this._internals.setFormValue(formValue);
        }
        else {
            this._internals.setFormValue(null);
        }
    }
    onFocus(event) {
        const inputElement = event.target;
        const value = inputElement.value;
        this.emit(IGDS_EVENTS.focus, value);
    }
    onBlur(event) {
        const inputElement = event.target;
        const value = inputElement.value;
        this.emit(IGDS_EVENTS.blur, value);
    }
    getCheckboxContainer() {
        return html `
      <div class="checkbox__container">
        <span class="checkbox__body">
          <slot name="checkbox-icon">
            <igds-icon
              node=${checkmark}
              size=${IGDS_ICON_SIZES.small}
              class="checkbox__icon"
            >
            </igds-icon>
          </slot>
        </span>
        <span class="checkbox__border"></span>
      </div>
    `;
    }
    getLabel() {
        return html ` ${when(this.label, () => html `
        <span
          class=${classMap({
            checkbox__label: true,
            'checkbox__label--card': this.variant === IGDS_CHECKBOX_VARIANTS.card,
        })}
        >
          ${this.label}
        </span>
      `)}`;
    }
    getHelpContainer() {
        return html ` ${when(!this.error && (this.helpIcon || this.helpText), () => html `
        <div id="help-message" class="checkbox__help-box">
          ${this.getHelpIcon()} ${this.getHelpText()}
        </div>
      `)}`;
    }
    getHelpIcon() {
        return html ` ${when(this.helpIcon, () => html `
        <igds-icon
          node=${this.helpIcon}
          arria-hidden=${!this.helpIcon}
          class="checkbox__help-icon"
        >
        </igds-icon>
      `)}`;
    }
    getHelpText() {
        return html ` ${when(this.helpText, () => html ` <span class="checkbox__help-text">${this.helpText}</span> `)}`;
    }
    getError() {
        return html ` ${when(this.error, () => html `
        <igds-default-error-box
          id="checkbox-error"
          class="checkbox__error-container"
          errormessage=${ifDefined(this.error)}
        >
        </igds-default-error-box>
      `)}`;
    }
};
Checkbox.shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
};
Checkbox.styles = unsafeCSS(styles);
Checkbox.formAssociated = true;
__decorate([
    property({ type: String, attribute: 'id' })
], Checkbox.prototype, "componentId", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "required", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], Checkbox.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], Checkbox.prototype, "helpText", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], Checkbox.prototype, "helpIcon", void 0);
__decorate([
    property({ type: Boolean })
], Checkbox.prototype, "invalid", void 0);
__decorate([
    property({ type: Boolean, attribute: false })
], Checkbox.prototype, "indeterminate", void 0);
__decorate([
    property({ type: String, reflect: true })
], Checkbox.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "error", void 0);
__decorate([
    query('.checkbox__input')
], Checkbox.prototype, "input", void 0);
__decorate([
    query('.checkbox__option-input')
], Checkbox.prototype, "textInput", void 0);
__decorate([
    query('.container')
], Checkbox.prototype, "inputContainer", void 0);
__decorate([
    property({ attribute: false })
], Checkbox.prototype, "onChange", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "variant", void 0);
__decorate([
    property({ type: String, attribute: 'image-src' })
], Checkbox.prototype, "imageSrc", void 0);
__decorate([
    property({ type: String, attribute: 'image-alt' })
], Checkbox.prototype, "imageAlt", void 0);
__decorate([
    property({ type: String })
], Checkbox.prototype, "description", void 0);
Checkbox = __decorate([
    customElement(IGDS_TAGS.checkbox)
], Checkbox);
export { Checkbox };
