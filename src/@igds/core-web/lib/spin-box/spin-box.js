var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AngularFormElement } from '../abstractions';
import { customElement, property, query } from 'lit/decorators.js';
import { html, unsafeCSS } from 'lit';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_EVENTS, IGDS_PLACEMENTS, IGDS_TAGS } from '../constants';
import { IGDS_SPIN_BOX_SIZES } from './constants';
import { plus, minus, helpOutlined } from '@igds/icons';
import styles from './spin-box.scss?inline';
let SpinBox = class SpinBox extends AngularFormElement {
    constructor() {
        super();
        this.componentId = 'spin-box';
        this.size = IGDS_SPIN_BOX_SIZES.big;
        this.disabled = false;
        this.required = false;
        this.min = 0;
        this.max = Infinity;
        this.tooltipIcon = false;
        this.invalid = false;
        this.autoFocus = false;
        this.onChange = null;
        this.onAdd = () => {
            const currentValue = Number(this.value);
            const newValue = currentValue + 1;
            this.value = newValue.toString();
            this._internals.setFormValue(this.value);
            this.inputElement.value = this.value;
            this.inputElement.dispatchEvent(new Event('change'));
        };
        this.onSubtract = () => {
            const currentValue = Number(this.value);
            const newValue = currentValue - 1;
            this.value = newValue.toString();
            this._internals.setFormValue(this.value);
            this.inputElement.value = this.value;
            this.inputElement.dispatchEvent(new Event('change'));
        };
        this.setAsAngularLibFormElement();
        this._internals = this.attachInternals();
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (!this.value) {
            const initialValue = 0;
            this.value = initialValue.toString();
        }
        if (this.min) {
            this.value = this.min.toString();
        }
    }
    render() {
        return html `
      <div role="group" class="spin-box">
        <div class="spin-box__top-container">
          ${when(this.label, () => html `
              <label
                for=${this.componentId}
                class=${classMap({
            'spin-box__label-box': true,
            'spin-box__label-box--disabled': this.disabled,
        })}
              >
                <span
                  class=${classMap({
            'spin-box__label': true,
            'spin-box__label--required': this.required,
            'spin-box__label--disabled': this.disabled,
        })}
                >
                  ${this.label}
                </span>
              </label>
            `)}
          ${this.getTooltipIcon()} ${this.getTooltipQuestion()}
        </div>
        <div
          class=${classMap({
            'spin-box__group': true,
            'spin-box__group--disabled': this.disabled,
            'spin-box__group--small': this.size === IGDS_SPIN_BOX_SIZES.small,
        })}
        >
          <igds-button
            ?disabled=${this.isAddButtonDisabled()}
            class=${classMap({
            'spin-box__action-button': true,
            'spin-box__action-button--small': this.size === IGDS_SPIN_BOX_SIZES.small,
        })}
            @igds-click=${this.onAdd}
          >
            <igds-icon slot="icon" node=${plus}></igds-icon>
          </igds-button>
          <input
            id=${this.componentId}
            type="number"
            .value=${this.value ?? ''}
            ?disabled=${this.disabled}
            name=${ifDefined(this.name)}
            form=${ifDefined(this.form)}
            class=${classMap({
            'spin-box__input': true,
            'spin-box__input--disabled': this.disabled,
            'spin-box__input--invalid': this.invalid,
        })}
            aria-invalid=${this.invalid}
            aria-errormessage="spin-box-error"
            aria-describedby="spin-box-help-message"
            aria-live="polite"
            @change=${this.onInputChange}
            @input=${this.onInput}
            @focus=${this.onInputFocus}
            @blur=${this.onInputBlur}
          />
          <igds-button
            ?disabled=${this.isSubtractButtonDisabled()}
            class=${classMap({
            'spin-box__action-button': true,
            'spin-box__action-button--small': this.size === IGDS_SPIN_BOX_SIZES.small,
        })}
            @igds-click=${this.onSubtract}
          >
            <igds-icon slot="icon" node=${minus}></igds-icon>
          </igds-button>
        </div>
        ${this.getError()} ${this.getHelpBox()}
      </div>
    `;
    }
    getTooltipIcon() {
        return html `
      ${when(this.tooltipIcon, () => html `
          <igds-tooltip
            content=${this.tooltip ?? ''}
            placement=${IGDS_PLACEMENTS.insetInlineStartTop}
            class="spin-box__tooltip"
          >
            <igds-icon
              node=${helpOutlined}
              class=${classMap({
            'spin-box__tooltip-icon': true,
            'spin-box__tooltip-icon--disabled': this.disabled,
        })}
            >
            </igds-icon>
          </igds-tooltip>
        `)}
    `;
    }
    getTooltipQuestion() {
        return html `
      ${when(this.tooltipQuestion, () => html `
          <igds-tooltip
            content=${this.tooltip ?? ''}
            placement=${IGDS_PLACEMENTS.insetInlineStartTop}
            class="spin-box__tooltip-container"
          >
            <span
              class=${classMap({
            'spin-box__tooltip-question': true,
            'spin-box__tooltip-question--disabled': this.disabled,
        })}
            >
              ${this.tooltipQuestion}
            </span>
          </igds-tooltip>
        `)}
    `;
    }
    isAddButtonDisabled() {
        return this.disabled || Number(this.value) >= this.max;
    }
    onInputChange(event) {
        const input = event.target;
        const value = input.value;
        if (Number(value) <= this.min) {
            this.value = this.min.toString();
            input.value = this.value;
        }
        else if (Number(value) >= this.max) {
            this.value = this.max.toString();
            input.value = this.value;
        }
        else {
            this.value = value;
        }
        this._internals.setFormValue(this.value);
        this.onChange?.(event);
        this.emit(IGDS_EVENTS.change, this.value);
    }
    onInput(event) {
        const input = event.target;
        this.emit(IGDS_EVENTS.input, input.value);
    }
    onInputFocus(event) {
        const input = event.target;
        this.emit(IGDS_EVENTS.focus, input.value);
    }
    onInputBlur(event) {
        const input = event.target;
        this.emit(IGDS_EVENTS.blur, input.value);
    }
    isSubtractButtonDisabled() {
        const zero = 0;
        return (this.disabled ||
            this.value === zero.toString() ||
            Number(this.value) <= this.min);
    }
    getError() {
        return html `
      ${when(this.invalid && this.error, () => html `
          <igds-default-error-box
            id="spin-box-error"
            errormessage=${ifDefined(this.error)}
          >
          </igds-default-error-box>
        `)}
    `;
    }
    getHelpBox() {
        return html `
      ${when(this.helpIcon && this.helpText, () => html `
          <div
            id="spin-box-help-message"
            class=${classMap({
            'spin-box__help-box': true,
            'spin-box__help-box--disabled': this.disabled,
        })}
          >
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `;
    }
    getHelpIcon() {
        return html `
      ${when(this.helpIcon, () => html `
          <igds-icon node=${this.helpIcon} aria-hidden=${!this.helpIcon}>
          </igds-icon>
        `)}
    `;
    }
    getHelpText() {
        return html `
      ${when(this.helpText, () => html ` <span class="spin-box__help-text">${this.helpText}</span> `)}
    `;
    }
};
SpinBox.formAssociated = true;
SpinBox.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: false })
], SpinBox.prototype, "componentId", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "size", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "label", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "name", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "form", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "defaultValue", void 0);
__decorate([
    property({ type: Boolean })
], SpinBox.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], SpinBox.prototype, "required", void 0);
__decorate([
    property({ type: Number })
], SpinBox.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], SpinBox.prototype, "max", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "helpText", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "helpIcon", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "tooltip", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "tooltipQuestion", void 0);
__decorate([
    property({ type: Boolean })
], SpinBox.prototype, "tooltipIcon", void 0);
__decorate([
    property({ type: Boolean })
], SpinBox.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], SpinBox.prototype, "error", void 0);
__decorate([
    property({ type: Boolean })
], SpinBox.prototype, "autoFocus", void 0);
__decorate([
    property({ attribute: false })
], SpinBox.prototype, "onChange", void 0);
__decorate([
    query('.spin-box__input')
], SpinBox.prototype, "inputElement", void 0);
SpinBox = __decorate([
    customElement(IGDS_TAGS.spinBox)
], SpinBox);
export { SpinBox };
