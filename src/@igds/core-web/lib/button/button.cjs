"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const y=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const b=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),s=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),T=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),_=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),I=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),a=require("../constants/events.cjs"),B=require("../constants/tags.cjs"),n=require("./constants.cjs"),f=require("./button.scss.cjs"),m=require("./button-tokens.scss.cjs");require("../icon/icon.cjs");const g=require("@igds/icons"),S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var N=Object.defineProperty,v=Object.getOwnPropertyDescriptor,e=(u,t,o,i)=>{for(var r=i>1?void 0:i?v(t,o):t,h=u.length-1,c;h>=0;h--)(c=u[h])&&(r=(i?c(t,o,r):c(r))||r);return i&&r&&N(t,o,r),r};exports.Button=class extends y.IGDSElement{constructor(){super(),this.variant=n.IGDS_BUTTON_VARIANTS.primary,this.size=n.IGDS_BUTTON_SIZES.medium,this.disabled=!1,this.loading=!1,this.type=n.IGDS_BUTTON_TYPES.button,this.inverted=!1,this.iconOnly=!1,this.hasIcon=!1,this.hasSecondIcon=!1,this.hasNoText=!1,this._internals=this.attachInternals()}setAsButtonWithIcon(t){this.hasIcon=t}setAsButtonWithSecondIcon(t){this.hasSecondIcon=t}focus(){super.focus(),this.buttonElement.focus()}handleClick(t){this.type===n.IGDS_BUTTON_TYPES.submit&&this._internals.form!==null&&this._internals.form.requestSubmit(),this.emit(a.IGDS_EVENTS.click,t)}handleFocus(){this.emit(a.IGDS_EVENTS.focus,"focused")}handleBlur(){this.emit(a.IGDS_EVENTS.blur,"blurred")}handleKeydown(t){this.emit(a.IGDS_EVENTS.keydown,t)}handleKeyup(t){this.emit(a.IGDS_EVENTS.keyup,t)}handleIconSlotChange(t,o){if(!t.target)return;const i=t.target.assignedNodes({flatten:!0});o?this.setAsButtonWithSecondIcon(i.length>0):this.setAsButtonWithIcon(i.length>0)}updated(t){super.updated(t),t.has("iconOnly")&&(this.iconOnly?this.hasNoText=!0:this.checkButtonTextSlot())}checkButtonTextSlot(){const t=[...this.childNodes].some(o=>{if(!(!o.nodeValue||o.nodeValue.startsWith(`bindings={
`)))return o.nodeValue.replace(`
`,"").trim().length!==0});this.hasNoText=!t}getAriaLabel(){const t=this.getAttribute("aria-label")??this.label;return this.hasNoText&&!t&&console.warn('[igds-button] Button has no discernible text. Provide "label", "aria-label", or visible text content for accessibility.'),t}render(){return l.html`
      <button
        class=${I.classMap({button:!0,"button--primary":this.variant==n.IGDS_BUTTON_VARIANTS.primary,"button--secondary":this.variant==n.IGDS_BUTTON_VARIANTS.secondary,"button--alternative":this.variant==n.IGDS_BUTTON_VARIANTS.alternative,"button--link":this.variant==n.IGDS_BUTTON_VARIANTS.link||this.variant==n.IGDS_BUTTON_VARIANTS.linkInline,"button--inline":this.variant==n.IGDS_BUTTON_VARIANTS.linkInline,"button--large":this.size==n.IGDS_BUTTON_SIZES.large,"button--small":this.size==n.IGDS_BUTTON_SIZES.small,"button--loading":this.loading,"button--has-icon":this.hasIcon,"button--has-second-icon":this.hasSecondIcon,"button--has-icon-only":this.hasNoText,"button--inverted":this.inverted})}
        aria-label=${_.ifDefined(this.getAriaLabel())}
        type=${this.type}
        ?disabled=${this.disabled||this.loading}
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @keydown=${this.handleKeydown}
        @keyup=${this.handleKeyup}
      >
        <div class="button__content">
          ${d.when(this.loading,()=>l.html`<igds-icon
                node=${g.spinner}
                class="button__icon button__icon--animated"
              ></igds-icon>`,()=>l.html`<slot
                name="icon"
                class="button__icon"
                @slotchange=${t=>this.handleIconSlotChange(t)}
              ></slot>`)}
          ${d.when(!this.iconOnly,()=>l.html`<slot></slot>`)}
          <slot
            name="second-icon"
            class="button__second-icon"
            @slotchange=${t=>this.handleIconSlotChange(t,!0)}
          ></slot>
        </div>
      </button>
    `}};exports.Button.styles=[S.unsafeCSS(f),S.unsafeCSS(m)];exports.Button.formAssociated=!0;e([s.property({type:String})],exports.Button.prototype,"variant",2);e([s.property({type:String})],exports.Button.prototype,"size",2);e([s.property({type:Boolean})],exports.Button.prototype,"disabled",2);e([s.property({type:Boolean})],exports.Button.prototype,"loading",2);e([s.property({type:String})],exports.Button.prototype,"label",2);e([s.property({type:String})],exports.Button.prototype,"type",2);e([s.property({type:Boolean})],exports.Button.prototype,"inverted",2);e([s.property({type:Boolean,attribute:"icon-only"})],exports.Button.prototype,"iconOnly",2);e([p.state()],exports.Button.prototype,"hasIcon",2);e([p.state()],exports.Button.prototype,"hasSecondIcon",2);e([p.state()],exports.Button.prototype,"hasNoText",2);e([T.query("button")],exports.Button.prototype,"buttonElement",2);exports.Button=e([b.customElement(B.IGDS_TAGS.button)],exports.Button);
