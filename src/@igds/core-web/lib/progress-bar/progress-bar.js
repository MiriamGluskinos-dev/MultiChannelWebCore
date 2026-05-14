var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { when } from 'lit/directives/when.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_PROGRESS_BAR_TYPE, IGDS_SPINNER_SIZES, IGDS_SPINNER_SIZES_MAP, PROGRESS_VALUE_MAX, PROGRESS_VALUE_MIN, } from './constants';
import { IGDS_ICON_SIZES } from '../icon';
import { IGDSElement } from '../abstractions';
import { clampNumber, getCssValue } from '../utils';
import styles from './progress-bar.scss?inline';
import { spinner } from '@igds/icons';
let ProgressBar = class ProgressBar extends IGDSElement {
    constructor() {
        super(...arguments);
        this.type = IGDS_PROGRESS_BAR_TYPE.line;
        this.color = '--igds-light-base-color-background-brand-default';
        this.inverted = false;
        this.value = PROGRESS_VALUE_MIN;
        this.size = IGDS_SPINNER_SIZES.small;
        this.label = '';
        this.helpText = '';
        this.indeterminate = false;
    }
    parseColor() {
        const color = getCssValue(this.color, '');
        if (color) {
            return color;
        }
        if (this.inverted) {
            return '#fff';
        }
        return this.color;
    }
    completeProgress() {
        this.emit(IGDS_EVENTS.complete, 'completed');
        this._progressBar.ariaBusy = 'false';
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const isComplete = changedProperties.has('value') && this.value === PROGRESS_VALUE_MAX;
        if (isComplete) {
            this.completeProgress();
        }
    }
    getLineProgress() {
        return html `
      <div
        class=${classMap({
            'progress-bar': true,
            'progress-bar--indeterminate': this.indeterminate,
        })}
      >
        <div class="progress-bar__label">
          <span class="progress-bar__label--text">${this.label}</span>
          ${this.statusIcon &&
            html `<igds-icon
            node=${this.statusIcon}
            color=${this.parseColor()}
            size=${IGDS_ICON_SIZES.medium}
            class="progress-bar__label--icon"
          ></igds-icon>`}
        </div>
        <div
          class="progress-bar__track"
          role="progressbar"
          aria-label=${this.label || 'Progress bar'}
          aria-valuemin=${ifDefined(!this.indeterminate ? PROGRESS_VALUE_MIN : undefined)}
          aria-valuemax=${ifDefined(!this.indeterminate ? PROGRESS_VALUE_MAX : undefined)}
          aria-valuenow=${ifDefined(!this.indeterminate ? this.value : undefined)}
          aria-busy="true"
          aria-live="polite"
        >
          <div
            class="progress-bar__indicator"
            style=${styleMap({
            width: `${this.value}%`,
            backgroundColor: this.parseColor(),
        })}
          ></div>
        </div>
        <div class="progress-bar__help-text">${this.helpText}</div>
      </div>
    `;
    }
    getSpinnerProgress() {
        const size = IGDS_SPINNER_SIZES_MAP[this.size];
        return html `
      <div
        role="status"
        aria-live="polite"
        aria-label=${this.label || 'Spinner'}
        style=${styleMap({
            width: `${size}px`,
            height: `${size}px`,
        })}
      >
        <svg
          style="color: ${this.parseColor()}"
          xmlns="http://www.w3.org/2000/svg"
          width=${size}
          height=${size}
          viewBox="0 0 24 24"
          class="spinner"
        >
          ${unsafeSVG(spinner)}
        </svg>
      </div>
    `;
    }
    render() {
        return html `${when(this.type === IGDS_PROGRESS_BAR_TYPE.line, () => html `${this.getLineProgress()}`, () => html `${this.getSpinnerProgress()}`)}`;
    }
};
ProgressBar.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, reflect: true })
], ProgressBar.prototype, "type", void 0);
__decorate([
    property({ type: String, reflect: true })
], ProgressBar.prototype, "color", void 0);
__decorate([
    property({ type: Boolean })
], ProgressBar.prototype, "inverted", void 0);
__decorate([
    property({
        type: Number,
        converter: {
            fromAttribute: (value) => {
                const parsedValue = value && parseInt(value);
                if (!parsedValue) {
                    return PROGRESS_VALUE_MIN;
                }
                return clampNumber(parsedValue, PROGRESS_VALUE_MIN, PROGRESS_VALUE_MAX);
            },
            toAttribute: (value) => {
                return value.toString();
            },
        },
    })
], ProgressBar.prototype, "value", void 0);
__decorate([
    property({ type: String })
], ProgressBar.prototype, "size", void 0);
__decorate([
    property({ type: String })
], ProgressBar.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: 'help-text' })
], ProgressBar.prototype, "helpText", void 0);
__decorate([
    property({ type: String, attribute: 'status-icon' })
], ProgressBar.prototype, "statusIcon", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ProgressBar.prototype, "indeterminate", void 0);
__decorate([
    query('[role="progressbar"]')
], ProgressBar.prototype, "_progressBar", void 0);
ProgressBar = __decorate([
    customElement(IGDS_TAGS.progressBar)
], ProgressBar);
export { ProgressBar };
