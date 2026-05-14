var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_RADIO_VARIANTS, RADIO_TEXT_ONLY_AND_SPACES_REGULAR_EXPRESSION, } from './constants';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import '../icon/icon';
import '../error-box/default-error-box';
import styles from './radio.scss?inline';
import { IGDSElement } from '../abstractions';
let RadioButton = class RadioButton extends IGDSElement {
    get validity() {
        return this._internals.validity;
    }
    checkValidity() {
        return this._internals.checkValidity();
    }
    reportValidity() {
        return this._internals.reportValidity();
    }
    constructor() {
        super();
        this.checked = false;
        this.componentId = 'radio';
        this.disabled = false;
        this.required = false;
        this.invalid = false;
        this.variant = IGDS_RADIO_VARIANTS.default;
        this.onChange = null;
        this._internals = this.attachInternals();
    }
    justifyRadioInputPosition() {
        const webComponentBoundingClientRectangle = this.getBoundingClientRect();
        const containerBoundingClientRectangle = this.inputContainer?.getBoundingClientRect();
        if (containerBoundingClientRectangle && this.input) {
            this.input.style.top = `${containerBoundingClientRectangle.top -
                webComponentBoundingClientRectangle.top}px`;
            this.input.style.left = `${containerBoundingClientRectangle.left -
                webComponentBoundingClientRectangle.left}px`;
        }
    }
    firstUpdated(changedProperties) {
        this.justifyRadioInputPosition();
        super.firstUpdated(changedProperties);
        this.applyInternalInputValidityOnComponent();
        if (this.variant === IGDS_RADIO_VARIANTS.textCard && this.label) {
            this.textCardTitle = this.label;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('error') || changedProperties.has('invalid')) {
            this.applyInternalInputValidityOnComponent();
        }
    }
    applyInternalInputValidityOnComponent(input = this.input) {
        if (input == null) {
            return;
        }
        this._internals.setValidity(input.validity, this.error || input.validationMessage || `${this.name} value is invalid`, input);
    }
    render() {
        return html `
      <label
        for=${this.componentId}
        class=${classMap({
            radio: true,
            'radio--text-card': this.variant === IGDS_RADIO_VARIANTS.textCard,
            'radio--image': this.variant === IGDS_RADIO_VARIANTS.image,
            'radio--disabled-text-card': this.variant === IGDS_RADIO_VARIANTS.textCard && this.disabled,
            'radio--disabled-image': this.variant === IGDS_RADIO_VARIANTS.image && this.disabled,
            'radio--with-input': this.variant === IGDS_RADIO_VARIANTS.withInput,
        })}
        @keydown=${() => { }}
      >
        <input
          type="radio"
          id=${this.componentId}
          class="radio__input"
          value=${this.value}
          name=${ifDefined(this.name)}
          form=${ifDefined(this.form)}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?required=${this.required}
          aria-required=${this.required}
          aria-invalid=${this.invalid}
          .checked=${this.checked}
          aria-errormessage="radio-error"
          aria-describedby="radio-help-message"
          tabindex="0"
          @change=${this.onChangeHandler}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        ${this.getRadioContainer()}
        ${when(this.imageSrc && this.imageAlt, () => html `
            <img
              src=${ifDefined(this.imageSrc)}
              alt=${ifDefined(this.imageAlt)}
              class="radio__image"
            />
          `)}
        ${this.getLabel()}
        ${when(this.description, () => html `<span
              class=${classMap({
            radio__description: true,
            'radio__description--disabled': this.disabled,
        })}
              >${this.description}</span
            >`)}
        ${when(this.variant === IGDS_RADIO_VARIANTS.withInput, () => html `
            <input
              name=${ifDefined(this.name)}
              value=${this.value || ''}
              ?disabled=${this.disabled}
              @change=${this.onInputChange}
              @input=${this.onInput}
              tabindex="0"
              class=${classMap({
            'radio__option-input': true,
            'radio__option-input--invalid': this.invalid,
            'radio__option-input--disabled': this.disabled,
        })}
            />
          `)}
      </label>
      ${this.getHelpContainer()} ${this.getError()}
    `;
    }
    onInputChange(event) {
        const input = event.target;
        if (!this.input)
            return;
        this.input.value = input.value;
        this.input.dispatchEvent(new Event('change'));
    }
    onInput(event) {
        const input = event.target;
        input.value = input.value.replace(RADIO_TEXT_ONLY_AND_SPACES_REGULAR_EXPRESSION, '');
    }
    // eslint-disable-next-line complexity
    onChangeHandler(event) {
        const inputElement = event.target;
        const formValue = this.variant === IGDS_RADIO_VARIANTS.withInput
            ? this.optionInput?.value ?? ''
            : inputElement.value;
        this.checked = inputElement?.checked;
        this.value = formValue;
        this.setFormValue(inputElement.checked, formValue);
        event.currentTarget.value = formValue;
        if (inputElement.checked) {
            this.dispatchEvent(new CustomEvent('radio-changed', { detail: { value: formValue } }));
        }
        this.applyInternalInputValidityOnComponent(inputElement);
        this.onChange?.(event, inputElement?.checked ? formValue : null);
        this.emit(IGDS_EVENTS.change, inputElement.value, {
            checked: inputElement.checked,
        });
    }
    setFormValue(checked, value) {
        if (checked) {
            const formValue = this.variant === IGDS_RADIO_VARIANTS.withInput
                ? this.optionInput?.value ?? ''
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
    getRadioContainer() {
        return html `
      <div class="radio__container">
        <span class="radio__body">
          <span class="radio__icon"></span>
        </span>
        <span class="radio__border"></span>
      </div>
    `;
    }
    getLabel() {
        return html `
      ${when(this.label, () => html `
            <span
              class=${classMap({
            radio__label: true,
            'radio__label--text-card': this.variant === IGDS_RADIO_VARIANTS.textCard,
            'radio__label--image': this.variant === IGDS_RADIO_VARIANTS.image,
        })}
            >
              ${this.label}
            </span>
          `)}
    `;
    }
    getHelpContainer() {
        return html `
      ${when(!this.error && (this.helpIcon || this.helpText), () => html `
          <div id="radio-help-message" class="radio__help-message">
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `;
    }
    getHelpIcon() {
        return html `
      ${when(this.helpIcon, () => html `
          <igds-icon
            node=${this.helpIcon}
            arria-hidden=${!this.helpIcon}
            class="radio__help-icon"
          >
          </igds-icon>
        `)}
    `;
    }
    getHelpText() {
        return html `
      ${when(this.helpText, () => html ` <span class="radio__help-text">${this.helpText}</span> `)}
    `;
    }
    getError() {
        return html `
      ${when(this.error || this.invalid, () => html `
          <igds-default-error-box
            id="radio-error"
            class=${classMap({
            'radio__error-box': true,
            'radio__error-box--with-input': this.variant === IGDS_RADIO_VARIANTS.withInput,
        })}
            errormessage=${ifDefined(this.error)}
          ></igds-default-error-box>
        `)}
    `;
    }
};
RadioButton.styles = unsafeCSS(styles);
RadioButton.formAssociated = true;
__decorate([
    property({ type: String })
], RadioButton.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "checked", void 0);
__decorate([
    property({ type: String, attribute: false })
], RadioButton.prototype, "componentId", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "required", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], RadioButton.prototype, "helpText", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], RadioButton.prototype, "helpIcon", void 0);
__decorate([
    property({ type: Boolean })
], RadioButton.prototype, "invalid", void 0);
__decorate([
    property({ type: String, reflect: true })
], RadioButton.prototype, "name", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "label", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "description", void 0);
__decorate([
    property({ type: String, attribute: 'image-src' })
], RadioButton.prototype, "imageSrc", void 0);
__decorate([
    property({ type: String, attribute: 'image-alt' })
], RadioButton.prototype, "imageAlt", void 0);
__decorate([
    property({ type: String })
], RadioButton.prototype, "error", void 0);
__decorate([
    state()
], RadioButton.prototype, "textCardTitle", void 0);
__decorate([
    query('.radio__input')
], RadioButton.prototype, "input", void 0);
__decorate([
    query('.radio__option-input')
], RadioButton.prototype, "optionInput", void 0);
__decorate([
    query('.radio__container')
], RadioButton.prototype, "inputContainer", void 0);
__decorate([
    property({ attribute: false })
], RadioButton.prototype, "onChange", void 0);
RadioButton = __decorate([
    customElement(IGDS_TAGS.radio)
], RadioButton);
export { RadioButton };
