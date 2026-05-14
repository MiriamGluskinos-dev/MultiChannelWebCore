"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const t=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),r=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),y=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const b=require("../constants/breakpoints.cjs"),_=require("../constants/events.cjs"),m=require("../constants/event-keys.cjs"),$=require("../constants/tags.cjs"),S=require("../input/constants.cjs");require("../input/input.cjs");require("../button/button.cjs");const I=require("../button/constants.cjs");require("../divider/divider.cjs");const l=require("../divider/constants.cjs"),T=require("../utils/common.cjs"),g=require("@igds/icons"),w=require("./footer.scss.cjs"),E=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var D=Object.defineProperty,q=Object.getOwnPropertyDescriptor,i=(d,e,o,n)=>{for(var a=n>1?void 0:n?q(e,o):e,c=d.length-1,h;c>=0;c--)(h=d[c])&&(a=(n?h(e,o,a):h(a))||a);return n&&a&&D(e,o,a),a};const F=`(max-width: ${T.getCssValue(b.IGDS_BREAKPOINT_VARS.desktopS,"1200px")})`;exports.Footer=class extends y.IGDSElement{constructor(){super(),this.variant="large",this.frontPageUrl="/",this.copyright="© הזכויות כל שמורות למערך הדיגיטל הלאומי,",this.logoAlt="",this.phone="",this.email="",this.socialUrls=[],this.isMobile=!1,this.handleLogoKeyDown=e=>{(e.key===m.IGDS_EVENT_KEYS.Enter||e.key===m.IGDS_EVENT_KEYS.Space)&&this.handleLogoClick(e)},this._mediaQueryObserver=window.matchMedia(F),this.handleChange=this.handleChange.bind(this)}connectedCallback(){super.connectedCallback(),this._mediaQueryObserver.addEventListener("change",this.handleChange),this.handleChange()}disconnectedCallback(){super.disconnectedCallback(),this._mediaQueryObserver.removeEventListener("change",this.handleChange)}handleChange(){this.isMobile=this._mediaQueryObserver.matches}handleLogoClick(e){e.stopPropagation(),this.emit(_.IGDS_EVENTS.logoClick,"footer logo clicked");const o=new URL(this.frontPageUrl,window.location.origin).href;window.location.href===o?window.scrollTo({top:0,behavior:"smooth"}):this.redirectTo(this.frontPageUrl)}getCopyrightText(){const e=new Date().getFullYear();return`${this.copyright} ${e}`}handleSubmit(e){e.preventDefault();const o=new FormData(e.target),n=o.get("fullName"),a=o.get("email");this.emit(_.IGDS_EVENTS.submit,{fullName:n,email:a})}redirectTo(e,o=""){const n=o?`${o}:${e}`:e;window.location.href=n}handleLogoImageLoad(e){const o=e.target;o.style.opacity="1"}renderMainFooter(){return t.html`
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
            .orientation=${l.IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <a class="footer__main-nav-link" href="${this.aboutUrl}"
            >אודות האתר</a
          >
          <igds-divider
            .orientation=${l.IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <a class="footer__main-nav-link" href="${this.termsUrl}"
            >תנאי השימוש</a
          >
          <igds-divider
            .orientation=${l.IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <a class="footer__main-nav-link" href="${this.accessibilityUrl}"
            >נגישות</a
          >
        </nav>

        <div class="footer__main-container">
          <div class="footer__main-copyright">${this.getCopyrightText()}</div>
          <nav class="footer__main-contacts" aria-label="אמצעי תקשורת">
            ${s.when(this.contactUs,()=>t.html`
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
            ${s.when(this.email,()=>t.html`
                <a
                  class="footer__link-btn"
                  href="mailto:${this.email}"
                  aria-label="שלח מייל ל-${this.email}"
                >
                  <igds-icon slot="icon" node=${g.email}></igds-icon>
                  <span class="footer__accessibility-label"
                    >שלח מייל ל-${this.email}</span
                  >
                </a>
              `)}
            ${s.when(this.phone,()=>t.html`
                <a
                  class="footer__link-btn"
                  href="tel:${this.phone}"
                  aria-label="התקשר ל-${this.phone}"
                >
                  <igds-icon slot="icon" node=${g.phone}></igds-icon>
                  <span class="footer__accessibility-label"
                    >התקשר ל-${this.phone}</span
                  >
                </a>
              `)}
          </nav>
        </div>
      </div>
    `}renderMediumVariantSection(){return t.html`
      <div class="footer__body">
        <div class="footer__body-content footer__body-content--medium">
          <div
            class="footer__body-content-start-side footer__body-content-start-side--medium"
          >
            ${s.when(!this.isMobile,()=>t.html` <slot name="nav"></slot> `)}
          </div>
          <igds-divider
            .orientation=${l.IGDS_DIVIDER_ORIENTATIONS.vertical}
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
        ${s.when(this.isMobile,()=>t.html`
            <div class="footer__body-nav footer__body-nav--min">
              <slot name="nav"></slot>
            </div>
          `)}
      </div>
    `}renderLargeVariantSection(){return t.html`
      <div class="footer__body">
        ${s.when(!this.isMobile,()=>t.html`
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
            .orientation=${l.IGDS_DIVIDER_ORIENTATIONS.vertical}
          ></igds-divider>
          <div class="footer__body-content-end-side">
            ${this.getPlaceholderTemplate()} ${this.getSocialLinksTemplate()}
            <igds-divider
              class="footer__body-content-end-side--min-only"
            ></igds-divider>
          </div>
        </div>

        <!--MOBILE-->
        ${s.when(this.isMobile,()=>t.html`
            <div class="footer__body-nav footer__body-nav--min">
              <slot name="nav"></slot>
            </div>
          `)}
      </div>
    `}getFormTemplate(){return t.html`
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
            type=${S.IGDS_INPUT_TYPES.email}
            name="email"
            placeholder="newsletterr@example.co.il"
            label="דואר אלקטרוני"
          >
          </igds-input>
        </div>
        <igds-button
          type=${I.IGDS_BUTTON_TYPES.submit}
          class="footer__form-button"
        >
          הרשמה לניוזלטר!
        </igds-button>
        <igds-divider class="footer__form-bottom-divider"></igds-divider>
      </form>
    `}getPlaceholderTemplate(){return t.html`
      <div
        class=${p.classMap({"footer__placeholder-container":!0,"footer__placeholder-container--medium":this.variant==="medium"})}
      >
        <slot></slot>
        <igds-divider></igds-divider>
      </div>
    `}getSocialLinksTemplate(){return t.html`
      <div
        class=${p.classMap({"footer__social-links":!0," footer__social-links--medium":this.variant==="medium"})}
      >
        ${u.repeat(this.socialUrls,e=>t.html`
            <a
              class="footer__link-btn"
              href=${e.url}
              aria-label="צ׳אט איתנו"
            >
              <igds-icon
                slot="icon"
                node=${e.icon}
              ></igds-icon>
              <span class="footer__accessibility-label"
                >${e.title}</span
              >
            </a>
          `)}
      </div>
    `}render(){return t.html`
      <footer class="footer" role="contentinfo">
        <igds-divider></igds-divider>
        ${s.when(this.variant==="large",()=>this.renderLargeVariantSection())}
        ${s.when(this.variant==="medium",()=>this.renderMediumVariantSection())}
        ${s.when(this.variant==="medium"||this.variant==="large",()=>t.html`
            <div class="footer__divider-wrapper">
              <igds-divider></igds-divider>
            </div>
          `)}
        ${this.renderMainFooter()}
      </footer>
    `}};exports.Footer.styles=E.unsafeCSS(w);i([r.property({type:String})],exports.Footer.prototype,"variant",2);i([r.property({type:String})],exports.Footer.prototype,"frontPageUrl",2);i([r.property({type:String})],exports.Footer.prototype,"copyright",2);i([r.property({type:String,reflect:!0})],exports.Footer.prototype,"logoUrl",2);i([r.property({type:String})],exports.Footer.prototype,"logoAlt",2);i([r.property({type:String,reflect:!0})],exports.Footer.prototype,"aboutUrl",2);i([r.property({type:String,reflect:!0})],exports.Footer.prototype,"termsUrl",2);i([r.property({type:String,reflect:!0})],exports.Footer.prototype,"accessibilityUrl",2);i([r.property({type:String})],exports.Footer.prototype,"phone",2);i([r.property({type:String})],exports.Footer.prototype,"email",2);i([r.property({type:Object,attribute:!1})],exports.Footer.prototype,"contactUs",2);i([r.property({type:Array})],exports.Footer.prototype,"socialUrls",2);i([f.state()],exports.Footer.prototype,"isMobile",2);exports.Footer=i([v.customElement($.IGDS_TAGS.footer)],exports.Footer);
