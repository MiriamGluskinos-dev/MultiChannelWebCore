"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),s=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),_=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),y=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const v=require("../utils/common.cjs"),u=require("../constants/events.cjs"),d=require("../constants/event-keys.cjs"),E=require("../constants/tags.cjs"),g=require("./constants.cjs");require("../icon/icon.cjs");const h=require("../icon/icon-sizes.cjs"),b=require("@igds/icons"),f=require("./tag.scss.cjs"),q=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,i=(o,e,n,r)=>{for(var t=r>1?void 0:r?T(e,n):e,a=o.length-1,l;a>=0;a--)(l=o[a])&&(t=(r?l(e,n,t):l(t))||t);return r&&t&&D(e,n,t),t};exports.Tag=class extends y.IGDSElement{constructor(){super(...arguments),this.size=g.IGDS_TAG_SIZES.medium,this.icon="",this.disabled=!1,this.removable=!1}firstUpdated(){this.id||(this.id=v.generateId())}handleClick(){this.emit(u.IGDS_EVENTS.select,"tag selected",{id:this.id})}handleRemove(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}e.stopPropagation(),this.removable&&this.emit(u.IGDS_EVENTS.remove,"tag removed",{id:this.id})}handleKeyDown(e){[d.IGDS_EVENT_KEYS.Enter,d.IGDS_EVENT_KEYS.Space,d.IGDS_EVENT_KEYS.Backspace].includes(e.key)&&(this.handleRemove(e),e.preventDefault())}getRole(){return this.parentElement?.tagName.toLowerCase()==="igds-tag-group"?"listitem":void 0}render(){return c.html`
      <div role="${m.ifDefined(this.getRole()?this.getRole():void 0)}">
        <button
          class=${_.classMap({tag:!0,"tag--small":this.size===g.IGDS_TAG_SIZES.small})}
          ?disabled=${this.disabled}
          @click="${this.handleClick}"
          @keydown="${this.handleKeyDown}"
        >
          ${p.when(this.icon,()=>c.html`<igds-icon
                size=${h.IGDS_ICON_SIZES.large}
                class="tag__icon"
                node=${this.icon}
                aria-hidden="true"
              ></igds-icon>`)}
          <slot></slot>
          ${p.when(this.removable,()=>c.html`
              <span
                class="tag__button"
                role="button"
                tabindex=${this.disabled?"-1":"0"}
                aria-label="Remove tag"
                @click="${this.handleRemove}"
                @keydown="${this.handleKeyDown}"
              >
                <igds-icon
                  size=${h.IGDS_ICON_SIZES.large}
                  node=${b.close}
                  class="tag__button-icon"
                  aria-hidden="true"
                ></igds-icon>
              </span>
            `)}
        </button>
      </div>
    `}};exports.Tag.styles=q.unsafeCSS(f);i([s.property({type:String,reflect:!0})],exports.Tag.prototype,"id",2);i([s.property({type:String})],exports.Tag.prototype,"size",2);i([s.property({type:String})],exports.Tag.prototype,"icon",2);i([s.property({type:Boolean})],exports.Tag.prototype,"disabled",2);i([s.property({type:Boolean})],exports.Tag.prototype,"removable",2);exports.Tag=i([S.customElement(E.IGDS_TAGS.tag)],exports.Tag);
