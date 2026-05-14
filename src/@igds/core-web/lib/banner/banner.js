var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { IGDS_EVENTS, IGDS_TAGS } from '../constants';
import { IGDS_BUTTON_SIZES, IGDS_BUTTON_TYPES, IGDS_BUTTON_VARIANTS, } from '../button';
import { IGDSElement } from '../abstractions';
import { IGDS_BANNER_VARIANT } from './constants';
import styles from './banner.scss?inline';
let Banner = class Banner extends IGDSElement {
    constructor() {
        super(...arguments);
        this.variant = IGDS_BANNER_VARIANT.textRight;
        this.imgSrc = '';
        this.imageAlt = '';
        this.title = '';
        this.description = '';
    }
    handleClick(event) {
        event.stopPropagation();
        this.emit(IGDS_EVENTS.click, 'button clicked');
    }
    handleFooterClick(event) {
        event.stopPropagation();
        this.emit(IGDS_EVENTS.footerClick, 'footer button link clicked');
        if (this.footerActionUrl) {
            window.open(this.footerActionUrl, '_self');
        }
    }
    renderTextRightBanner() {
        return html `
      <div class="banner__main">
        <div class="banner__img-wrapper">
          <img
            alt="${this.imageAlt}"
            src=${this.imgSrc}
            class="banner__image"
          />
        </div>
        <section class="banner__content">
          <h2 id="banner-title" class="banner__title">${this.title}</h2>
          ${when(this.description, () => html ` <p id="banner-description" class="banner__description">
              ${this.description}
            </p>`)}
          ${when(this.actionLabel, () => html ` <igds-button
              type=${IGDS_BUTTON_TYPES.button}
              variant=${IGDS_BUTTON_VARIANTS.primary}
              size=${IGDS_BUTTON_SIZES.medium}
              class="banner__btn"
              @igds-click=${this.handleClick}
              >${this.actionLabel}
            </igds-button>`)}
        </section>
      </div>

      ${when(this.footerActionLabel || this.footerText, () => html `
          <div class="banner__divider-wrapper">
            <igds-divider></igds-divider>
          </div>
          <div class="banner__footer">
            <div class="banner__footer-content">
              <span>${this.footerText}</span>
              ${when(this.footerActionLabel, () => html ` <igds-button
                  type=${IGDS_BUTTON_TYPES.button}
                  variant=${IGDS_BUTTON_VARIANTS.link}
                  size=${IGDS_BUTTON_SIZES.medium}
                  @igds-click=${this.handleFooterClick}
                >
                  ${this.footerActionLabel}
                </igds-button>`)}
            </div>
          </div>
        `)}
    `;
    }
    renderTextCenterBanner() {
        return html ` <div class="banner__main banner__main--center-align">
      <div class="banner__img-wrapper banner__img-wrapper--center-align">
        <img
          alt="${this.imageAlt}"
          src=${this.imgSrc}
          class="banner__image banner__image--center-align"
        />
      </div>
      <section class="banner__content banner__content--center-align">
        <h2 id="banner-title" class="banner__title banner__title--center-align">
          ${this.title}
        </h2>
        <p
          id="banner-description"
          class="banner__description banner__description--center-align"
        >
          ${this.description}
        </p>
        ${when(this.actionLabel, () => html ` <igds-button
            type=${IGDS_BUTTON_TYPES.button}
            variant=${IGDS_BUTTON_VARIANTS.primary}
            size=${IGDS_BUTTON_SIZES.medium}
            @igds-click=${this.handleClick}
          >
            ${this.actionLabel}
          </igds-button>`)}
      </section>
    </div>`;
    }
    renderPictureOnlyBanner() {
        return html ` <div class="banner__img-wrapper banner__img-wrapper--img-only">
      <img
        alt="${this.imageAlt}"
        src=${this.imgSrc}
        class="banner__image banner__image--img-only"
      />
    </div>`;
    }
    render() {
        return html ` <div
      class="banner"
      role="banner"
      aria-labelledby="banner-title"
      aria-describedby="banner-description"
    >
      ${when(this.variant === 'text-right', () => this.renderTextRightBanner())}
      ${when(this.variant === 'text-center', () => this.renderTextCenterBanner())}
      ${when(this.variant === 'picture-only', () => this.renderPictureOnlyBanner())}
    </div>`;
    }
};
Banner.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Banner.prototype, "variant", void 0);
__decorate([
    property({ type: String, attribute: 'img-src' })
], Banner.prototype, "imgSrc", void 0);
__decorate([
    property({ type: String, attribute: 'img-alt' })
], Banner.prototype, "imageAlt", void 0);
__decorate([
    property({ type: String })
], Banner.prototype, "title", void 0);
__decorate([
    property({ type: String })
], Banner.prototype, "description", void 0);
__decorate([
    property({ type: String, attribute: 'action-label' })
], Banner.prototype, "actionLabel", void 0);
__decorate([
    property({ type: String, attribute: 'footer-text' })
], Banner.prototype, "footerText", void 0);
__decorate([
    property({ type: String, attribute: 'footer-action-label' })
], Banner.prototype, "footerActionLabel", void 0);
__decorate([
    property({ type: String, attribute: 'footer-action-url' })
], Banner.prototype, "footerActionUrl", void 0);
Banner = __decorate([
    customElement(IGDS_TAGS.banner)
], Banner);
export { Banner };
