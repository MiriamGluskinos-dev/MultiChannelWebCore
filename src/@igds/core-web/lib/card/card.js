var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { IGDSElement } from '../abstractions';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_CARD_DIRECTIONS, IGDS_CARD_IMAGE_FIT, IGDS_CARD_SIZES, IGDS_CARD_TYPES, IGDS_CARD_VARIANTS, } from './constants';
import { IGDS_BUTTON_SIZES, IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS, } from '../button';
import { getCssValue } from '../utils';
import '../icon';
// eslint-disable-next-line no-duplicate-imports
import '../button';
import { heartOutlined, heartFilled } from '@igds/icons';
import styles from './card.scss?inline';
import cardTokens from './card-tokens.scss?inline';
let Card = class Card extends IGDSElement {
    constructor() {
        super();
        this.variant = IGDS_CARD_VARIANTS.basic;
        this.type = IGDS_CARD_TYPES.clickable;
        this.size = IGDS_CARD_SIZES.small;
        this.direction = IGDS_CARD_DIRECTIONS.horizontal;
        this.interactive = false;
        this.disabled = false;
        this.title = '';
        this.imageSrc = '';
        this.imageFit = IGDS_CARD_IMAGE_FIT.fill;
        this.favoriteVisible = false;
        this.defaultFavoriteState = false;
        this.favoriteIconStateActive = heartFilled;
        this.favoriteIconStateInactive = heartOutlined;
        this.favoriteLabel = 'Favorite';
        this.forcedDirection = this.getForcedDirection();
        this.favoriteState = this.defaultFavoriteState ?? false;
        this.isAnyFullPicture = this.variant === IGDS_CARD_VARIANTS.fullPictureLight ||
            this.variant === IGDS_CARD_VARIANTS.fullPictureDark ||
            false;
        this.updateWidth = this.updateWidth.bind(this);
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('variant')) {
            this.isAnyFullPicture =
                this.variant === IGDS_CARD_VARIANTS.fullPictureLight ||
                    this.variant === IGDS_CARD_VARIANTS.fullPictureDark;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.updateWidth);
    }
    updateWidth() {
        requestAnimationFrame(() => {
            this.forcedDirection = this.getForcedDirection();
        });
    }
    getForcedDirection() {
        const breakpoint = this.getForcedDirectionBreakpointWidth();
        if (window.innerWidth >= breakpoint) {
            return this.direction ?? 'horizontal';
        }
        if ((this.type ?? 'clickable') === 'cta' ||
            (this.size ?? 'small') === 'large') {
            return 'vertical';
        }
        return this.direction ?? 'horizontal';
    }
    getForcedDirectionBreakpointWidth() {
        return (parseInt(getCssValue("--igds-light-ref-device-width-tablet" /* IGDS_BREAKPOINT_VARS.tablet */, '768px').replace('px', '')) || 768);
    }
    getImageFitClassModifier(fit, classPrefix = '', extraCondition = true) {
        if (fit === undefined || !extraCondition)
            return {};
        return { [`${classPrefix}--fit-${fit}`]: true };
    }
    handleClick(_) {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.click, 'clicked');
    }
    handleFavoriteToggle(event) {
        if (this.disabled)
            return;
        event.preventDefault();
        this.favoriteState = this.favoriteState
            ? !this.favoriteState
            : !this.defaultFavoriteState;
        this.emit(IGDS_EVENTS.favoriteToggle, {
            favorite: this.favoriteState,
        });
    }
    handlePrimaryAction() {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.primaryClick, 'primaryClicked');
    }
    handleSecondaryAction() {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.secondaryClick, 'secondaryClicked');
    }
    handleKeydown(_) {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.keydown, 'keydown');
    }
    handleKeyup(_) {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.keydown, 'keyup');
    }
    handleFocus(_) {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.focus, 'focused');
    }
    handleBlur(_) {
        if (!this.interactive || this.disabled)
            return;
        this.emit(IGDS_EVENTS.blur, 'blurred');
    }
    getCardTabindex() {
        return this.interactive && !this.disabled ? 0 : -1;
    }
    getCardCssClasses() {
        return classMap({
            card: true,
            'card--variant-basic': this.variant === IGDS_CARD_VARIANTS.basic,
            'card--variant-full-picture': this.isAnyFullPicture,
            'card--variant-full-picture-light': this.variant === IGDS_CARD_VARIANTS.fullPictureLight,
            'card--variant-full-picture-dark': this.variant === IGDS_CARD_VARIANTS.fullPictureDark,
            'card--direction-horizontal': this.forcedDirection === IGDS_CARD_DIRECTIONS.horizontal,
            'card--direction-vertical': this.forcedDirection === IGDS_CARD_DIRECTIONS.vertical,
            'card--type-cta': this.type === IGDS_CARD_TYPES.cta,
            'card--type-clickable': this.type === IGDS_CARD_TYPES.clickable,
            'card--size-large': this.size === IGDS_CARD_SIZES.large ||
                this.type === IGDS_CARD_TYPES.cta,
            'card--size-small': this.size === IGDS_CARD_SIZES.small &&
                this.type === IGDS_CARD_TYPES.clickable,
            'card--disabled': this.disabled && this.type === IGDS_CARD_TYPES.clickable,
            'card--interactive': this.interactive && this.type === IGDS_CARD_TYPES.clickable,
        });
    }
    renderFavoriteButton() {
        return when(this.favoriteVisible &&
            this.forcedDirection === IGDS_CARD_DIRECTIONS.vertical &&
            (this.type === IGDS_CARD_TYPES.clickable
                ? this.size === IGDS_CARD_SIZES.large
                : true), () => html `<igds-button
          variant="alternative"
          size="small"
          label="${this.favoriteLabel}"
          aria-label="${this.favoriteLabel}"
          @igds-click="${this.handleFavoriteToggle}"
          class="card__media-icon"
        >
          <igds-icon
            tab-index="-1"
            slot="icon"
            node=${this.favoriteState
            ? this.favoriteIconStateActive
            : this.favoriteIconStateInactive}
          ></igds-icon>
        </igds-button>`);
    }
    renderCtaButtons() {
        return when(this.type === IGDS_CARD_TYPES.cta, () => html `<footer class="card__footer" aria-label="Card Footer">
        ${when(this.secondaryActionLabel, () => html `<igds-button
            variant="${IGDS_BUTTON_VARIANTS.secondary}"
            size="${IGDS_BUTTON_SIZES.medium}"
            type="${IGDS_BUTTON_TYPES.button}"
            label="${ifDefined(this.secondaryActionLabel)}"
            aria-label="${ifDefined(this.secondaryActionLabel)}"
            @igds-click="${this.handleSecondaryAction}"
          >
            ${this.secondaryActionLabel}
          </igds-button>`)}
        <igds-button
          variant="${IGDS_BUTTON_VARIANTS.primary}"
          size="${IGDS_BUTTON_SIZES.medium}"
          type="${IGDS_BUTTON_TYPES.button}"
          label="${ifDefined(this.primaryActionLabel)}"
          aria-label="${ifDefined(this.primaryActionLabel)}"
          @igds-click="${this.handlePrimaryAction}"
        >
          ${this.primaryActionLabel}
        </igds-button>
      </footer>`);
    }
    renderCardImage() {
        return when(this.variant === IGDS_CARD_VARIANTS.basic ||
            (this.isAnyFullPicture &&
                this.forcedDirection === IGDS_CARD_DIRECTIONS.vertical &&
                this.size === IGDS_CARD_SIZES.large), () => html ` <div class="card__media" aria-label="Card Media">
        ${when(this.imageSrc && this.variant === IGDS_CARD_VARIANTS.basic, () => html `<img
              src=${this.imageSrc}
              alt=${ifDefined(this.imageAlt ? this.imageAlt : undefined)}
              class="${classMap({
            'card__media-image': true,
            ...this.getImageFitClassModifier(this.imageFit, 'card__media-image'),
        })}"
            />`, () => when(this.variant === IGDS_CARD_VARIANTS.basic, () => html `<span class="card__media-placeholder">no image</span>`))}
        ${this.renderFavoriteButton()}
      </div>`);
    }
    hasSubtitle() {
        return (this.subtitle &&
            (this.type === IGDS_CARD_TYPES.cta ||
                (this.type === IGDS_CARD_TYPES.clickable &&
                    this.size === IGDS_CARD_SIZES.small)));
    }
    hasDescription() {
        return (this.description &&
            this.type === IGDS_CARD_TYPES.clickable &&
            this.size !== IGDS_CARD_SIZES.small);
    }
    hasLabel() {
        return (this.label &&
            this.type === IGDS_CARD_TYPES.clickable &&
            ((this.variant === IGDS_CARD_VARIANTS.basic &&
                this.size === IGDS_CARD_SIZES.large) ||
                this.isAnyFullPicture));
    }
    render() {
        return html `
      <article
        tabindex="${this.getCardTabindex()}"
        aria-label="${this.title}"
        @click="${this.handleClick}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @keydown="${this.handleKeydown}"
        @keyup="${this.handleKeyup}"
        class="${this.getCardCssClasses()}"
        style="${ifDefined(this.isAnyFullPicture
            ? `background-image: url('${this.imageSrc}')`
            : undefined)}"
      >
        ${this.renderCardImage()}
        <div class="card__content">
          <header aria-label="Card Header" class="card__header">
            <h2 class="card__header-title">${this.title}</h2>
            ${when(this.hasSubtitle(), () => html `<h3 class="card__header-subtitle">${this.subtitle}</h3>`)}
            ${when(this.hasDescription(), () => html `<p class="card__header-description">
                  ${this.description}
                </p>`)}
            ${when(this.hasLabel(), () => html `<small class="card__header-label">${this.label}</small>`)}
          </header>
          ${this.renderCtaButtons()}
        </div>
      </article>
    `;
    }
};
Card.styles = [unsafeCSS(styles), unsafeCSS(cardTokens)];
__decorate([
    property({ type: String })
], Card.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "type", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "size", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "direction", void 0);
__decorate([
    property({ type: Boolean })
], Card.prototype, "interactive", void 0);
__decorate([
    property({ type: Boolean })
], Card.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "title", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "subtitle", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "description", void 0);
__decorate([
    property({ type: String, attribute: 'image-src' })
], Card.prototype, "imageSrc", void 0);
__decorate([
    property({ type: String, attribute: 'image-fit' })
], Card.prototype, "imageFit", void 0);
__decorate([
    property({ type: String, attribute: 'image-alt' })
], Card.prototype, "imageAlt", void 0);
__decorate([
    property({ type: String })
], Card.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, attribute: 'favorite-visible' })
], Card.prototype, "favoriteVisible", void 0);
__decorate([
    property({ type: Boolean, attribute: 'default-favorite-state' })
], Card.prototype, "defaultFavoriteState", void 0);
__decorate([
    property({ type: String, attribute: 'favorite-icon-state-active' })
], Card.prototype, "favoriteIconStateActive", void 0);
__decorate([
    property({ type: String, attribute: 'favorite-icon-state-inactive' })
], Card.prototype, "favoriteIconStateInactive", void 0);
__decorate([
    property({ type: String, attribute: 'favorite-label' })
], Card.prototype, "favoriteLabel", void 0);
__decorate([
    property({ type: String, attribute: 'primary-action-label' })
], Card.prototype, "primaryActionLabel", void 0);
__decorate([
    property({ type: String, attribute: 'secondary-action-label' })
], Card.prototype, "secondaryActionLabel", void 0);
__decorate([
    state()
], Card.prototype, "forcedDirection", void 0);
__decorate([
    state()
], Card.prototype, "favoriteState", void 0);
__decorate([
    state()
], Card.prototype, "isAnyFullPicture", void 0);
Card = __decorate([
    customElement(IGDS_TAGS.card)
], Card);
export { Card };
