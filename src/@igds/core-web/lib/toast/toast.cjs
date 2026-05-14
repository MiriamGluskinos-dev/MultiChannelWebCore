"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const T=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),o=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),_=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),d=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const e=require("./constants.cjs"),S=require("./toast.scss.cjs");require("../button/button.cjs");const p=require("../button/constants.cjs"),A=require("../constants/events.cjs"),y=require("../constants/tags.cjs"),g=require("@igds/icons");require("../icon/icon.cjs");require("./toast-container.cjs");const m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(i,t,n,l)=>{for(var a=l>1?void 0:l?b(t,n):t,c=i.length-1,h;c>=0;c--)(h=i[c])&&(a=(l?h(t,n,a):h(a))||a);return l&&a&&v(t,n,a),a};exports.Toast=class extends d.IGDSElement{constructor(){super(...arguments),this.type=e.IGDS_TOAST_TYPES.inline,this.variant=e.IGDS_TOAST_VARIANT.info,this.duration=1e3,this.inline=!1,this.autoClose=!1,this.closable=!1,this.originalParent=null}getToastContainer(){let t=document.querySelector("igds-toast-container");return t||(t=document.createElement("igds-toast-container"),document.body.appendChild(t)),t}show(){const t=this.getToastContainer(),n=document.documentElement.getAttribute("dir")||"ltr";t.setAttribute("dir",n),this.originalParent||(this.originalParent=this.parentElement),t.appendChild(this),this.style.display="block",this.classList.add("show"),this.classList.remove("hide"),this.autoClose&&this.handleAutoClose()}close(){this.clearAutoClose(),this.classList.add("hide"),this.classList.remove("show"),setTimeout(()=>{this.style.display="none";const t=this.getToastContainer();this.parentElement===t&&t.removeChild(this),this.originalParent&&this.originalParent.appendChild(this),t.children.length===0&&t.parentElement?.removeChild(t),this.emit(A.IGDS_EVENTS.close,"close toast")},300)}handleAutoClose(){this.clearAutoClose(),this.closeTimeout=window.setTimeout(()=>this.close(),this.duration)}clearAutoClose(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=void 0)}handleLinkClick(t){t.stopPropagation(),this.linkActionUrl&&window.open(this.linkActionUrl,"_self")}getIcon(){const t=e.IGDS_TOAST_ICONS[this.variant];return r.html`<igds-icon
      node=${t}
      class="toast__icon toast__icon--${this.variant}"
    ></igds-icon>`}getToastClass(){const t=this.type===e.IGDS_TOAST_TYPES.inline,n=this.type===e.IGDS_TOAST_TYPES.floating;return _.classMap({toast:!0,toast__inline:t,toast__float:n,"toast__inline--success":t&&this.variant===e.IGDS_TOAST_VARIANT.success,"toast__inline--failure":t&&this.variant===e.IGDS_TOAST_VARIANT.failure,"toast__inline--attention":t&&this.variant===e.IGDS_TOAST_VARIANT.attention,"toast__inline--info":t&&this.variant===e.IGDS_TOAST_VARIANT.info,[`toast--${this.variant}`]:!0})}renderFloatingToast(){return r.html`
      <div
        class="${this.getToastClass()}"
        role="alert"
        aria-live="${this.variant===e.IGDS_TOAST_VARIANT.failure?"assertive":"polite"}"
        tabindex="0"
      >
        <div class="toast__content-wrapper">
          ${this.getIcon()}
          <section class="toast__content">
            <slot name="title"></slot>
            <slot></slot>
          </section>
        </div>
        ${u.when(this.closable,()=>r.html`<igds-button
            variant=${p.IGDS_BUTTON_VARIANTS.link}
            size=${p.IGDS_BUTTON_SIZES.small}
            class="toast__button"
            @igds-click=${()=>this.close()}
            label="Close toast"
          >
            ${this.closeActionLabel}
            <igds-icon
              slot="second-icon"
              node=${g.close}
              class="toast__button-icon"
            ></igds-icon>
          </igds-button>`)}
      </div>
    `}renderInlineToast(){return this.classList.add("show"),r.html`
      <div
        class="${this.getToastClass()}"
        role="status"
        aria-live="${this.variant===e.IGDS_TOAST_VARIANT.failure?"assertive":"polite"}"
        tabindex="0"
      >
        <div class="toast__content-wrapper">
          ${this.getIcon()}
          <section class="toast__content">
            <slot name="title"></slot>
            <slot></slot>
            ${u.when(this.linkActionUrl&&this.linkActionLabel,()=>r.html` <button
                class="toast__button toast__button-link"
                aria-label="Close toast"
                @click=${this.handleLinkClick}
              >
                ${this.linkActionLabel}
              </button>`)}
          </section>
        </div>
      </div>
    `}render(){return r.html` ${u.when(this.type===e.IGDS_TOAST_TYPES.floating,()=>this.renderFloatingToast(),()=>this.renderInlineToast())}`}};exports.Toast.styles=m.unsafeCSS(S);s([o.property({type:String})],exports.Toast.prototype,"type",2);s([o.property({type:String})],exports.Toast.prototype,"variant",2);s([o.property({type:Number})],exports.Toast.prototype,"duration",2);s([o.property({type:Boolean})],exports.Toast.prototype,"inline",2);s([o.property({type:Boolean,attribute:"auto-close",converter:i=>i!==null&&i!=="false"})],exports.Toast.prototype,"autoClose",2);s([o.property({type:Boolean,reflect:!0,converter:i=>i!==null&&i!=="false"})],exports.Toast.prototype,"closable",2);s([o.property({type:String,attribute:"link-action-label"})],exports.Toast.prototype,"linkActionLabel",2);s([o.property({type:String,attribute:"link-action-url"})],exports.Toast.prototype,"linkActionUrl",2);s([o.property({type:String,attribute:"close-action-label"})],exports.Toast.prototype,"closeActionLabel",2);exports.Toast=s([T.customElement(y.IGDS_TAGS.toast)],exports.Toast);
