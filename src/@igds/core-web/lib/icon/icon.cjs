"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs"),l=require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs"),m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),o=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),h=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/unsafe-svg.cjs"),S=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),a=require("./icon-sizes.cjs"),y=require("./icon.scss.cjs"),g=require("../constants/tags.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var f=Object.defineProperty,d=Object.getOwnPropertyDescriptor,n=(i,e,r,s)=>{for(var t=s>1?void 0:s?d(e,r):e,c=i.length-1,p;c>=0;c--)(p=i[c])&&(t=(s?p(e,r,t):p(t))||t);return s&&t&&f(e,r,t),t};exports.Icon=class extends l.LitElement{constructor(){super(...arguments),this._iconSize=24,this.color="inherit",this.accessibleName=""}set size(e){this._iconSize=this.getIconSizeInPixels(e)}get size(){return this._iconSize}getIconSizeInPixels(e){if(typeof e=="number")return e;if(typeof e=="string"){const r=Number.parseInt(e);if(!Number.isNaN(r))return r}return e===a.IGDS_ICON_SIZES.small?16:e===a.IGDS_ICON_SIZES.medium?20:24}updated(e){super.updated(e),e.has("name")&&this.name&&console.warn(`
            Starting from version 0.1.29, the igds-icon component no longer supports the name property.
            Use the node property instead. The required icon nodes can be found and imported from the
            @igds/icons library.
      `)}render(){return u.html`
      <svg
        style="color: ${this.color}"
        xmlns="http://www.w3.org/2000/svg"
        width=${this.size}
        height=${this.size}
        viewBox="0 0 24 24"
        role="presentation"
        class="icon"
      >
        ${S.when(this.accessibleName,()=>u.html`<title>${this.accessibleName}</title>`)}
        ${h.unsafeSVG(this.node)}
      </svg>
    `}};exports.Icon.styles=I.unsafeCSS(y);n([o.property({type:String})],exports.Icon.prototype,"name",2);n([o.property({type:String})],exports.Icon.prototype,"node",2);n([o.property({type:String})],exports.Icon.prototype,"color",2);n([o.property({type:String,attribute:"accessible-name"})],exports.Icon.prototype,"accessibleName",2);n([o.property({type:String})],exports.Icon.prototype,"size",1);exports.Icon=n([m.customElement(g.IGDS_TAGS.icon)],exports.Icon);
