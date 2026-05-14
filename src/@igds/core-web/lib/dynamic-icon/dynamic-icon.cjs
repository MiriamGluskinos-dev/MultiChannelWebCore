"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs"),p=require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs"),u=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),y=require("@igds/icons"),d=require("./dynamic-icon.types.cjs"),b=require("../constants/tags.cjs");require("../icon/icon.cjs");function f(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const n in t)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}return e.default=t,Object.freeze(e)}const m=f(y);var g=Object.defineProperty,I=Object.getOwnPropertyDescriptor,c=(t,e,n,r)=>{for(var o=r>1?void 0:r?I(e,n):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(o=(r?a(e,n,o):a(o))||o);return r&&o&&g(e,n,o),o};const h=m;exports.DynamicIcon=class extends p.LitElement{constructor(){super(...arguments),this.color="inherit",this.accessibleName=""}render(){if(!d.isIconName(this.name))return this.handleInvalidIcon(),this.renderFallback();const e=h[this.name];return l.html`
      <igds-icon
        .node=${e}
        .color=${this.color}
        .size=${this.size}
        .accessibleName=${this.accessibleName}
      ></igds-icon>
    `}handleInvalidIcon(){console.warn(`[igds-dynamic-icon] Invalid icon name: "${this.name}". Rendering fallback icon.`)}renderFallback(){return l.html`
      <igds-icon
        .node=${m.alertCircle}
        .color=${"var(--igds-color-error, #ff6b6b)"}
        .size=${this.size}
        .accessibleName=${"Icon not found: "+this.name}
        title="Icon not found: ${this.name}"
        style="opacity: 0.6;"
        data-fallback="true"
      ></igds-icon>
    `}};c([i.property({type:String})],exports.DynamicIcon.prototype,"name",2);c([i.property({type:String})],exports.DynamicIcon.prototype,"color",2);c([i.property({type:String})],exports.DynamicIcon.prototype,"size",2);c([i.property({type:String,attribute:"accessible-name"})],exports.DynamicIcon.prototype,"accessibleName",2);exports.DynamicIcon=c([u.customElement(b.IGDS_TAGS.dynamicIcon)],exports.DynamicIcon);
