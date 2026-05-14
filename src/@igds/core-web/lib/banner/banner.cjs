"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const t=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),r=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),b=require("../constants/events.cjs"),h=require("../constants/tags.cjs");require("../button/button.cjs");const n=require("../button/constants.cjs"),g=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const m=require("./constants.cjs"),u=require("./banner.scss.cjs"),S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var y=Object.defineProperty,v=Object.getOwnPropertyDescriptor,e=(c,i,l,o)=>{for(var s=o>1?void 0:o?v(i,l):i,p=c.length-1,_;p>=0;p--)(_=c[p])&&(s=(o?_(i,l,s):_(s))||s);return o&&s&&y(i,l,s),s};exports.Banner=class extends g.IGDSElement{constructor(){super(...arguments),this.variant=m.IGDS_BANNER_VARIANT.textRight,this.imgSrc="",this.imageAlt="",this.title="",this.description=""}handleClick(i){i.stopPropagation(),this.emit(b.IGDS_EVENTS.click,"button clicked")}handleFooterClick(i){i.stopPropagation(),this.emit(b.IGDS_EVENTS.footerClick,"footer button link clicked"),this.footerActionUrl&&window.open(this.footerActionUrl,"_self")}renderTextRightBanner(){return t.html`
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
          ${a.when(this.description,()=>t.html` <p id="banner-description" class="banner__description">
              ${this.description}
            </p>`)}
          ${a.when(this.actionLabel,()=>t.html` <igds-button
              type=${n.IGDS_BUTTON_TYPES.button}
              variant=${n.IGDS_BUTTON_VARIANTS.primary}
              size=${n.IGDS_BUTTON_SIZES.medium}
              class="banner__btn"
              @igds-click=${this.handleClick}
              >${this.actionLabel}
            </igds-button>`)}
        </section>
      </div>

      ${a.when(this.footerActionLabel||this.footerText,()=>t.html`
          <div class="banner__divider-wrapper">
            <igds-divider></igds-divider>
          </div>
          <div class="banner__footer">
            <div class="banner__footer-content">
              <span>${this.footerText}</span>
              ${a.when(this.footerActionLabel,()=>t.html` <igds-button
                  type=${n.IGDS_BUTTON_TYPES.button}
                  variant=${n.IGDS_BUTTON_VARIANTS.link}
                  size=${n.IGDS_BUTTON_SIZES.medium}
                  @igds-click=${this.handleFooterClick}
                >
                  ${this.footerActionLabel}
                </igds-button>`)}
            </div>
          </div>
        `)}
    `}renderTextCenterBanner(){return t.html` <div class="banner__main banner__main--center-align">
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
        ${a.when(this.actionLabel,()=>t.html` <igds-button
            type=${n.IGDS_BUTTON_TYPES.button}
            variant=${n.IGDS_BUTTON_VARIANTS.primary}
            size=${n.IGDS_BUTTON_SIZES.medium}
            @igds-click=${this.handleClick}
          >
            ${this.actionLabel}
          </igds-button>`)}
      </section>
    </div>`}renderPictureOnlyBanner(){return t.html` <div class="banner__img-wrapper banner__img-wrapper--img-only">
      <img
        alt="${this.imageAlt}"
        src=${this.imgSrc}
        class="banner__image banner__image--img-only"
      />
    </div>`}render(){return t.html` <div
      class="banner"
      role="banner"
      aria-labelledby="banner-title"
      aria-describedby="banner-description"
    >
      ${a.when(this.variant==="text-right",()=>this.renderTextRightBanner())}
      ${a.when(this.variant==="text-center",()=>this.renderTextCenterBanner())}
      ${a.when(this.variant==="picture-only",()=>this.renderPictureOnlyBanner())}
    </div>`}};exports.Banner.styles=S.unsafeCSS(u);e([r.property({type:String})],exports.Banner.prototype,"variant",2);e([r.property({type:String,attribute:"img-src"})],exports.Banner.prototype,"imgSrc",2);e([r.property({type:String,attribute:"img-alt"})],exports.Banner.prototype,"imageAlt",2);e([r.property({type:String})],exports.Banner.prototype,"title",2);e([r.property({type:String})],exports.Banner.prototype,"description",2);e([r.property({type:String,attribute:"action-label"})],exports.Banner.prototype,"actionLabel",2);e([r.property({type:String,attribute:"footer-text"})],exports.Banner.prototype,"footerText",2);e([r.property({type:String,attribute:"footer-action-label"})],exports.Banner.prototype,"footerActionLabel",2);e([r.property({type:String,attribute:"footer-action-url"})],exports.Banner.prototype,"footerActionUrl",2);exports.Banner=e([d.customElement(h.IGDS_TAGS.banner)],exports.Banner);
