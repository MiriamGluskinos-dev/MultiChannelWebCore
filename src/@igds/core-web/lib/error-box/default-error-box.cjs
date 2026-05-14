"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs"),c=require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs"),u=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),E=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),g=require("../constants/tags.cjs");require("../icon/icon.cjs");const p=require("../icon/icon-sizes.cjs"),_=require("./constants.cjs"),h=require("../utils/common.cjs"),v=require("@igds/icons"),q=require("./default-error-box.scss.cjs"),x=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var D=Object.defineProperty,O=Object.getOwnPropertyDescriptor,s=(o,r,i,t)=>{for(var e=t>1?void 0:t?O(r,i):r,l=o.length-1,n;l>=0;l--)(n=o[l])&&(e=(t?n(r,i,e):n(e))||e);return t&&e&&D(r,i,e),e};const S=500;exports.DefaultErrorBox=class extends c.LitElement{constructor(){super(...arguments),this.errormessage=null,this.resizeHandler=h.throttle(()=>{this.checkOverflowing()},S)}firstUpdated(r){super.firstUpdated(r),this.checkOverflowing(),window.addEventListener("resize",this.resizeHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler)}checkOverflowing(){this.isOverflowed=this.message.scrollWidth>this.message.clientWidth}render(){return a.html`
      <article class="default-error-box__wrapper">
        <slot name="error-message">
          <section class="default-error-box">
            <igds-icon
              node=${v.alertCircleFilled}
              size=${p.IGDS_ICON_SIZES.large}
              class="default-error-box__icon"
            >
            </igds-icon>
            <div
              class="default-error-box__message-text"
              title=${m.ifDefined(this.isOverflowed&&this.errormessage?this.errormessage:void 0)}
            >
              ${this.errormessage||_.IGDS_DEFAULT_ERROR_MESSAGE}
            </div>
          </section>
        </slot>
      </article>
    `}};exports.DefaultErrorBox.styles=x.unsafeCSS(q);s([d.property({type:String,attribute:"errormessage"})],exports.DefaultErrorBox.prototype,"errormessage",2);s([E.query(".default-error-box__message-text")],exports.DefaultErrorBox.prototype,"message",2);s([f.state()],exports.DefaultErrorBox.prototype,"isOverflowed",2);exports.DefaultErrorBox=s([u.customElement(g.IGDS_TAGS.defaultErrorBox)],exports.DefaultErrorBox);
