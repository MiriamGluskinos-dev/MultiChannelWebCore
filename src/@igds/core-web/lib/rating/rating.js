var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AngularFormElement } from '../abstractions';
import { html, unsafeCSS } from 'lit';
import { customElement, property, query, queryAll, state, } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_RATING_FACE_ICON_NAMES, IGDS_RATING_VARIANTS, IGDS_VERBAL_RATING_GRADES, } from './constants';
import { starOutlined, starFilled, } from '@igds/icons';
import { clampNumber, getDirection } from '../utils';
import styles from './rating.scss?inline';
import '../icon';
let Rating = class Rating extends AngularFormElement {
    constructor() {
        super();
        this.componentId = 'rating';
        this.dir = 'rtl';
        this.variant = IGDS_RATING_VARIANTS.star;
        this.readonly = false;
        this.label = '';
        this.ratingGrade = [];
        this.onChange = null;
        this.isHovering = false;
        this.hoverValue = 0;
        this.iconMaxCount = 5;
        this.highlightedIndex = null;
        this.selectedIndex = null;
        this._internals = this.attachInternals();
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
    }
    handleDocumentMouseDown(event) {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
            this.resetHighlightedSelection();
        }
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        this.initializeRatingGrade(_changedProperties);
        this.handleValuePropChange(_changedProperties);
    }
    initializeRatingGrade(_changedProperties) {
        if ((_changedProperties.has('variant') ||
            _changedProperties.has('ratingGrade')) &&
            this.variant === IGDS_RATING_VARIANTS.face &&
            !this.ratingGrade.length) {
            this.ratingGrade = IGDS_VERBAL_RATING_GRADES;
        }
    }
    handleValuePropChange(_changedProperties) {
        if (!_changedProperties.has('variant') ||
            !_changedProperties.has('value')) {
            return;
        }
        if (this.variant === IGDS_RATING_VARIANTS.face && this.value) {
            this.selectedIndex = this.ratingGrade.indexOf(this.value);
        }
    }
    render() {
        return html `
      <div
        role="radiogroup"
        aria-label="Rating"
        class=${classMap({
            rating: true,
            'rating--face': this.variant === IGDS_RATING_VARIANTS.face,
        })}
        @focus=${this.onFocus}
        @keydown=${this.onKeyDown}
        tabindex="0"
      >
        ${this.variant === IGDS_RATING_VARIANTS.face
            ? this.renderFaceRatingButtons()
            : this.renderStarRatingButtons()}
      </div>
      ${when(this.label, () => html `
            <label for=${this.componentId} class="rating__label"
              >${this.label}</label
            >
          `)}
      <input
        id=${this.componentId}
        name=${ifDefined(this.name)}
        form=${ifDefined(this.form)}
        class="rating__input"
        tabindex="-1"
        @change=${this.onChangeHandler}
      />
    `;
    }
    onChangeHandler(event) {
        this.onChange?.(event);
    }
    renderStarRatingButtons() {
        return html `
      ${repeat(Array(this.iconMaxCount), (_, index) => html `
          <button
            role="radio"
            aria-label="Star button"
            aria-checked=${Number(this.value) >= index + 1}
            @mouseenter=${() => this.onMouseEnter(index)}
            @mouseleave=${this.onMouseLeave}
            @click=${() => this.onStarRatingClick(index)}
            tabindex="-1"
            class=${classMap({
            rating__button: true,
            'rating__button--readonly': this.readonly,
        })}
          >
            <igds-icon
              node=${starOutlined}
              class="rating__star-icon"
            ></igds-icon>
            <igds-icon
              node=${starFilled}
              class=${classMap({
            'rating__star-icon': true,
            'rating__star-icon--hovered': true,
            'rating__star-icon--shown': this.isHovering && this.hoverValue >= index + 1,
        })}
            ></igds-icon>
            <igds-icon
              node=${starFilled}
              class="rating__star-icon rating__star-icon--filled"
              class=${classMap({
            'rating__star-icon': true,
            'rating__star-icon--filled': true,
            'rating__star-icon--shown': Number(this.value) >= index + 1,
        })}
            ></igds-icon>
          </button>
        `)}
    `;
    }
    getFaceButtonCssClasses(index) {
        return classMap({
            rating__button: true,
            'rating__button--face': true,
            'rating__button--face-readonly': this.readonly,
            'rating__button--highlighted-bad-smile': this.value === IGDS_VERBAL_RATING_GRADES[0] &&
                this.highlightedIndex === index,
            'rating__button--highlighted-not-good-smile': this.value === IGDS_VERBAL_RATING_GRADES[1] &&
                this.highlightedIndex === index,
            'rating__button--highlighted-ok-smile': this.value === IGDS_VERBAL_RATING_GRADES[2] &&
                this.highlightedIndex === index,
            'rating__button--highlighted-good-smile': this.value === IGDS_VERBAL_RATING_GRADES[3] &&
                this.highlightedIndex === index,
            'rating__button--highlighted-excellent-smile': this.value === IGDS_VERBAL_RATING_GRADES[4] &&
                this.highlightedIndex === index,
        });
    }
    getFaceIconCssClasses(index) {
        return classMap({
            'rating__face-icon': true,
            'rating__face-icon--bad-smile': this.value === IGDS_VERBAL_RATING_GRADES[0] &&
                this.selectedIndex === index,
            'rating__face-icon--not-good-smile': this.value === IGDS_VERBAL_RATING_GRADES[1] &&
                this.selectedIndex === index,
            'rating__face-icon--ok-smile': this.value === IGDS_VERBAL_RATING_GRADES[2] &&
                this.selectedIndex === index,
            'rating__face-icon--good-smile': this.value === IGDS_VERBAL_RATING_GRADES[3] &&
                this.selectedIndex === index,
            'rating__face-icon--excellent-smile': this.value === IGDS_VERBAL_RATING_GRADES[4] &&
                this.selectedIndex === index,
        });
    }
    renderFaceRatingButtons() {
        return html `
      ${repeat(IGDS_RATING_FACE_ICON_NAMES, (iconName, index) => html `
          <div class="rating__box">
            <button
              role="radio"
              aria-label="Smile button"
              aria-checked=${this.selectedIndex === index}
              class=${this.getFaceButtonCssClasses(index)}
              tabindex="-1"
              @click=${() => this.onFaceRatingClick(this.ratingGrade[index], index)}
            >
              <igds-icon
                node=${iconName}
                class=${this.getFaceIconCssClasses(index)}
              >
              </igds-icon>
            </button>
            ${when(this.ratingGrade?.length, () => html `
                <span class="rating__grade">${this.ratingGrade[index]}</span>
              `)}
          </div>
        `)}
    `;
    }
    onMouseEnter(index) {
        if (this.readonly)
            return;
        this.isHovering = true;
        this.hoverValue = index + 1;
        this.emit(IGDS_EVENTS.hover);
    }
    onMouseLeave() {
        this.isHovering = false;
    }
    onStarRatingClick(index) {
        if (this.readonly)
            return;
        this.resetHighlightedSelection();
        this.value = (index + 1).toString();
        this.commitSelection();
    }
    resetHighlightedSelection() {
        if (this.highlightedIndex || this.highlightedIndex === 0) {
            this.removeHighlightedClass();
            this.highlightedIndex = null;
        }
    }
    removeHighlightedClass() {
        if (!this.ratingButtons)
            return;
        this.ratingButtons.forEach((ratingButton) => {
            if (ratingButton.classList.contains('rating__button--highlighted')) {
                ratingButton.classList.remove('rating__button--highlighted');
            }
        });
    }
    onFaceRatingClick(grade, index) {
        if (this.readonly)
            return;
        this.resetHighlightedSelection();
        this.value = grade;
        this.selectedIndex = index;
        this.commitSelection();
    }
    onFocus(event) {
        if (!this.ratingButtons.length ||
            this.readonly ||
            !event.target.matches(':focus-visible'))
            return;
        if (this.variant === IGDS_RATING_VARIANTS.face) {
            this.highlightedIndex = 0;
            this.selectedIndex = this.highlightedIndex;
            this.value = this.ratingGrade[this.highlightedIndex];
        }
        else {
            this.highlightedIndex =
                this.value && Number(this.value) > 0 ? Number(this.value) - 1 : 0;
            this.value =
                this.highlightedIndex === 0
                    ? '0'
                    : (this.highlightedIndex + 1).toString();
        }
        this.ratingButtons[this.highlightedIndex].classList.add('rating__button--highlighted');
        this.commitSelection();
    }
    onKeyDown(event) {
        if (!this.ratingButtons.length || this.readonly)
            return;
        const isTabPressed = this.handleTabKey(event);
        if (isTabPressed === null)
            return;
        const { ArrowStart, ArrowEnd } = this.getDirectionKeys();
        if (this.isIncreaseKey(event.key, ArrowEnd)) {
            this.handleIncrease(event);
        }
        else if (this.isDecreaseKey(event.key, ArrowStart)) {
            this.handleDecrease(event);
        }
        this.updateHighlightedElement(isTabPressed);
        this.commitSelection();
    }
    handleTabKey(event) {
        if (event.key !== "Tab" /* IGDS_EVENT_KEYS.Tab */)
            return false;
        this.removeHighlightedClass();
        if (this.highlightedIndex === null) {
            event.preventDefault();
            this.highlightedIndex = 0;
            return false;
        }
        return true;
    }
    getDirectionKeys() {
        const isRtl = getDirection(this) === 'rtl';
        return {
            ArrowStart: isRtl
                ? "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */
                : "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */,
            ArrowEnd: isRtl ? "ArrowLeft" /* IGDS_EVENT_KEYS.ArrowLeft */ : "ArrowRight" /* IGDS_EVENT_KEYS.ArrowRight */,
        };
    }
    isIncreaseKey(key, ArrowEnd) {
        return ["ArrowUp" /* IGDS_EVENT_KEYS.ArrowUp */, ArrowEnd].includes(key);
    }
    isDecreaseKey(key, ArrowStart) {
        return ["ArrowDown" /* IGDS_EVENT_KEYS.ArrowDown */, ArrowStart].includes(key);
    }
    handleIncrease(event) {
        event.preventDefault();
        const ratingIndex = this.highlightedIndex === null ? 0 : this.highlightedIndex + 1;
        this.highlightedIndex = clampNumber(ratingIndex, 0, this.iconMaxCount - 1);
        this.updateValueForIncrease();
    }
    handleDecrease(event) {
        event.preventDefault();
        this.highlightedIndex = this.highlightedIndex
            ? this.highlightedIndex - 1
            : 0;
        this.updateValueForDecrease();
    }
    updateValueForIncrease() {
        if (this.variant === IGDS_RATING_VARIANTS.face) {
            this.selectedIndex = this.highlightedIndex;
        }
        this.value =
            this.variant === IGDS_RATING_VARIANTS.star
                ? (this.highlightedIndex + 1).toString()
                : this.ratingGrade[this.highlightedIndex];
    }
    updateValueForDecrease() {
        if (this.variant === IGDS_RATING_VARIANTS.face) {
            this.selectedIndex = this.highlightedIndex;
            this.value = this.ratingGrade[this.highlightedIndex];
        }
        else {
            this.value =
                this.highlightedIndex === 0
                    ? '0'
                    : (this.highlightedIndex + 1).toString();
        }
    }
    updateHighlightedElement(isTabPressed) {
        this.removeHighlightedClass();
        if (!isTabPressed && this.highlightedIndex !== null) {
            this.ratingButtons[this.highlightedIndex].classList.add('rating__button--highlighted');
        }
    }
    commitSelection() {
        this.emit(IGDS_EVENTS.change, this.value ?? '');
        this._internals.setFormValue(this.value);
        this.ratingInput.value = this.value ?? '';
        this.ratingInput.dispatchEvent(new Event('change'));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
    }
};
Rating.formAssociated = true;
Rating.styles = unsafeCSS(styles);
__decorate([
    property({ type: String, attribute: false })
], Rating.prototype, "componentId", void 0);
__decorate([
    property({ type: String, reflect: true })
], Rating.prototype, "dir", void 0);
__decorate([
    property({ type: String })
], Rating.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], Rating.prototype, "readonly", void 0);
__decorate([
    property({ type: String })
], Rating.prototype, "label", void 0);
__decorate([
    property({ type: Array })
], Rating.prototype, "ratingGrade", void 0);
__decorate([
    property({ type: String })
], Rating.prototype, "name", void 0);
__decorate([
    property({ type: String })
], Rating.prototype, "form", void 0);
__decorate([
    property({ attribute: false })
], Rating.prototype, "onChange", void 0);
__decorate([
    state()
], Rating.prototype, "isHovering", void 0);
__decorate([
    state()
], Rating.prototype, "hoverValue", void 0);
__decorate([
    state()
], Rating.prototype, "iconMaxCount", void 0);
__decorate([
    state()
], Rating.prototype, "highlightedIndex", void 0);
__decorate([
    state()
], Rating.prototype, "selectedIndex", void 0);
__decorate([
    query('.rating')
], Rating.prototype, "ratingGroup", void 0);
__decorate([
    query('.rating__input')
], Rating.prototype, "ratingInput", void 0);
__decorate([
    queryAll('.rating__button')
], Rating.prototype, "ratingButtons", void 0);
Rating = __decorate([
    customElement(IGDS_TAGS.rating)
], Rating);
export { Rating };
