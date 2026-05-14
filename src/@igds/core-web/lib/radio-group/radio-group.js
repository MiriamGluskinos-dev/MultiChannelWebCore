var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { IGDSElement } from '../abstractions';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_TAGS } from '../constants';
import styles from './radio-group.scss?inline';
let RadioGroup = class RadioGroup extends IGDSElement {
    constructor() {
        super();
        this.defaultValue = '';
        this.value = '';
        this.disabled = false;
        this.required = false;
        this.orientation = 'vertical';
        this._internals = this.attachInternals();
        this.onRadioChange = this.onRadioChange.bind(this);
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.initializeRadios();
    }
    initializeRadios() {
        const radios = this.getChildRadios();
        radios.forEach((radio) => {
            radio.addEventListener('radio-changed', this.onRadioChange);
        });
    }
    onRadioChange(event) {
        const target = event.target.closest(IGDS_TAGS.radio);
        if (event instanceof CustomEvent) {
            const radios = this.getChildRadios();
            const oldValue = this.value;
            if (!target || target.disabled)
                return;
            this.value = event.detail.value;
            radios.forEach((radio) => {
                radio.checked = radio.value === this.value;
            });
            if (this.value !== oldValue) {
                this._internals.setFormValue(event.detail.value);
            }
        }
    }
    getChildRadios() {
        return [...this.querySelectorAll(IGDS_TAGS.radio)];
    }
    get isArrowKey() {
        return [
            "ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */,
            "ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */,
            "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
        ];
    }
    shouldHandleArrowKey(event) {
        return this.isArrowKey.includes(event.key);
    }
    isNonRadioInputFocused() {
        const activeElement = document.activeElement?.shadowRoot?.activeElement;
        return (activeElement instanceof HTMLInputElement &&
            activeElement.type !== 'radio');
    }
    getEnabledRadios() {
        return this.getChildRadios().filter((radio) => !radio.disabled);
    }
    getArrowIncrement(key) {
        return ["ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */, "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */].includes(key)
            ? -1
            : 1;
    }
    getNextIndex(radios, key) {
        const checkedRadio = radios.find((radio) => radio.checked) ?? radios[0];
        const increment = this.getArrowIncrement(key);
        let nextIndex = radios.indexOf(checkedRadio) + increment;
        if (nextIndex < 0) {
            nextIndex = radios.length - 1;
        }
        if (nextIndex >= radios.length) {
            nextIndex = 0;
        }
        return nextIndex;
    }
    focusAndCheckRadio(radio) {
        const input = radio.shadowRoot?.querySelector('.radio__input');
        if (!input) {
            return;
        }
        input.focus();
        if (!input.checked) {
            input.checked = true;
            input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
        }
    }
    moveSelectionByArrowKey(event) {
        if (!this.shouldHandleArrowKey(event)) {
            return;
        }
        if (this.isNonRadioInputFocused()) {
            return;
        }
        const radios = this.getEnabledRadios();
        if (!radios.length) {
            return;
        }
        event.preventDefault();
        const nextIndex = this.getNextIndex(radios, event.key);
        const nextRadio = radios[nextIndex];
        this.focusAndCheckRadio(nextRadio);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('defaultValue') && this.defaultValue) {
            this.setDefaultValue();
        }
        if (changedProperties.has('disabled')) {
            this.disableChildRadios();
        }
    }
    setDefaultValue() {
        const radios = this.getChildRadios();
        radios.forEach((radio) => {
            const isEqualToDefaultValue = radio.value === this.defaultValue;
            if (isEqualToDefaultValue) {
                this.value = this.defaultValue;
                this._internals.setFormValue(this.defaultValue);
                radio.checked = isEqualToDefaultValue;
            }
        });
    }
    disableChildRadios() {
        const radios = this.getChildRadios();
        radios.forEach((radio) => (radio.disabled = this.disabled));
    }
    getLabel() {
        return html `
      ${when(this.label, () => html `
          <legend
            id="radioGroupLabel"
            class=${classMap({
            'radio-group__label': true,
            'radio-group__label--required': this.required,
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
            class="radio-group__help-icon"
          >
          </igds-icon>
        `)}
    `;
    }
    getHelpText() {
        return html `
      ${when(this.helpText, () => html ` <span class="radio-group__help-text">${this.helpText}</span> `)}
    `;
    }
    getHelpContainer() {
        return html `
      ${when(!this.error && (this.helpIcon || this.helpText), () => html `
          <div id="radio-group-help-message" class="radio-group__help-box">
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `;
    }
    getError() {
        return html `
      ${when(this.error, () => html `
          <igds-default-error-box
            class=${classMap({
            'radio-group__error-box': true,
            'radio-group__error-box--hidden': Boolean(this.value),
        })}
            id="radio-group-error"
            errormessage=${ifDefined(this.error)}
          ></igds-default-error-box>
        `)}
    `;
    }
    getBottomContainer() {
        return html `
      ${when(this.error || this.helpIcon || this.helpText, () => html `
          <div class="radio-group__footer">
            ${this.getHelpContainer()} ${this.getError()}
          </div>
        `)}
    `;
    }
    render() {
        return html `
      <fieldset
        aria-labelledby=${ifDefined(this.label ? 'radioGroupLabel' : undefined)}
        aria-describedby=${ifDefined(this.helpText ? 'radio-group-help-message' : undefined)}
        aria-errormessage=${ifDefined(this.error ? 'radio-group-error' : undefined)}
        aria-required=${this.required}
        class=${classMap({
            'radio-group': true,
            'radio-group--horizontal': this.orientation === 'horizontal',
            'radio-group--vertical': this.orientation === 'vertical',
        })}
      >
        ${this.getLabel()}
        <slot @keydown=${this.moveSelectionByArrowKey}></slot>
      </fieldset>
      ${this.getBottomContainer()}
    `;
    }
};
RadioGroup.formAssociated = true;
RadioGroup.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], RadioGroup.prototype, "label", void 0);
__decorate([
    property({ type: String })
], RadioGroup.prototype, "name", void 0);
__decorate([
    property({ type: String })
], RadioGroup.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], RadioGroup.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: false })
], RadioGroup.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], RadioGroup.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], RadioGroup.prototype, "required", void 0);
__decorate([
    property({ type: String })
], RadioGroup.prototype, "error", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], RadioGroup.prototype, "helpIcon", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], RadioGroup.prototype, "helpText", void 0);
__decorate([
    property({ type: String })
], RadioGroup.prototype, "orientation", void 0);
RadioGroup = __decorate([
    customElement(IGDS_TAGS.radioGroup)
], RadioGroup);
export { RadioGroup };
