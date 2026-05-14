"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const c=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),S=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),I=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),b=require("../constants/events.cjs"),y=require("../constants/tags.cjs"),l=require("@igds/icons"),v=require("./sidebar-item.scss.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,g=Object.getOwnPropertyDescriptor,e=(o,s,d,r)=>{for(var t=r>1?void 0:r?g(s,d):s,a=o.length-1,u;a>=0;a--)(u=o[a])&&(t=(r?u(s,d,t):u(t))||t);return r&&t&&q(s,d,t),t};exports.SidebarItem=class extends m.IGDSElement{constructor(){super(...arguments),this.disabled=!1,this.subMenu=!1,this.isSubMenuItem=!1,this.expanded=!1}render(){return n.html`
      <div
        role="menuitem"
        aria-expanded=${I.ifDefined(this.subMenu?this.expanded:void 0)}
        aria-disabled=${this.disabled}
        class=${S.classMap({"sidebar-item":!0,"sidebar-item--indented":!this.icon,"sidebar-item--disabled":this.disabled})}
        tabindex="0"
        @mouseenter=${this.onMouseEnter}
        @click=${this.onClick}
        @keydown=${()=>{}}
      >
        ${p.when(this.icon,()=>n.html`
            <igds-icon node=${this.icon} aria-hidden=${!this.icon}>
            </igds-icon>
          `)}
        <span class="sidebar-item__label">${this.label}</span>
        ${p.when(this.subMenu,()=>n.html`
            <igds-icon
              node=${this.expanded?l.chevronUp:l.chevronDown}
              class="sidebar-item__expand-icon"
            >
            </igds-icon>
          `)}
      </div>
      <igds-divider></igds-divider>
      ${p.when(this.expanded,()=>n.html`
          <div
            role="menu"
            aria-label="Sidebar submenu"
            class="sidebar-item__submenu"
          >
            <slot
              class="sidebar-submenu-slot"
              name="sidebar-submenu-item"
            ></slot>
          </div>
        `)}
    `}onMouseEnter(){this.emit(b.IGDS_EVENTS.hover,this.componentId)}onClick(){this.disabled||(this.subMenu?this.expanded=!this.expanded:this.emit(b.IGDS_EVENTS.click,this.componentId,{isSubMenuItem:this.isSubMenuItem}))}};exports.SidebarItem.styles=f.unsafeCSS(v);e([i.property({type:String,attribute:"id"})],exports.SidebarItem.prototype,"componentId",2);e([i.property({type:String})],exports.SidebarItem.prototype,"label",2);e([i.property({type:Boolean})],exports.SidebarItem.prototype,"disabled",2);e([i.property({type:Boolean,attribute:"submenu"})],exports.SidebarItem.prototype,"subMenu",2);e([i.property({type:String})],exports.SidebarItem.prototype,"icon",2);e([i.property({type:Boolean,attribute:"submenu-item"})],exports.SidebarItem.prototype,"isSubMenuItem",2);e([h.state()],exports.SidebarItem.prototype,"expanded",2);exports.SidebarItem=e([c.customElement(y.IGDS_TAGS.sidebarItem)],exports.SidebarItem);
