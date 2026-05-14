var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS, IGDS_EVENTS, } from '../constants';
import { IGDS_INPUT_TYPES } from '../input';
import { IGDS_BUTTON_TYPES } from '../button';
import { IGDS_DIVIDER_ORIENTATIONS } from '../divider';
import { getCssValue } from '../utils';
import { email, phone } from '@igds/icons';
import styles from './footer.scss?inline';
const CSS_QUERY = `(max-width: ${getCssValue("--igds-light-ref-device-width-desktop-s" /* IGDS_BREAKPOINT_VARS.desktopS */, '1200px')})`;
let Footer = class Footer extends IGDSElement {
    constructor() {
        super();
        this.variant = 'large';
        this.frontPageUrl = '/';
        this.copyright = '© הזכויות כל שמורות למערך הדיגיטל הלאומי,';
        this.logoAlt = '';
        this.phone = '';
        this.email = '';
        this.socialUrls = [];
        this.isMobile = false;
        this.handleLogoKeyDown = (event) => {
            if (event.key === "Enter" /* IGDS_EVENT_KEYS.Enter */ ||
                event.key === " " /* IGDS_EVENT_KEYS.Space */) {
                this.handleLogoClick(event);
            }
        };
        this._mediaQueryObserver = window.matchMedia(CSS_QUERY);
        this.handleChange = this.handleChange.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this._mediaQueryObserver.addEventListener('change', this.handleChange);
        this.handleChange();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._mediaQueryObserver.removeEventListener('change', this.handleChange);
    }
    handleChange() {
        this.isMobile = this._mediaQueryObserver.matches;
    }
    handleLogoClick(event) {
        event.stopPropagation();
        this.emit(IGDS_EVENTS.logoClick, 'footer logo clicked');
        const frontPageHref = new URL(this.frontPageUrl, window.location.origin)
            .href;
        if (window.location.href === frontPageHref) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            this.redirectTo(this.frontPageUrl);
        }
    }
    getCopyrightText() {
        const year = new Date().getFullYear();
        return `${this.copyright} ${year}`;
    }
    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        this.emit(IGDS_EVENTS.submit, {
            fullName: fullName,
            email: email,
        });
    }
    redirectTo(url, prefix = '') {
        const destinationUrl = prefix ? `${prefix}:${url}` : url;
        window.location.href = destinationUrl;
    }
    handleLogoImageLoad(e) {
        const target = e.target;
        target.style.opacity = '1';
    }
    renderMainFooter() {
        return html `
      <div class="footer__main">
        <div
          class="footer__main-logo"
          aria-label="עבור אל העמוד הראשי"
          title="לעמוד הראשי"
          role="link"
          tabindex="0"
          @click=${this.handleLogoClick}
          @keydown=${this.handleLogoKeyDown}
        >
          <img
            src="${this.logoUrl}"
            alt="${this.logoAlt}"
            class="footer__main-logo-image"
            loading="lazy"
            @load=${this.handleLogoImageLoad}
          />
        </div>

        <nav class="footer__main-nav" aria-label="קישורים שימושיים">
          <igds-divider
            class="footer__main-first-divider"
            .orientation=${IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <a class="footer__main-nav-link" href="${this.aboutUrl}"
            >אודות האתר</a
          >
          <igds-divider
            .orientation=${IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <a class="footer__main-nav-link" href="${this.termsUrl}"
            >תנאי השימוש</a
          >
          <igds-divider
            .orientation=${IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <a class="footer__main-nav-link" href="${this.accessibilityUrl}"
            >נגישות</a
          >
        </nav>

        <div class="footer__main-container">
          <div class="footer__main-copyright">${this.getCopyrightText()}</div>
          <nav class="footer__main-contacts" aria-label="אמצעי תקשורת">
            ${when(this.contactUs, () => html `
                <a
                  class="footer__link-btn"
                  href="${this.contactUs.url}"
                  aria-label="צ׳אט איתנו"
                >
                  <igds-icon
                    slot="icon"
                    node=${this.contactUs.icon}
                  ></igds-icon>
                  <span class="footer__accessibility-label">צ׳אט איתנו</span>
                </a>
              `)}
            ${when(this.email, () => html `
                <a
                  class="footer__link-btn"
                  href="mailto:${this.email}"
                  aria-label="שלח מייל ל-${this.email}"
                >
                  <igds-icon slot="icon" node=${email}></igds-icon>
                  <span class="footer__accessibility-label"
                    >שלח מייל ל-${this.email}</span
                  >
                </a>
              `)}
            ${when(this.phone, () => html `
                <a
                  class="footer__link-btn"
                  href="tel:${this.phone}"
                  aria-label="התקשר ל-${this.phone}"
                >
                  <igds-icon slot="icon" node=${phone}></igds-icon>
                  <span class="footer__accessibility-label"
                    >התקשר ל-${this.phone}</span
                  >
                </a>
              `)}
          </nav>
        </div>
      </div>
    `;
    }
    renderMediumVariantSection() {
        return html `
      <div class="footer__body">
        <div class="footer__body-content footer__body-content--medium">
          <div
            class="footer__body-content-start-side footer__body-content-start-side--medium"
          >
            ${when(!this.isMobile, () => html ` <slot name="nav"></slot> `)}
          </div>
          <igds-divider
            .orientation=${IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <div
            class="footer__body-content-end-side footer__body-content-end-side--medium"
          >
            ${this.getPlaceholderTemplate()} ${this.getFormTemplate()}
            ${this.getSocialLinksTemplate()}
            <igds-divider
              class="footer__body-content-end-side--min-only"
            ></igds-divider>
          </div>
        </div>

        <!--MOBILE-->
        ${when(this.isMobile, () => html `
            <div class="footer__body-nav footer__body-nav--min">
              <slot name="nav"></slot>
            </div>
          `)}
      </div>
    `;
    }
    renderLargeVariantSection() {
        return html `
      <div class="footer__body">
        ${when(!this.isMobile, () => html `
            <div class="footer__body-nav">
              <slot name="nav"></slot>
              <div class="footer__divider-wrapper">
                <igds-divider></igds-divider>
              </div>
            </div>
          `)}

        <div class="footer__body-content">
          <div class="footer__body-content-start-side">
            ${this.getFormTemplate()}
          </div>
          <igds-divider
            .orientation=${IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <div class="footer__body-content-end-side">
            ${this.getPlaceholderTemplate()} ${this.getSocialLinksTemplate()}
            <igds-divider
              class="footer__body-content-end-side--min-only"
            ></igds-divider>
          </div>
        </div>

        <!--MOBILE-->
        ${when(this.isMobile, () => html `
            <div class="footer__body-nav footer__body-nav--min">
              <slot name="nav"></slot>
            </div>
          `)}
      </div>
    `;
    }
    getFormTemplate() {
        return html `
      <form
        class="footer__form footer__form--medium"
        @submit=${this.handleSubmit}
      >
        <div class="footer__form-fields-wrapper">
          <igds-input
            class="footer__form-input"
            required
            name="fullName"
            label="שם מלא"
            placeholder="שם פרטי ומשפחה"
          >
          </igds-input>

          <igds-input
            class="footer__form-input"
            required
            type=${IGDS_INPUT_TYPES.email}
            name="email"
            placeholder="newsletterr@example.co.il"
            label="דואר אלקטרוני"
          >
          </igds-input>
        </div>
        <igds-button
          type=${IGDS_BUTTON_TYPES.submit}
          class="footer__form-button"
        >
          הרשמה לניוזלטר!
        </igds-button>
        <igds-divider class="footer__form-bottom-divider"></igds-divider>
      </form>
    `;
    }
    getPlaceholderTemplate() {
        return html `
      <div
        class=${classMap({
            'footer__placeholder-container': true,
            'footer__placeholder-container--medium': this.variant === 'medium',
        })}
      >
        <slot></slot>
        <igds-divider></igds-divider>
      </div>
    `;
    }
    getSocialLinksTemplate() {
        return html `
      <div
        class=${classMap({
            'footer__social-links': true,
            ' footer__social-links--medium': this.variant === 'medium',
        })}
      >
        ${repeat(this.socialUrls, (socialUrl) => html `
            <a
              class="footer__link-btn"
              href=${socialUrl.url}
              aria-label="צ׳אט איתנו"
            >
              <igds-icon
                slot="icon"
                node=${socialUrl.icon}
              ></igds-icon>
              <span class="footer__accessibility-label"
                >${socialUrl.title}</span
              >
            </a>
          `)}
      </div>
    `;
    }
    render() {
        return html `
      <footer class="footer" role="contentinfo">
        <igds-divider></igds-divider>
        ${when(this.variant === 'large', () => this.renderLargeVariantSection())}
        ${when(this.variant === 'medium', () => this.renderMediumVariantSection())}
        ${when(this.variant === 'medium' || this.variant === 'large', () => html `
            <div class="footer__divider-wrapper">
              <igds-divider></igds-divider>
            </div>
          `)}
        ${this.renderMainFooter()}
      </footer>
    `;
    }
};
Footer.styles = unsafeCSS(styles);
__decorate([
    property({ type: String })
], Footer.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], Footer.prototype, "frontPageUrl", void 0);
__decorate([
    property({ type: String })
], Footer.prototype, "copyright", void 0);
__decorate([
    property({ type: String, reflect: true })
], Footer.prototype, "logoUrl", void 0);
__decorate([
    property({ type: String })
], Footer.prototype, "logoAlt", void 0);
__decorate([
    property({ type: String, reflect: true })
], Footer.prototype, "aboutUrl", void 0);
__decorate([
    property({ type: String, reflect: true })
], Footer.prototype, "termsUrl", void 0);
__decorate([
    property({ type: String, reflect: true })
], Footer.prototype, "accessibilityUrl", void 0);
__decorate([
    property({ type: String })
], Footer.prototype, "phone", void 0);
__decorate([
    property({ type: String })
], Footer.prototype, "email", void 0);
__decorate([
    property({ type: Object, attribute: false })
], Footer.prototype, "contactUs", void 0);
__decorate([
    property({ type: Array })
], Footer.prototype, "socialUrls", void 0);
__decorate([
    state()
], Footer.prototype, "isMobile", void 0);
Footer = __decorate([
    customElement(IGDS_TAGS.footer)
], Footer);
export { Footer };
