var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property, query, state } from 'lit/decorators.js';
import { html, unsafeCSS } from 'lit';
import { AngularFormElement } from '../abstractions';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_SLIDER_VARIANTS, INITIAL_SLIDER_VALUE, RANGE_SLIDER_MIN_DISTANCE, } from './constants';
import styles from './slider.scss?inline';
let Slider = class Slider extends AngularFormElement {
    constructor() {
        super();
        this.componentId = 'slider';
        this.dir = 'rtl';
        this.variant = IGDS_SLIDER_VARIANTS.single;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.disabled = false;
        this.required = false;
        this.invalid = false;
        this.onChange = null;
        this.setAsAngularLibFormElement();
        this._internals = this.attachInternals();
    }
    firstUpdated() {
        if (this.variant === IGDS_SLIDER_VARIANTS.range) {
            this.initRangeSlider();
        }
        else {
            this.initSlider();
        }
    }
    updated() {
        if (this.variant === IGDS_SLIDER_VARIANTS.range) {
            this.updateValuePositions();
        }
    }
    initSlider() {
        if (!this.sliderInputElement)
            return;
        if (this.value) {
            const progress = (Number(this.value) / this.max) * 100;
            const direction = this.dir === 'rtl' ? 'to left' : 'to right';
            this.sliderInputElement.style.background = `linear-gradient(${direction}, #0068f5 ${progress}%, #ced7e0 ${progress}%)`;
        }
        else {
            this.value = this.min.toString();
        }
        this._internals.setFormValue(this.value);
    }
    initRangeSlider() {
        this.minValue = Number(this.minValueName);
        this.maxValue = Number(this.maxValueName);
        this.updateRangeBackground();
        if (this.minValueName && this.maxValueName) {
            const formData = new FormData();
            formData.append('slider-min', this.minValueName);
            formData.append('slider-max', this.maxValueName);
            this._internals.setFormValue(formData);
        }
        setTimeout(() => this.updateValuePositions(), 0);
    }
    updateRangeBackground() {
        const minPercent = ((Number(this.minValue) - this.min) / (this.max - this.min)) * 100;
        const maxPercent = ((Number(this.maxValue) - this.min) / (this.max - this.min)) * 100;
        const direction = this.dir === 'rtl' ? 'to left' : 'to right';
        const background = `linear-gradient(
      ${direction},
      #ced7e0 0%,
      #ced7e0 ${Math.min(minPercent, maxPercent)}%,
      #0068f5 ${Math.min(minPercent, maxPercent)}%,
      #0068f5 ${Math.max(minPercent, maxPercent)}%,
      #ced7e0 ${Math.max(minPercent, maxPercent)}%,
      #ced7e0 100%
    )`;
        if (this.sliderMinInputElement)
            this.sliderMinInputElement.style.background = background;
    }
    updateValuePositions() {
        if (!this.sliderMinValueNameElement || !this.sliderMaxValueNameElement)
            return;
        const minPercent = ((Number(this.minValue) - this.min) / (this.max - this.min)) * 100;
        const maxPercent = ((Number(this.maxValue) - this.min) / (this.max - this.min)) * 100;
        if (this.dir === 'rtl') {
            this.sliderMinValueNameElement.style.right = `${minPercent}%`;
            this.sliderMinValueNameElement.style.transform = `translateX(${minPercent}%)`;
            this.sliderMaxValueNameElement.style.right = `${maxPercent}%`;
            this.sliderMaxValueNameElement.style.transform = `translateX(${maxPercent}%)`;
        }
        else {
            this.sliderMinValueNameElement.style.left = `${minPercent}%`;
            this.sliderMinValueNameElement.style.transform = `translateX(${-minPercent}%)`;
            this.sliderMaxValueNameElement.style.left = `${maxPercent}%`;
            this.sliderMaxValueNameElement.style.transform = `translateX(${-maxPercent}%)`;
        }
    }
    render() {
        if (this.variant === IGDS_SLIDER_VARIANTS.range) {
            return this.renderRangeSlider();
        }
        return this.renderSingleSlider();
    }
    renderSingleSlider() {
        return html `
      <div class="slider">
        <label for=${this.componentId} class="slider__label"
          >${this.label}</label
        >
        <div class="slider__box">
          ${when(this.icon, () => html ` <igds-icon node=${this.icon}></igds-icon> `)}
          <input
            id=${this.componentId}
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            ?disabled=${this.disabled}
            value=${this.value ?? ''}
            name=${ifDefined(this.name)}
            class="slider__input"
            @input=${this.onChangeHandler}
          />
          <span class="slider__value"
            >${`${this.value ?? INITIAL_SLIDER_VALUE}%`}</span
          >
        </div>
      </div>
    `;
    }
    renderRangeSlider() {
        return html `
      <div class="slider slider--range">
        <label class="slider__label">${this.label}</label>
        <div class="slider__box slider__box--range">
          <span class="slider__value slider__value--range"
            >${`${this.min}`}</span
          >
          <div class="slider__range-container">
            <div class="slider__base"></div>
            <input
              type="range"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              ?disabled=${this.disabled}
              value=${this.minValue?.toString()}
              name="slider-min"
              class="slider__input slider__input-min"
              @input=${(event) => this.onRangeValueChange(event, true)}
            />
            <input
              type="range"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              ?disabled=${this.disabled}
              value=${this.maxValue?.toString()}
              name="slider-max"
              class="slider__input slider__input-max"
              @input=${(event) => this.onRangeValueChange(event)}
            />
            <div class="slider__value-names-box">
              <span class="slider__min-value-name">${this.minValue}</span>
              <span class="slider__max-value-name">${this.maxValue}</span>
            </div>
          </div>
          <span class="slider__value slider__value--range"
            >${`${this.max}`}</span
          >
        </div>
      </div>
    `;
    }
    onChangeHandler(event) {
        const input = event.target;
        if (!input?.value)
            return;
        this.value = input.value;
        this.initSlider();
        this.onChange?.(event);
        this.emit(IGDS_EVENTS.change, this.value);
    }
    processFormDataAndEvents(event, isMin) {
        const changeEvent = new Event('change', { bubbles: true, composed: true });
        if (isMin) {
            this.sliderMinInputElement.dispatchEvent(changeEvent);
        }
        else {
            this.sliderMaxInputElement.dispatchEvent(changeEvent);
        }
        const formData = new FormData();
        formData.append('slider-min', this.minValue.toString());
        formData.append('slider-max', this.maxValue.toString());
        this._internals.setFormValue(formData);
        this.onChange?.(event);
        this.emit(IGDS_EVENTS.change, `${this.minValue}-${this.maxValue}`);
    }
    onRangeValueChange(event, isMin) {
        const input = event.target;
        if (!input?.value)
            return;
        const newValue = Number(input.value);
        const maxValue = this.maxValue - this.offsetDistance;
        const minValue = this.minValue + this.offsetDistance;
        if (isMin) {
            this.minValue = newValue >= maxValue ? maxValue : newValue;
        }
        else {
            this.maxValue = newValue <= minValue ? minValue : newValue;
        }
        input.value = (isMin ? this.minValue : this.maxValue).toString();
        this.updateRangeBackground();
        this.updateValuePositions();
        this.processFormDataAndEvents(event, isMin);
    }
    get offsetDistance() {
        return Math.trunc(((this.max - this.min) / 100) * RANGE_SLIDER_MIN_DISTANCE);
    }
};
Slider.formAssociated = true;
Slider.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: false })
], Slider.prototype, "componentId", void 0);
__decorate([
    property({ type: String, reflect: true })
], Slider.prototype, "dir", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "label", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "variant", void 0);
__decorate([
    property({ type: Number })
], Slider.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], Slider.prototype, "max", void 0);
__decorate([
    property({ type: Number })
], Slider.prototype, "step", void 0);
__decorate([
    property({ type: Boolean })
], Slider.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "form", void 0);
__decorate([
    property({ type: String, attribute: 'default-value' })
], Slider.prototype, "defaultValue", void 0);
__decorate([
    property({ type: Boolean })
], Slider.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], Slider.prototype, "invalid", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "error", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "minValueName", void 0);
__decorate([
    property({ type: String })
], Slider.prototype, "maxValueName", void 0);
__decorate([
    property({ attribute: false })
], Slider.prototype, "onChange", void 0);
__decorate([
    query('.slider__input')
], Slider.prototype, "sliderInputElement", void 0);
__decorate([
    query('.slider__input-min')
], Slider.prototype, "sliderMinInputElement", void 0);
__decorate([
    query('.slider__input-max')
], Slider.prototype, "sliderMaxInputElement", void 0);
__decorate([
    query('.slider__min-value-name')
], Slider.prototype, "sliderMinValueNameElement", void 0);
__decorate([
    query('.slider__max-value-name')
], Slider.prototype, "sliderMaxValueNameElement", void 0);
__decorate([
    state()
], Slider.prototype, "minValue", void 0);
__decorate([
    state()
], Slider.prototype, "maxValue", void 0);
Slider = __decorate([
    customElement(IGDS_TAGS.slider)
], Slider);
export { Slider };
