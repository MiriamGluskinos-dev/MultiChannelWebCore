"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const E=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),u=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),l=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),g=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),A=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),N=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const v=require("../constants/breakpoints.cjs"),y=require("../constants/events.cjs"),b=require("../constants/event-keys.cjs"),n=require("../constants/tags.cjs"),S=require("./constants.cjs"),f=require("../utils/common.cjs");require("../button/button.cjs");const c=require("../button/constants.cjs"),m=require("@igds/icons"),w=require("./header.scss.cjs");require("../icon/icon.cjs");require("../divider/divider.cjs");const $=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var T=Object.defineProperty,I=Object.getOwnPropertyDescriptor,a=(_,e,i,t)=>{for(var r=t>1?void 0:t?I(e,i):e,h=_.length-1,d;h>=0;h--)(d=_[h])&&(r=(t?d(e,i,r):d(r))||r);return t&&r&&T(e,i,r),r};const C=`(max-width: ${f.getCssValue(v.IGDS_BREAKPOINT_VARS.tablet,"768px")})`,D=`(max-width: ${f.getCssValue(v.IGDS_BREAKPOINT_VARS.desktopS,"1200px")})`;exports.Header=class extends N.IGDSElement{constructor(){super(),this.logoAlt="",this.frontPageUrl="/",this.variant=S.IGDS_HEADER_VARIANT.white,this.searchLabel="לְחַפֵּשׂ",this.isSearchExpanded=!1,this.isSearchButtonShown=!0,this.isBottomNav=!1,this.hasSearch=!1,this.isMobile=!1,this.isTablet=!1,this.expandSearch=()=>{this.searchContainer&&this.searchContainer.classList.add("header__search--visible"),this.searchEl&&(this.searchEl.classList.add("header__search-field-wrapper--block"),this.searchEl.setAttribute("aria-hidden","false"),setTimeout(()=>{this.searchEl.classList.add("header__search-field-wrapper--visible"),this.searchEl.setAttribute("tabindex","0"),this.searchEl.focus()},0))},this.collapseSearch=()=>{this.searchEl&&(this.searchEl.classList.remove("header__search-field-wrapper--visible"),this.searchContainer.classList.remove("header__search--visible"),this.searchEl.classList.remove("header__search-field-wrapper--block"),this.searchEl.setAttribute("aria-hidden","true"),this.searchEl.setAttribute("tabindex","-1"),this.isSearchExpanded=!1,this.isSearchButtonShown=!0)},this.handleShowSearch=e=>{e.stopPropagation(),this.isMobile&&(this.isSearchExpanded=!0),this.isSearchButtonShown=!1,this.expandSearch()},this.handleLogoClick=(e,i)=>{i?.preventDefault(),this.emit(y.IGDS_EVENTS.logoClick,e)},this.handleLogoKeyDown=e=>{(e.key===b.IGDS_EVENT_KEYS.Enter||e.key===b.IGDS_EVENT_KEYS.Space)&&this.handleLogoClick("idle")},this._mobileMediaQueryObserver=window.matchMedia(C),this._tabletMediaQueryObserver=window.matchMedia(D),this.handleScreenChange=this.handleScreenChange.bind(this)}connectedCallback(){super.connectedCallback(),this._mobileMediaQueryObserver.addEventListener("change",this.handleScreenChange),this._tabletMediaQueryObserver.addEventListener("change",this.handleScreenChange),this.handleScreenChange()}disconnectedCallback(){super.disconnectedCallback(),this._mobileMediaQueryObserver.removeEventListener("change",this.handleScreenChange),this._tabletMediaQueryObserver.removeEventListener("change",this.handleScreenChange),this.mutationObserver?.disconnect()}handleScreenChange(){this.isMobile=this._mobileMediaQueryObserver.matches,this.isTablet=this._tabletMediaQueryObserver.matches,this.searchElement!==void 0&&(this.isTablet?this.searchElement.removeAttribute("show-clear"):this.searchElement.setAttribute("show-clear",""),this.authElement!==void 0&&(this.authElement.setAttribute("variant",this.isMobile?c.IGDS_BUTTON_VARIANTS.alternative:c.IGDS_BUTTON_VARIANTS.secondary),this.isMobile?this.authElement.setAttribute("icon-only",""):this.authElement.removeAttribute("icon-only")))}get isOnFrontPage(){return window.location.href===new URL(this.frontPageUrl,window.location.origin).href}handleBottomNavSlotChange(e){const r=e.target.assignedNodes({flatten:!0}).some(h=>h.nodeType===Node.ELEMENT_NODE);this.isBottomNav=r}handleSearchSlotChange(e){if(!e.target)return;const i=e.target.assignedNodes({flatten:!0});this.searchElement=i.find(t=>t.tagName.toLowerCase()===n.IGDS_TAGS.searchField),this.searchElement!==void 0&&(this.hasSearch=!0,this.isTablet||this.searchElement.setAttribute("show-clear",""))}handleAuthSlotChange(e){if(!e.target)return;const i=e.target.assignedNodes({flatten:!0});this.authElement=i.find(t=>t.tagName.toLowerCase()===n.IGDS_TAGS.button),this.authElement!==void 0&&(this.isMobile&&(this.authElement.setAttribute("variant",c.IGDS_BUTTON_VARIANTS.alternative),this.authElement.setAttribute("icon-only","")),this.variant===S.IGDS_HEADER_VARIANT.brand&&this.authElement.setAttribute("inverted",""))}handleNavSlotChange(e){if(!e.target||this.variant===S.IGDS_HEADER_VARIANT.white)return;e.target.assignedNodes({flatten:!0}).forEach(t=>{if(t.tagName){if(t.tagName.toLowerCase()===n.IGDS_TAGS.popupMenu){const r=t.querySelector(`${n.IGDS_TAGS.button}[slot="trigger"]`);r&&r.setAttribute("inverted","")}t.tagName.toLowerCase()===n.IGDS_TAGS.button&&t.setAttribute("inverted","")}})}handleHamburgerMenuOpen(){this.hamburgerIcon&&this.hamburgerIcon.setAttribute("name","close")}handleHamburgerMenuClose(){this.hamburgerIcon&&this.hamburgerIcon.setAttribute("name","menu")}findHamburgerButton(e){if(!e.target)return;const t=e.target.assignedNodes({flatten:!0}).find(d=>d.tagName.toLowerCase()===n.IGDS_TAGS.popupMenu);if(!t)return;const r=t.querySelector(`${n.IGDS_TAGS.button}[slot="trigger"]`);if(!r)return;const h=r.querySelector(`${n.IGDS_TAGS.icon}[slot="icon"]`);h&&(this.hamburgerIcon=h)}renderHamburgerSlot(){return s.html`
      <div
        class=${o.classMap({header__hamburger:!0,"header__hamburger--extra-margin":!this.isSearchExpanded})}
        @igds-open=${this.handleHamburgerMenuOpen}
        @igds-close=${this.handleHamburgerMenuClose}
      >
        <slot name="hamburger" @slotchange=${this.findHamburgerButton}></slot>
      </div>
    `}renderLogo(){if(!this.isSearchExpanded)return g.when(this.isOnFrontPage,()=>s.html`
        <div
          class="header__logo"
          aria-label="אתה בדף הבית"
          title="דף הבית"
          @click=${()=>this.handleLogoClick("idle")}
          @keydown=${this.handleLogoKeyDown}
        >
          <img
            src="${this.logoUrl}"
            alt="${this.logoAlt}"
            class="header__logo-image"
          />
        </div>
      `,()=>s.html`
        <a
          class="header__logo"
          href="${this.frontPageUrl}"
          aria-label="עבור אל העמוד הראשי"
          title="לעמוד הראשי"
          @click=${e=>this.handleLogoClick("navigate",e)}
        >
          <img
            src="${this.logoUrl}"
            alt="${this.logoAlt}"
            class="header__logo-image"
          />
        </a>
      `)}renderNavSlot(){return s.html`
      <nav class="header__nav" aria-label="ניווט ראשי">
        <slot @slotchange=${this.handleNavSlotChange}></slot>
      </nav>
    `}renderNavigation(){return s.html`
      <nav
        class=${o.classMap({"header__extra-nav":!0,"header__extra-nav--hidden":!this.isSearchButtonShown})}
        aria-label="ניווט נוסף"
        aria-hidden=${A.ifDefined(this.isSearchButtonShown?"true":void 0)}
      >
        <slot name="extra-nav" @slotchange=${this.handleNavSlotChange}></slot>
      </nav>
    `}renderSearch(){return s.html`
      <div
        class="header__search"
        class=${o.classMap({header__search:!0,"header__search--hidden":!this.hasSearch})}
        tabindex="-1"
        aria-hidden="true"
      >
        <div
          class="header__search-field-wrapper"
          @igds-clear=${this.collapseSearch}
        >
          <slot name="search" @slotchange=${this.handleSearchSlotChange}></slot>
        </div>

        ${g.when(this.isSearchButtonShown,()=>s.html`
            <igds-button
              variant=${c.IGDS_BUTTON_VARIANTS.alternative}
              class="header__search-button"
              @click=${this.handleShowSearch}
              label=${this.searchLabel}
              ?inverted=${this.variant===S.IGDS_HEADER_VARIANT.brand}
            >
              <igds-icon slot="icon" node=${m.search}></igds-icon>
            </igds-button>
          `)}
      </div>
    `}renderAuth(){return s.html`
      <div class=${o.classMap({"header__full-width-block":!this.hasSearch})}>
        ${g.when(!this.isSearchExpanded,()=>s.html`<slot
              name="auth"
              @slotchange=${this.handleAuthSlotChange}
            ></slot>`,()=>s.html`
            <igds-button
              variant=${c.IGDS_BUTTON_VARIANTS.alternative}
              @click=${this.collapseSearch}
            >
              <igds-icon
                slot="icon"
                node=${m.arrow}
                class="header__back-icon"
              ></igds-icon>
            </igds-button>
          `)}
      </div>
    `}renderBottomNavigation(){return s.html`
      <div
        class=${o.classMap({"header__bottom-nav":!0,"header__bottom-nav--empty":!this.isBottomNav})}
        role="navigation"
        aria-label="ניווט תחתון"
      >
        ${g.when(this.variant==="white"&&this.isBottomNav,()=>s.html`<igds-divider></igds-divider>`)}
        <div
          class=${o.classMap({"header__bottom-nav-content":!0,"header__bottom-nav-content--empty":!this.isBottomNav})}
        >
          <slot
            name="bottom"
            @slotchange=${this.handleBottomNavSlotChange}
          ></slot>
        </div>
      </div>
    `}render(){return s.html`
      <header class="header header--${this.variant}">
        <div
          class=${o.classMap({"header__top-row":!0,"header__top-row--brand":this.variant==="brand"})}
        >
          ${this.renderHamburgerSlot()} ${this.renderLogo()}
          ${this.renderNavSlot()} ${this.renderNavigation()}
          ${this.renderSearch()} ${this.renderAuth()}
        </div>
        ${this.renderBottomNavigation()}
      </header>
    `}};exports.Header.styles=$.unsafeCSS(w);a([u.property({type:String})],exports.Header.prototype,"logoUrl",2);a([u.property({type:String})],exports.Header.prototype,"logoAlt",2);a([u.property({type:String})],exports.Header.prototype,"frontPageUrl",2);a([u.property({type:String})],exports.Header.prototype,"variant",2);a([u.property({type:String})],exports.Header.prototype,"searchLabel",2);a([l.state()],exports.Header.prototype,"isSearchExpanded",2);a([l.state()],exports.Header.prototype,"isSearchButtonShown",2);a([l.state()],exports.Header.prototype,"isBottomNav",2);a([l.state()],exports.Header.prototype,"hasSearch",2);a([l.state()],exports.Header.prototype,"isMobile",2);a([l.state()],exports.Header.prototype,"isTablet",2);a([p.query(".header__search")],exports.Header.prototype,"searchContainer",2);a([p.query(".header__search-field-wrapper")],exports.Header.prototype,"searchEl",2);exports.Header=a([E.customElement(n.IGDS_TAGS.header)],exports.Header);
