var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { provide, consume } from '@lit/context';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { IGDS_TAGS, IGDS_EVENTS } from '../constants';
import { checkmark } from '@igds/icons';
import { IGDSElement } from '../abstractions';
import { IGDS_STEP_INDICATOR_ORIENTATION, MAX_HORIZONTAL_STEPS, } from './constants';
import styles from './step-indicator.scss?inline';
import { IgdsStepIndicatorContext, igdsStepIndicatorContext } from './context';
import '../icon';
let StepIndicator = class StepIndicator extends IGDSElement {
    constructor() {
        super(...arguments);
        this.orientation = IGDS_STEP_INDICATOR_ORIENTATION.horizontal;
        this.current = 1;
        this.flat = false;
        this.context = new IgdsStepIndicatorContext();
        this.steps = this.context.getSteps();
    }
    onStepChanged() {
        this.emit(IGDS_EVENTS.change, 'step-changed');
    }
    isCurrentStep(currentIndex, index) {
        return currentIndex === index + 1;
    }
    connectedCallback() {
        super.connectedCallback();
        this.context.onChange = () => {
            if (this.parentContext) {
                this.myParentStepId = this.parentContext?.registerSubSteps(this.context.getSteps(), this.current);
            }
            this.steps = this.context.getSteps();
            this.style.setProperty('--igds-list-step-count', this.steps.length.toString());
        };
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.context.setOrientation(this.orientation ?? IGDS_STEP_INDICATOR_ORIENTATION.horizontal);
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('current') &&
            changedProperties.get('current') !== undefined) {
            this.onStepChanged();
        }
        if (this.parentContext && changedProperties.has('current')) {
            this.parentContext.updateNestedCurrentStep(this.myParentStepId, this.current);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    renderFlatStepIndicator() {
        return html `
      <nav class="step-indicator__flat-box">
        <div
          class="step-indicator step-indicator--flat"
          role="progressbar"
          aria-label=${this.ariaLabel ?? 'Progress steps'}
          aria-valuemin="1"
          aria-valuemax=${this.steps.length}
          aria-valuenow=${this.current}
          aria-busy="true"
          aria-live="polite"
        >
          <span
            class="step-indicator__progress"
            style=${styleMap({
            width: `${(100 * this.current) / this.steps.length}%`,
        })}
          ></span>
        </div>
        <div class="step-indicator__status">
          ${this.current}/${this.steps.length}
        </div>
      </nav>
    `;
    }
    renderHorizontalMobileHeader() {
        return when(this.orientation === IGDS_STEP_INDICATOR_ORIENTATION.horizontal, () => html `
        ${repeat(this.steps, ({ id }) => id, ({ label }, index) => html `
            <div
              class=${classMap({
            'step-indicator__header': true,
            'step-indicator__header--shown': this.isCurrentStep(this.current, index),
        })}
            >
              ${label}
            </div>
          `)}
      `);
    }
    renderStepItem({ isNested, isCompleted, isCurrent, number, label, secondaryLabel, children, parentNumber, }) {
        /* eslint-disable lit-a11y/click-events-have-key-events */
        return html `
      <li
        class=${classMap({
            'step-indicator__item': true,
            'step-indicator__item--nested': isNested,
            'step-indicator__item--completed': isCompleted,
            'step-indicator__item--current': isCurrent,
        })}
        aria-current=${ifDefined(isCurrent ? 'step' : undefined)}
      >
        <div
          class="step-indicator__details"
          @click=${() => this.emitClick({
            stepNumber: number,
            isNested,
            ...(parentNumber !== undefined ? { parentNumber } : undefined),
        })}
        >
          <span class="step-indicator__number">
            ${number}
            <igds-icon
              node=${checkmark}
              class="step-indicator__check-icon"
            ></igds-icon>
          </span>
          <div class="step-indicator__label-wrapper">
            <span class="step-indicator__label"> ${label} </span>
            ${when(secondaryLabel, () => html `<span class="step-indicator__secondary-label">
                  ${secondaryLabel}
                </span>`)}
          </div>
        </div>
        ${children}
      </li>
    `;
        /* eslint-enable lit-a11y/click-events-have-key-events */
    }
    emitClick(detail) {
        this.emit(IGDS_EVENTS.click, detail);
    }
    render() {
        if (this.parentContext) {
            return null;
        }
        return html `
      ${when(!this.flat &&
            (this.orientation === IGDS_STEP_INDICATOR_ORIENTATION.vertical ||
                (this.orientation === IGDS_STEP_INDICATOR_ORIENTATION.horizontal &&
                    this.steps.length <= MAX_HORIZONTAL_STEPS)), () => html `
          <nav
            class="step-indicator__box"
            aria-label=${this.ariaLabel ?? 'Progress steps'}
          >
            <ol
              class=${classMap({
            'step-indicator': true,
            'step-indicator--horizontal': this.orientation ===
                IGDS_STEP_INDICATOR_ORIENTATION.horizontal,
            'step-indicator--vertical': this.orientation === IGDS_STEP_INDICATOR_ORIENTATION.vertical,
        })}
            >
              ${repeat(this.steps, ({ id }) => id, ({ label, secondaryLabel, children }, index) => this.renderStepItem({
            isNested: false,
            isCompleted: this.current > index + 1,
            isCurrent: this.isCurrentStep(this.current, index),
            number: index + 1,
            label,
            secondaryLabel,
            children: when(this.orientation ===
                IGDS_STEP_INDICATOR_ORIENTATION.vertical &&
                children !== undefined &&
                children.items.length > 0, () => html `
                        <ol class="step-indicator__sub-steps">
                          ${repeat(children?.items ?? [], ({ id }) => id, ({ label: subLabel, secondaryLabel: subSecondaryLabel, }, subIndex) => this.renderStepItem({
                isNested: true,
                isCompleted: (children?.current ?? 0) > subIndex + 1,
                isCurrent: this.isCurrentStep(children?.current, subIndex),
                number: subIndex + 1,
                label: subLabel,
                secondaryLabel: subSecondaryLabel,
                parentNumber: index,
            }))}
                        </ol>
                      `),
        }))}
            </ol>
            ${this.renderHorizontalMobileHeader()}
          </nav>
        `, () => this.renderFlatStepIndicator())}
    `;
    }
};
StepIndicator.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], StepIndicator.prototype, "orientation", void 0);
__decorate([
    property({ type: Number })
], StepIndicator.prototype, "current", void 0);
__decorate([
    property({ type: Boolean })
], StepIndicator.prototype, "flat", void 0);
__decorate([
    provide({ context: igdsStepIndicatorContext })
], StepIndicator.prototype, "context", void 0);
__decorate([
    consume({ context: igdsStepIndicatorContext })
], StepIndicator.prototype, "parentContext", void 0);
__decorate([
    state()
], StepIndicator.prototype, "steps", void 0);
StepIndicator = __decorate([
    customElement(IGDS_TAGS.stepIndicator)
], StepIndicator);
export { StepIndicator };
