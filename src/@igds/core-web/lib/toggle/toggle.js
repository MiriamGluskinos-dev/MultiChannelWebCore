var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { AngularFormElement } from '../abstractions';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import styles from './toggle.scss?inline';
let Toggle = class Toggle extends AngularFormElement {
    constructor() {
        super();
        this.componentId = 'toggle';
        this.defaultValue = this.DEFAULT_VALUE;
        this.disabled = false;
        this.onChange = null;
        this.setAsAngularLibFormElement();
        this._internals = this.attachInternals();
    }
    onChangeHandler(event) {
        const input = event.target;
        if (input?.checked) {
            this._internals.setFormValue(input.value);
        }
        else {
            this._internals.setFormValue(null);
        }
        this.checked = input.checked;
        this.onChange?.(event);
        this.emit(IGDS_EVENTS.change, input.value, { checked: input.checked });
    }
    onFocus(event) {
        const input = event.target;
        this.emit(IGDS_EVENTS.focus, input.value);
    }
    onBlur(event) {
        const input = event.target;
        this.emit(IGDS_EVENTS.blur, input.value);
    }
    getLabel() {
        return html `
      ${when(this.labelTitle || this.labelText, () => html `
          <span class="switch__label-box">
            <span class="switch__label switch__label--strong"
              >${this.labelTitle}</span
            >
            <span class="switch__label">${this.labelText}</span>
          </span>
        `)}
    `;
    }
    render() {
        return html `
      <label for=${this.componentId} class="switch">
        <input
          id=${this.componentId}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          .checked=${this.checked}
          name=${ifDefined(this.name)}
          form=${ifDefined(this.form)}
          value=${ifDefined(this.value || this.defaultValue)}
          role="switch"
          class="switch__input"
          aria-checked=${this.checked}
          @change=${this.onChangeHandler}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        ${this.getLabel()}
        <span class="switch__control">
          <span class="switch__thumb"></span>
        </span>
      </label>
    `;
    }
};
Toggle.styles = unsafeCSS(styles);
Toggle.formAssociated = true;
__decorate([
    property({ type: String, attribute: false })
], Toggle.prototype, "componentId", void 0);
__decorate([
    property({ type: String, attribute: 'label-title' })
], Toggle.prototype, "labelTitle", void 0);
__decorate([
    property({ type: String, attribute: 'label-text' })
], Toggle.prototype, "labelText", void 0);
__decorate([
    property({ type: String })
], Toggle.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Toggle.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], Toggle.prototype, "defaultValue", void 0);
__decorate([
    property({ type: Boolean })
], Toggle.prototype, "disabled", void 0);
__decorate([
    property({ attribute: false })
], Toggle.prototype, "onChange", void 0);
Toggle = __decorate([
    customElement(IGDS_TAGS.toggle)
], Toggle);
export { Toggle };
