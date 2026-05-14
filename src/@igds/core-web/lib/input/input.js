var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { AngularFormElement } from '../abstractions';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_INPUT_AUTOCAPITALIZE_OPTIONS, IGDS_INPUT_TYPES, IGDS_TEXTAREA_LARGE_SIZE_ROWS, IGDS_TEXTAREA_SIZES, } from './constants';
import { IGDS_ICON_SIZES } from '../icon';
import { helpOutlined, search as searchIcon, calendar, checkmark, } from '@igds/icons';
// eslint-disable-next-line no-duplicate-imports
import '../icon';
import '../error-box/default-error-box';
import styles from './input.scss?inline';
let Input = class Input extends AngularFormElement {
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
        this.componentId = 'input';
        this.dir = 'rtl';
        this.type = IGDS_INPUT_TYPES.text;
        this.disabled = false;
        this.required = false;
        this.readonly = false;
        this.iconPosition = 'left';
        this.invalid = false;
        this.autoFocus = false;
        this.autoComplete = 'off';
        this.autoCapitalize = IGDS_INPUT_AUTOCAPITALIZE_OPTIONS.off;
        this.autocorrect = false;
        this.size = IGDS_TEXTAREA_SIZES.custom;
        this.onChange = null;
        this.setAsAngularLibFormElement();
        this._internals = this.attachInternals();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.applyInternalInputValidityOnComponent();
        if (this.type === IGDS_INPUT_TYPES.textarea) {
            this.componentId = 'textarea';
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('error') || changedProperties.has('invalid')) {
            this.applyInternalInputValidityOnComponent();
        }
    }
    getTopBox() {
        return when(this.label || this.tooltipIcon || this.tooltipQuestion || this.tooltip, () => html `
        <div class="input__top-box">
          ${this.getInputLabel()} ${this.getTooltipIcon()}
          ${this.getTooltipQuestion()}
        </div>
      `);
    }
    getInputLabel() {
        return when(this.label, () => html `
        <label
          for=${ifDefined(this.componentId)}
          class=${classMap({
            input__label: true,
            'input__label--disabled': this.disabled,
            'input__label--required': this.required,
            'input__label--invalid': this.invalid,
        })}
        >
          ${when(this.labelIcon, () => html `
              <igds-icon
                node=${this.labelIcon}
                size=${IGDS_ICON_SIZES.medium}
                class="input__label-icon"
                aria-hidden="true"
              ></igds-icon>
            `)}
          ${this.label}
        </label>
      `);
    }
    getTooltipIcon() {
        return when(this.tooltipIcon, () => html `
        <igds-tooltip
          content=${this.tooltip ?? ''}
          placement="inset-inline-end"
          class="input__tooltip"
        >
          <igds-icon
            node=${helpOutlined}
            class=${classMap({
            'input__tooltip-icon': true,
            'input__tooltip-icon--disabled': this.disabled,
        })}
          >
          </igds-icon>
        </igds-tooltip>
      `);
    }
    getTooltipQuestion() {
        return when(this.tooltipQuestion, () => html `
        <igds-tooltip
          content=${this.tooltip ?? ''}
          placement="inset-inline-end"
        >
          <span
            class=${classMap({
            'input__tooltip-question': true,
            'input__tooltip-question--disabled': this.disabled,
        })}
          >
            ${this.tooltipQuestion}
          </span>
        </igds-tooltip>
      `);
    }
    onInput(event) {
        const inputElement = event.target;
        const value = inputElement.value;
        this.value = value;
        this.defaultValue = '';
        this._internals.setFormValue(value ?? null);
        this.emit(IGDS_EVENTS.input, value);
        this.applyInternalInputValidityOnComponent(event.target);
        this.onChange?.(event);
        this.updateTextareaHeight();
    }
    applyInternalInputValidityOnComponent(input = this.input) {
        if (input === null)
            return;
        this._internals.setValidity(input.validity, this.error || `${this.name} value is invalid`, input);
    }
    onChangeHandler(event) {
        const inputElement = event.target;
        const value = inputElement.value;
        this.emit(IGDS_EVENTS.change, value);
    }
    onBlur(event) {
        const inputElement = event.target;
        const value = inputElement.value;
        this.emit(IGDS_EVENTS.blur, value);
    }
    onFocus(event) {
        const inputElement = event.target;
        const value = inputElement.value;
        this.emit(IGDS_EVENTS.focus, value);
        this.updateTextareaHeight();
    }
    updateTextareaHeight() {
        if (this.autoHeight && this.textarea) {
            this.textarea.style.height = 'auto';
            this.textarea.style.height = this.textarea.scrollHeight + 'px';
        }
    }
    getTextareaCssClass() {
        return classMap({
            'input__field-box': true,
            'input__field-box--with-left-positioned-icon': Boolean(this.icon) &&
                this.iconPosition === 'left' &&
                (this.dir === 'rtl' || !this.dir),
            'input__field-box--with-left-positioned-icon-ltr': Boolean(this.icon) &&
                this.iconPosition === 'left' &&
                this.dir === 'ltr',
            'input__field-box--with-right-positioned-icon': Boolean(this.icon) && this.iconPosition === 'right',
            'input__field-box--auto-height': Boolean(this.autoHeight),
        });
    }
    getInputCssClass() {
        const hasIcon = Boolean(this.icon);
        const direction = this.dir || 'rtl';
        const isLtr = direction === 'ltr';
        const isRtl = direction === 'rtl';
        const isLeftIconPosition = this.iconPosition === 'left';
        const isRightIconPosition = this.iconPosition === 'right';
        if (!hasIcon) {
            return classMap({ 'input__field-box': true });
        }
        return classMap({
            'input__field-box': true,
            'input__field-box--with-left-positioned-icon': isLeftIconPosition && isRtl,
            'input__field-box--with-left-positioned-icon-ltr': isLeftIconPosition && isLtr,
            'input__field-box--with-right-positioned-icon-ltr': isRightIconPosition && isLtr,
            'input__field-box--with-right-positioned-icon': isRightIconPosition && isRtl,
        });
    }
    getInputBox() {
        if (this.type === IGDS_INPUT_TYPES.textarea) {
            return html `
        <textarea
          id=${this.componentId}
          ?autofocus=${this.autoFocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          aria-invalid=${this.invalid}
          aria-errormessage="input-error"
          aria-describedby="input-help-message"
          type=${this.type}
          rows=${ifDefined(this.getRows())}
          cols=${ifDefined(this.cols)}
          name=${ifDefined(this.name)}
          form=${ifDefined(this.form)}
          placeholder=${ifDefined(this.placeholder)}
          maxlength=${ifDefined(this.maxlength)}
          autocapitalize=${this.autoCapitalize}
          autocorrect=${this.autocorrect}
          class=${this.getTextareaCssClass()}
          @input=${this.onInput}
          @change=${this.onChangeHandler}
          @blur=${this.onBlur}
          @focus=${this.onFocus}
        >
${this.value || this.defaultValue}</textarea
        >
      `;
        }
        return html `
      <input
        id=${this.componentId}
        ?autofocus=${this.autoFocus}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        aria-invalid=${this.invalid}
        aria-label=${this.label ? this.label : 'Input'}
        aria-errormessage="input-error"
        aria-describedby="input-help-message"
        type=${this.type}
        name=${ifDefined(this.name)}
        form=${ifDefined(this.form)}
        placeholder=${ifDefined(this.placeholder)}
        maxlength=${ifDefined(this.maxlength)}
        .value=${(this.value || this.defaultValue) ?? ''}
        step=${ifDefined(this.step)}
        min=${ifDefined(this.min)}
        max=${ifDefined(this.max)}
        pattern=${ifDefined(this.pattern)}
        autocomplete=${ifDefined(this.autoComplete)}
        autocapitalize=${this.autoCapitalize}
        autocorrect=${this.autocorrect}
        class=${this.getInputCssClass()}
        @input=${this.onInput}
        @change=${this.onChangeHandler}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
      />
    `;
    }
    getRows() {
        if (this.type !== IGDS_INPUT_TYPES.textarea && !this.rows) {
            return undefined;
        }
        if (this.size === IGDS_TEXTAREA_SIZES.large) {
            return IGDS_TEXTAREA_LARGE_SIZE_ROWS;
        }
        return this.rows;
    }
    getMaxLengthContainer() {
        return when(this.type === IGDS_INPUT_TYPES.textarea && this.maxlength, () => html `
        <span class="input__max-length">
          ${this.getMaxLengthContainerContent()}
        </span>
      `);
    }
    getMaxLengthContainerContent() {
        if (this.value?.length) {
            return `${this.padDigit(this.value.length)}/${this.maxlength}`;
        }
        if (this.defaultValue?.length) {
            return `${this.padDigit(this.defaultValue.length)}/${this.maxlength}`;
        }
        return `${this.padDigit(0)}/${this.maxlength}`;
    }
    padDigit(digit) {
        return digit.toString().padStart(2, '0');
    }
    getHelpIcon() {
        return when(this.helpIcon, () => html `
        <igds-icon node=${this.helpIcon} aria-hidden=${!this.helpIcon}>
        </igds-icon>
      `);
    }
    getHelpText() {
        return when(this.helpText, () => html ` <span class="input__help-text">${this.helpText}</span> `);
    }
    getHelpBox() {
        return when(!this.invalid && this.helpText, () => html `
        <div
          id="input-help-message"
          class=${classMap({
            'input__help-box': true,
            'input__help-box--disabled': this.disabled,
        })}
        >
          ${this.getHelpIcon()} ${this.getHelpText()}
        </div>
      `);
    }
    getError() {
        return when(this.invalid && this.error, () => html `
        <igds-default-error-box
          id="input-error"
          class="input__error-box"
          errormessage=${ifDefined(this.error)}
        >
        </igds-default-error-box>
      `);
    }
    render() {
        return html `
      ${this.getTopBox()}
      <div
        class=${classMap({
            input: true,
            'input--textarea': this.type === IGDS_INPUT_TYPES.textarea,
            'input--with-right-positioned-icon': Boolean(this.icon) && this.iconPosition === 'right',
        })}
      >
        ${this.getInputBox()} ${this.getInputIcon()}
      </div>
      ${when((this.helpIcon && this.helpText) || this.error || this.maxlength, () => html `
          <div class="input__bottom-box">
            ${this.getHelpBox()} ${this.getError()}
            ${this.getMaxLengthContainer()}
          </div>
        `)}
    `;
    }
    getInputIconCssClass() {
        return classMap({
            input__icon: true,
            'input__icon--textarea': this.type === IGDS_INPUT_TYPES.textarea,
            'input__icon--textarea-ltr': this.dir === 'ltr' && this.type === IGDS_INPUT_TYPES.textarea,
            'input__icon--ltr': this.dir === 'ltr',
            'input__icon--right': this.iconPosition === 'right',
            'input__icon--textarea-right': this.iconPosition === 'right' &&
                this.type === IGDS_INPUT_TYPES.textarea,
            'input__icon--right-ltr': this.iconPosition === 'right' && this.dir === 'ltr',
            'input__icon--disabled': this.disabled,
            'input__icon--search': this.icon === searchIcon || (this.icon === calendar && !this.disabled),
        });
    }
    getInputIcon() {
        return when(this.icon, () => html `
        <igds-icon
          role=${ifDefined(this.icon === searchIcon ||
            this.icon === calendar ||
            this.icon === checkmark
            ? 'button'
            : undefined)}
          tabindex=${ifDefined(this.getIconTabIndex())}
          aria-label=${ifDefined(this.getIconAriaLabel())}
          node=${this.icon}
          size=${IGDS_ICON_SIZES.medium}
          class=${this.getInputIconCssClass()}
          @click=${this.onIconClick}
          @keydown=${this.onIconKeyDown}
          aria-hidden=${!this.icon}
        >
        </igds-icon>
      `);
    }
    getIconAriaLabel() {
        if (!this.icon)
            return undefined;
        if (this.icon === calendar)
            return 'Date picker icon';
        if (this.icon === checkmark)
            return 'Text cell icon';
        if (this.icon === searchIcon)
            return 'Search icon';
        return 'Input icon';
    }
    getIconTabIndex() {
        if (this.disabled) {
            return -1;
        }
        if (this.icon === searchIcon ||
            this.icon === calendar ||
            this.icon === checkmark) {
            return 0;
        }
        return undefined;
    }
    onIconClick() {
        if (this.icon === searchIcon || this.icon === checkmark) {
            this.emit(IGDS_EVENTS.inputIconClick, 'clicked');
        }
        if (this.icon === calendar) {
            this.dispatchEvent(new CustomEvent('calendar-icon-click'));
        }
    }
    onIconKeyDown(event) {
        if ([" " /* IGDS_EVENT_KEYS.Space */, "Enter" /* IGDS_EVENT_KEYS.Enter */].includes(event.key)) {
            this.onIconClick();
        }
    }
};
Input.formAssociated = true;
Input.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: false })
], Input.prototype, "componentId", void 0);
__decorate([
    property({ type: String, reflect: true })
], Input.prototype, "dir", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "type", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'label-icon' })
], Input.prototype, "labelIcon", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], Input.prototype, "defaultValue", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "readonly", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "rows", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "cols", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "max", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "pattern", void 0);
__decorate([
    property({ type: Number, attribute: 'maxlength' })
], Input.prototype, "maxlength", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "icon", void 0);
__decorate([
    property({ type: String, attribute: 'icon-position' })
], Input.prototype, "iconPosition", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], Input.prototype, "helpText", void 0);
__decorate([
    property({ type: String, attribute: 'help-icon' })
], Input.prototype, "helpIcon", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "tooltip", void 0);
__decorate([
    property({ type: String, attribute: 'tooltip-question' })
], Input.prototype, "tooltipQuestion", void 0);
__decorate([
    property({ type: Boolean, attribute: 'tooltip-icon' })
], Input.prototype, "tooltipIcon", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, attribute: 'auto-focus' })
], Input.prototype, "autoFocus", void 0);
__decorate([
    property({ type: String, attribute: 'autocomplete' })
], Input.prototype, "autoComplete", void 0);
__decorate([
    property({ type: String, attribute: 'autocapitalize' })
], Input.prototype, "autoCapitalize", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "autocorrect", void 0);
__decorate([
    property({ type: Boolean, attribute: 'autoheight' })
], Input.prototype, "autoHeight", void 0);
__decorate([
    property({ type: Number })
], Input.prototype, "step", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "size", void 0);
__decorate([
    property({ attribute: false })
], Input.prototype, "onChange", void 0);
__decorate([
    query('.input')
], Input.prototype, "input", void 0);
__decorate([
    query('textarea')
], Input.prototype, "textarea", void 0);
Input = __decorate([
    customElement(IGDS_TAGS.input)
], Input);
export { Input };
