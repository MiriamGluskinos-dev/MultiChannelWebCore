"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const I=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),D=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),C=require("../constants/breakpoints.cjs"),l=require("../constants/events.cjs"),f=require("../constants/tags.cjs"),t=require("./constants.cjs");require("../button/button.cjs");const d=require("../button/constants.cjs"),A=require("../utils/common.cjs");require("../icon/icon.cjs");const y=require("@igds/icons"),g=require("./card.scss.cjs"),m=require("./card-tokens.scss.cjs"),b=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var T=Object.defineProperty,R=Object.getOwnPropertyDescriptor,e=(p,r,h,o)=>{for(var n=o>1?void 0:o?R(r,h):r,S=p.length-1,u;S>=0;S--)(u=p[S])&&(n=(o?u(r,h,n):u(n))||n);return o&&n&&T(r,h,n),n};exports.Card=class extends I.IGDSElement{constructor(){super(),this.variant=t.IGDS_CARD_VARIANTS.basic,this.type=t.IGDS_CARD_TYPES.clickable,this.size=t.IGDS_CARD_SIZES.small,this.direction=t.IGDS_CARD_DIRECTIONS.horizontal,this.interactive=!1,this.disabled=!1,this.title="",this.imageSrc="",this.imageFit=t.IGDS_CARD_IMAGE_FIT.fill,this.favoriteVisible=!1,this.defaultFavoriteState=!1,this.favoriteIconStateActive=y.heartFilled,this.favoriteIconStateInactive=y.heartOutlined,this.favoriteLabel="Favorite",this.forcedDirection=this.getForcedDirection(),this.favoriteState=this.defaultFavoriteState??!1,this.isAnyFullPicture=this.variant===t.IGDS_CARD_VARIANTS.fullPictureLight||this.variant===t.IGDS_CARD_VARIANTS.fullPictureDark||!1,this.updateWidth=this.updateWidth.bind(this)}willUpdate(r){r.has("variant")&&(this.isAnyFullPicture=this.variant===t.IGDS_CARD_VARIANTS.fullPictureLight||this.variant===t.IGDS_CARD_VARIANTS.fullPictureDark)}connectedCallback(){super.connectedCallback(),this.updateWidth(),window.addEventListener("resize",this.updateWidth)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.updateWidth)}updateWidth(){requestAnimationFrame(()=>{this.forcedDirection=this.getForcedDirection()})}getForcedDirection(){const r=this.getForcedDirectionBreakpointWidth();return window.innerWidth>=r?this.direction??"horizontal":(this.type??"clickable")==="cta"||(this.size??"small")==="large"?"vertical":this.direction??"horizontal"}getForcedDirectionBreakpointWidth(){return parseInt(A.getCssValue(C.IGDS_BREAKPOINT_VARS.tablet,"768px").replace("px",""))||768}getImageFitClassModifier(r,h="",o=!0){return r===void 0||!o?{}:{[`${h}--fit-${r}`]:!0}}handleClick(r){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.click,"clicked")}handleFavoriteToggle(r){this.disabled||(r.preventDefault(),this.favoriteState=this.favoriteState?!this.favoriteState:!this.defaultFavoriteState,this.emit(l.IGDS_EVENTS.favoriteToggle,{favorite:this.favoriteState}))}handlePrimaryAction(){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.primaryClick,"primaryClicked")}handleSecondaryAction(){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.secondaryClick,"secondaryClicked")}handleKeydown(r){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.keydown,"keydown")}handleKeyup(r){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.keydown,"keyup")}handleFocus(r){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.focus,"focused")}handleBlur(r){!this.interactive||this.disabled||this.emit(l.IGDS_EVENTS.blur,"blurred")}getCardTabindex(){return this.interactive&&!this.disabled?0:-1}getCardCssClasses(){return D.classMap({card:!0,"card--variant-basic":this.variant===t.IGDS_CARD_VARIANTS.basic,"card--variant-full-picture":this.isAnyFullPicture,"card--variant-full-picture-light":this.variant===t.IGDS_CARD_VARIANTS.fullPictureLight,"card--variant-full-picture-dark":this.variant===t.IGDS_CARD_VARIANTS.fullPictureDark,"card--direction-horizontal":this.forcedDirection===t.IGDS_CARD_DIRECTIONS.horizontal,"card--direction-vertical":this.forcedDirection===t.IGDS_CARD_DIRECTIONS.vertical,"card--type-cta":this.type===t.IGDS_CARD_TYPES.cta,"card--type-clickable":this.type===t.IGDS_CARD_TYPES.clickable,"card--size-large":this.size===t.IGDS_CARD_SIZES.large||this.type===t.IGDS_CARD_TYPES.cta,"card--size-small":this.size===t.IGDS_CARD_SIZES.small&&this.type===t.IGDS_CARD_TYPES.clickable,"card--disabled":this.disabled&&this.type===t.IGDS_CARD_TYPES.clickable,"card--interactive":this.interactive&&this.type===t.IGDS_CARD_TYPES.clickable})}renderFavoriteButton(){return s.when(this.favoriteVisible&&this.forcedDirection===t.IGDS_CARD_DIRECTIONS.vertical&&(this.type===t.IGDS_CARD_TYPES.clickable?this.size===t.IGDS_CARD_SIZES.large:!0),()=>a.html`<igds-button
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
            node=${this.favoriteState?this.favoriteIconStateActive:this.favoriteIconStateInactive}
          ></igds-icon>
        </igds-button>`)}renderCtaButtons(){return s.when(this.type===t.IGDS_CARD_TYPES.cta,()=>a.html`<footer class="card__footer" aria-label="Card Footer">
        ${s.when(this.secondaryActionLabel,()=>a.html`<igds-button
            variant="${d.IGDS_BUTTON_VARIANTS.secondary}"
            size="${d.IGDS_BUTTON_SIZES.medium}"
            type="${d.IGDS_BUTTON_TYPES.button}"
            label="${c.ifDefined(this.secondaryActionLabel)}"
            aria-label="${c.ifDefined(this.secondaryActionLabel)}"
            @igds-click="${this.handleSecondaryAction}"
          >
            ${this.secondaryActionLabel}
          </igds-button>`)}
        <igds-button
          variant="${d.IGDS_BUTTON_VARIANTS.primary}"
          size="${d.IGDS_BUTTON_SIZES.medium}"
          type="${d.IGDS_BUTTON_TYPES.button}"
          label="${c.ifDefined(this.primaryActionLabel)}"
          aria-label="${c.ifDefined(this.primaryActionLabel)}"
          @igds-click="${this.handlePrimaryAction}"
        >
          ${this.primaryActionLabel}
        </igds-button>
      </footer>`)}renderCardImage(){return s.when(this.variant===t.IGDS_CARD_VARIANTS.basic||this.isAnyFullPicture&&this.forcedDirection===t.IGDS_CARD_DIRECTIONS.vertical&&this.size===t.IGDS_CARD_SIZES.large,()=>a.html` <div class="card__media" aria-label="Card Media">
        ${s.when(this.imageSrc&&this.variant===t.IGDS_CARD_VARIANTS.basic,()=>a.html`<img
              src=${this.imageSrc}
              alt=${c.ifDefined(this.imageAlt?this.imageAlt:void 0)}
              class="${D.classMap({"card__media-image":!0,...this.getImageFitClassModifier(this.imageFit,"card__media-image")})}"
            />`,()=>s.when(this.variant===t.IGDS_CARD_VARIANTS.basic,()=>a.html`<span class="card__media-placeholder">no image</span>`))}
        ${this.renderFavoriteButton()}
      </div>`)}hasSubtitle(){return this.subtitle&&(this.type===t.IGDS_CARD_TYPES.cta||this.type===t.IGDS_CARD_TYPES.clickable&&this.size===t.IGDS_CARD_SIZES.small)}hasDescription(){return this.description&&this.type===t.IGDS_CARD_TYPES.clickable&&this.size!==t.IGDS_CARD_SIZES.small}hasLabel(){return this.label&&this.type===t.IGDS_CARD_TYPES.clickable&&(this.variant===t.IGDS_CARD_VARIANTS.basic&&this.size===t.IGDS_CARD_SIZES.large||this.isAnyFullPicture)}render(){return a.html`
      <article
        tabindex="${this.getCardTabindex()}"
        aria-label="${this.title}"
        @click="${this.handleClick}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @keydown="${this.handleKeydown}"
        @keyup="${this.handleKeyup}"
        class="${this.getCardCssClasses()}"
        style="${c.ifDefined(this.isAnyFullPicture?`background-image: url('${this.imageSrc}')`:void 0)}"
      >
        ${this.renderCardImage()}
        <div class="card__content">
          <header aria-label="Card Header" class="card__header">
            <h2 class="card__header-title">${this.title}</h2>
            ${s.when(this.hasSubtitle(),()=>a.html`<h3 class="card__header-subtitle">${this.subtitle}</h3>`)}
            ${s.when(this.hasDescription(),()=>a.html`<p class="card__header-description">
                  ${this.description}
                </p>`)}
            ${s.when(this.hasLabel(),()=>a.html`<small class="card__header-label">${this.label}</small>`)}
          </header>
          ${this.renderCtaButtons()}
        </div>
      </article>
    `}};exports.Card.styles=[b.unsafeCSS(g),b.unsafeCSS(m)];e([i.property({type:String})],exports.Card.prototype,"variant",2);e([i.property({type:String})],exports.Card.prototype,"type",2);e([i.property({type:String})],exports.Card.prototype,"size",2);e([i.property({type:String})],exports.Card.prototype,"direction",2);e([i.property({type:Boolean})],exports.Card.prototype,"interactive",2);e([i.property({type:Boolean})],exports.Card.prototype,"disabled",2);e([i.property({type:String})],exports.Card.prototype,"title",2);e([i.property({type:String})],exports.Card.prototype,"subtitle",2);e([i.property({type:String})],exports.Card.prototype,"description",2);e([i.property({type:String,attribute:"image-src"})],exports.Card.prototype,"imageSrc",2);e([i.property({type:String,attribute:"image-fit"})],exports.Card.prototype,"imageFit",2);e([i.property({type:String,attribute:"image-alt"})],exports.Card.prototype,"imageAlt",2);e([i.property({type:String})],exports.Card.prototype,"label",2);e([i.property({type:Boolean,attribute:"favorite-visible"})],exports.Card.prototype,"favoriteVisible",2);e([i.property({type:Boolean,attribute:"default-favorite-state"})],exports.Card.prototype,"defaultFavoriteState",2);e([i.property({type:String,attribute:"favorite-icon-state-active"})],exports.Card.prototype,"favoriteIconStateActive",2);e([i.property({type:String,attribute:"favorite-icon-state-inactive"})],exports.Card.prototype,"favoriteIconStateInactive",2);e([i.property({type:String,attribute:"favorite-label"})],exports.Card.prototype,"favoriteLabel",2);e([i.property({type:String,attribute:"primary-action-label"})],exports.Card.prototype,"primaryActionLabel",2);e([i.property({type:String,attribute:"secondary-action-label"})],exports.Card.prototype,"secondaryActionLabel",2);e([_.state()],exports.Card.prototype,"forcedDirection",2);e([_.state()],exports.Card.prototype,"favoriteState",2);e([_.state()],exports.Card.prototype,"isAnyFullPicture",2);exports.Card=e([v.customElement(f.IGDS_TAGS.card)],exports.Card);
