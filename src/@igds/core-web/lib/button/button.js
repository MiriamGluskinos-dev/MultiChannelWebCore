var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { IGDSElement } from '../abstractions';
import { customElement, property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS, IGDS_BUTTON_SIZES, } from './constants';
import styles from './button.scss?inline';
import buttonTokens from './button-tokens.scss?inline';
import '../icon';
import { spinner } from '@igds/icons';
let Button = class Button extends IGDSElement {
    constructor() {
        super();
        this.variant = IGDS_BUTTON_VARIANTS.primary;
        this.size = IGDS_BUTTON_SIZES.medium;
        this.disabled = false;
        this.loading = false;
        this.type = IGDS_BUTTON_TYPES.button;
        this.inverted = false;
        this.iconOnly = false;
        this.hasIcon = false;
        this.hasSecondIcon = false;
        this.hasNoText = false;
        this._internals = this.attachInternals();
    }
    setAsButtonWithIcon(hasIcon) {
        this.hasIcon = hasIcon;
    }
    setAsButtonWithSecondIcon(hasIcon) {
        this.hasSecondIcon = hasIcon;
    }
    focus() {
        super.focus();
        this.buttonElement.focus();
    }
    handleClick(nativeEvent) {
        if (this.type === IGDS_BUTTON_TYPES.submit &&
            this._internals.form !== null) {
            this._internals.form.requestSubmit();
        }
        this.emit(IGDS_EVENTS.click, nativeEvent);
    }
    handleFocus() {
        this.emit(IGDS_EVENTS.focus, 'focused');
    }
    handleBlur() {
        this.emit(IGDS_EVENTS.blur, 'blurred');
    }
    handleKeydown(nativeEvent) {
        this.emit(IGDS_EVENTS.keydown, nativeEvent);
    }
    handleKeyup(nativeEvent) {
        this.emit(IGDS_EVENTS.keyup, nativeEvent);
    }
    handleIconSlotChange(e, isSecondIcon) {
        if (!e.target) {
            return;
        }
        const childNodes = e.target.assignedNodes({ flatten: true });
        if (!isSecondIcon) {
            this.setAsButtonWithIcon(childNodes.length > 0);
        }
        else {
            this.setAsButtonWithSecondIcon(childNodes.length > 0);
        }
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (!_changedProperties.has('iconOnly')) {
            return;
        }
        if (this.iconOnly) {
            this.hasNoText = true;
        }
        else {
            this.checkButtonTextSlot();
        }
    }
    checkButtonTextSlot() {
        const hasTextNode = [...this.childNodes].some((node) => {
            if (!node.nodeValue || node.nodeValue.startsWith('bindings={\n')) {
                // prevent seeing angular directives TODO suggest better way to understand that is icon only button
                return;
            }
            return node.nodeValue.replace('\n', '').trim().length !== 0;
        });
        this.hasNoText = !hasTextNode;
    }
    getAriaLabel() {
        const explicitLabel = this.getAttribute('aria-label') ?? this.label;
        if (this.hasNoText && !explicitLabel) {
            console.warn('[igds-button] Button has no discernible text. Provide "label", "aria-label", or visible text content for accessibility.');
        }
        return explicitLabel;
    }
    render() {
        return html `
      <button
        class=${classMap({
            button: true,
            'button--primary': this.variant == IGDS_BUTTON_VARIANTS.primary,
            'button--secondary': this.variant == IGDS_BUTTON_VARIANTS.secondary,
            'button--alternative': this.variant == IGDS_BUTTON_VARIANTS.alternative,
            'button--link': this.variant == IGDS_BUTTON_VARIANTS.link ||
                this.variant == IGDS_BUTTON_VARIANTS.linkInline,
            'button--inline': this.variant == IGDS_BUTTON_VARIANTS.linkInline,
            'button--large': this.size == IGDS_BUTTON_SIZES.large,
            'button--small': this.size == IGDS_BUTTON_SIZES.small,
            'button--loading': this.loading,
            'button--has-icon': this.hasIcon,
            'button--has-second-icon': this.hasSecondIcon,
            'button--has-icon-only': this.hasNoText,
            'button--inverted': this.inverted,
        })}
        aria-label=${ifDefined(this.getAriaLabel())}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @keydown=${this.handleKeydown}
        @keyup=${this.handleKeyup}
      >
        <div class="button__content">
          ${when(this.loading, () => html `<igds-icon
                node=${spinner}
                class="button__icon button__icon--animated"
              ></igds-icon>`, () => html `<slot
                name="icon"
                class="button__icon"
                @slotchange=${(event) => this.handleIconSlotChange(event)}
              ></slot>`)}
          ${when(!this.iconOnly, () => html `<slot></slot>`)}
          <slot
            name="second-icon"
            class="button__second-icon"
            @slotchange=${(event) => this.handleIconSlotChange(event, true)}
          ></slot>
        </div>
      </button>
    `;
    }
};
Button.styles = [unsafeCSS(styles), unsafeCSS(buttonTokens)];
Button.formAssociated = true;
__decorate([
    property({ type: String })
], Button.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], Button.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Button.prototype, "loading", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Button.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], Button.prototype, "inverted", void 0);
__decorate([
    property({ type: Boolean, attribute: 'icon-only' })
], Button.prototype, "iconOnly", void 0);
__decorate([
    state()
], Button.prototype, "hasIcon", void 0);
__decorate([
    state()
], Button.prototype, "hasSecondIcon", void 0);
__decorate([
    state()
], Button.prototype, "hasNoText", void 0);
__decorate([
    query('button')
], Button.prototype, "buttonElement", void 0);
Button = __decorate([
    customElement(IGDS_TAGS.button)
], Button);
export { Button };
