"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),l=require("../node_modules/.pnpm/@floating-ui_dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.cjs"),y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),c=require("../utils/common.cjs"),E=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const I=require("../constants/breakpoints.cjs"),b=require("../constants/events.cjs"),_=require("../constants/tags.cjs"),f=require("./constants.cjs"),g=require("./menu-item.scss.cjs"),M=require("@igds/icons"),w=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,$=Object.getOwnPropertyDescriptor,t=(m,e,r,u)=>{for(var s=u>1?void 0:u?$(e,r):e,a=m.length-1,h;a>=0;a--)(h=m[a])&&(s=(u?h(e,r,s):h(s))||s);return u&&s&&q(e,r,s),s};exports.MenuItem=class extends E.IGDSElement{constructor(){super(),this.CSS_QUERY=`(max-width: ${c.getCssValue(I.IGDS_BREAKPOINT_VARS.mobile,"360px")})`,this.disabled=!1,this.subMenu=!1,this.withDivider=!1,this.isSubMenuShown=!1,this._mediaQueryObserver=window.matchMedia(this.CSS_QUERY),this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.updateDeviceType=this.updateDeviceType.bind(this)}firstUpdated(e){super.firstUpdated(e),this.isMobile()||this.setMenuItemEventListeners(),this._mediaQueryObserver.addEventListener("change",this.updateDeviceType)}updateDeviceType(){this.subMenu&&!this.isMobile()?this.setMenuItemEventListeners():this.removeMenuItemEventListeners()}isMobile(){return this._mediaQueryObserver.matches}setMenuItemEventListeners(){this.menuItemElement.addEventListener("mouseenter",this.onMouseEnter),this.menuItemElement.addEventListener("mouseleave",this.onMouseLeave)}removeMenuItemEventListeners(){this.menuItemElement.removeEventListener("mouseenter",this.onMouseEnter),this.menuItemElement.removeEventListener("mouseleave",this.onMouseLeave)}onMouseEnter(){this.isSubMenuShown=!0,this.emit(b.IGDS_EVENTS.hover,this.label)}onMouseLeave(){this.isSubMenuShown=!1}updated(){this.isSubMenuShown&&this.setSubmenuPosition()}render(){return n.html`
      <div
        role="menuitem"
        class=${d.classMap({"menu-item":!0,"menu-item--disabled":this.disabled,"menu-item--positioned":this.subMenu})}
        aria-haspopup=${p.ifDefined(this.subMenu?"menu":void 0)}
        aria-expanded=${p.ifDefined(this.subMenu?this.isSubMenuShown:void 0)}
        @click=${this.onSelect}
        @keydown=${()=>{}}
      >
        ${o.when(this.icon,()=>n.html`
            <igds-icon
              class="menu-item__icon"
              node=${this.icon}
              aria-hidden=${!this.icon}
            >
            </igds-icon>
          `)}
        <span
          class=${d.classMap({"menu-item__content":!0,"menu-item__content--disabled":this.disabled})}
        >
          ${o.when(this.header,()=>n.html` <span class="menu-item__header">${this.header}</span> `)}
          <span
            class=${d.classMap({"menu-item__label":!0,"menu-item__label--disabled":this.disabled,"menu-item__label--smaller":!!this.header})}
          >
            ${this.label}
          </span>
        </span>
        ${this.getSubMenu()}
      </div>
      ${o.when(this.withDivider,()=>n.html` <igds-divider></igds-divider> `)}
    `}getSubMenu(){const e=c.getDirection(this);return n.html`
      ${o.when(this.subMenu,()=>n.html`
          <igds-icon
            class="menu-item__submenu-indicator"
            node=${e==="rtl"?M.chevronLeft:M.chevronRight}
          >
          </igds-icon>
          ${o.when(this.isSubMenuShown&&!this.isMobile(),()=>n.html`
              <div
                id="menu-item-submenu"
                role="menu"
                class="menu-item__submenu"
              >
                <slot class="submenu-slot" name="submenu-item"></slot>
              </div>
            `)}
        `)}
    `}onSelect(){this.disabled||this.subMenu&&!this.isMobile()||this.emit(b.IGDS_EVENTS.click,this.label,{id:this.componentId,subMenu:this.subMenu})}async setSubmenuPosition(){if(!this.menuItemElement)return;const e=this.shadowRoot?.getElementById("menu-item-submenu");if(!e)return;const{x:r,y:u}=await l.computePosition(this.menuItemElement,e,{placement:this.getSubMenuPlacement(),middleware:[l.offset(1),l.size({apply(){Object.assign(e.style,{width:`${f.MENU_WIDTH}px`})}})]});Object.assign(e.style,{left:`${r}px`,top:`${u}px`})}getSubMenuPlacement(){return c.getDirection(this)==="rtl"?"left-start":"right-start"}disconnectedCallback(){super.disconnectedCallback(),this.menuItemElement.removeEventListener("mouseenter",this.onMouseEnter),this.menuItemElement.removeEventListener("mouseleave",this.onMouseLeave)}};exports.MenuItem.styles=w.unsafeCSS(g);t([i.property({type:String,attribute:"id"})],exports.MenuItem.prototype,"componentId",2);t([i.property({type:String})],exports.MenuItem.prototype,"label",2);t([i.property({type:String})],exports.MenuItem.prototype,"header",2);t([i.property({type:String})],exports.MenuItem.prototype,"icon",2);t([i.property({type:Boolean})],exports.MenuItem.prototype,"disabled",2);t([i.property({type:Boolean,attribute:"submenu"})],exports.MenuItem.prototype,"subMenu",2);t([i.property({type:Boolean})],exports.MenuItem.prototype,"withDivider",2);t([S.state()],exports.MenuItem.prototype,"isSubMenuShown",2);t([v.query(".menu-item")],exports.MenuItem.prototype,"menuItemElement",2);t([v.query(".submenu-slot")],exports.MenuItem.prototype,"subMenuSlotElement",2);exports.MenuItem=t([y.customElement(_.IGDS_TAGS.menuItem)],exports.MenuItem);
