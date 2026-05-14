"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),s=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),_=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),g=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/style-map.cjs"),y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/unsafe-svg.cjs"),v=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),m=require("../constants/events.cjs"),P=require("../constants/tags.cjs"),r=require("./constants.cjs");require("../icon/icon.cjs");const b=require("../icon/icon-sizes.cjs"),f=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const h=require("../utils/common.cjs"),E=require("./progress-bar.scss.cjs"),B=require("@igds/icons"),q=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var $=Object.defineProperty,I=Object.getOwnPropertyDescriptor,t=(i,e,n,l)=>{for(var o=l>1?void 0:l?I(e,n):e,p=i.length-1,u;p>=0;p--)(u=i[p])&&(o=(l?u(e,n,o):u(o))||o);return l&&o&&$(e,n,o),o};exports.ProgressBar=class extends f.IGDSElement{constructor(){super(...arguments),this.type=r.IGDS_PROGRESS_BAR_TYPE.line,this.color="--igds-light-base-color-background-brand-default",this.inverted=!1,this.value=r.PROGRESS_VALUE_MIN,this.size=r.IGDS_SPINNER_SIZES.small,this.label="",this.helpText="",this.indeterminate=!1}parseColor(){const e=h.getCssValue(this.color,"");return e||(this.inverted?"#fff":this.color)}completeProgress(){this.emit(m.IGDS_EVENTS.complete,"completed"),this._progressBar.ariaBusy="false"}updated(e){super.updated(e),e.has("value")&&this.value===r.PROGRESS_VALUE_MAX&&this.completeProgress()}getLineProgress(){return a.html`
      <div
        class=${_.classMap({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate})}
      >
        <div class="progress-bar__label">
          <span class="progress-bar__label--text">${this.label}</span>
          ${this.statusIcon&&a.html`<igds-icon
            node=${this.statusIcon}
            color=${this.parseColor()}
            size=${b.IGDS_ICON_SIZES.medium}
            class="progress-bar__label--icon"
          ></igds-icon>`}
        </div>
        <div
          class="progress-bar__track"
          role="progressbar"
          aria-label=${this.label||"Progress bar"}
          aria-valuemin=${c.ifDefined(this.indeterminate?void 0:r.PROGRESS_VALUE_MIN)}
          aria-valuemax=${c.ifDefined(this.indeterminate?void 0:r.PROGRESS_VALUE_MAX)}
          aria-valuenow=${c.ifDefined(this.indeterminate?void 0:this.value)}
          aria-busy="true"
          aria-live="polite"
        >
          <div
            class="progress-bar__indicator"
            style=${g.styleMap({width:`${this.value}%`,backgroundColor:this.parseColor()})}
          ></div>
        </div>
        <div class="progress-bar__help-text">${this.helpText}</div>
      </div>
    `}getSpinnerProgress(){const e=r.IGDS_SPINNER_SIZES_MAP[this.size];return a.html`
      <div
        role="status"
        aria-live="polite"
        aria-label=${this.label||"Spinner"}
        style=${g.styleMap({width:`${e}px`,height:`${e}px`})}
      >
        <svg
          style="color: ${this.parseColor()}"
          xmlns="http://www.w3.org/2000/svg"
          width=${e}
          height=${e}
          viewBox="0 0 24 24"
          class="spinner"
        >
          ${y.unsafeSVG(B.spinner)}
        </svg>
      </div>
    `}render(){return a.html`${v.when(this.type===r.IGDS_PROGRESS_BAR_TYPE.line,()=>a.html`${this.getLineProgress()}`,()=>a.html`${this.getSpinnerProgress()}`)}`}};exports.ProgressBar.styles=q.unsafeCSS(E);t([s.property({type:String,reflect:!0})],exports.ProgressBar.prototype,"type",2);t([s.property({type:String,reflect:!0})],exports.ProgressBar.prototype,"color",2);t([s.property({type:Boolean})],exports.ProgressBar.prototype,"inverted",2);t([s.property({type:Number,converter:{fromAttribute:i=>{const e=i&&parseInt(i);return e?h.clampNumber(e,r.PROGRESS_VALUE_MIN,r.PROGRESS_VALUE_MAX):r.PROGRESS_VALUE_MIN},toAttribute:i=>i.toString()}})],exports.ProgressBar.prototype,"value",2);t([s.property({type:String})],exports.ProgressBar.prototype,"size",2);t([s.property({type:String})],exports.ProgressBar.prototype,"label",2);t([s.property({type:String,attribute:"help-text"})],exports.ProgressBar.prototype,"helpText",2);t([s.property({type:String,attribute:"status-icon"})],exports.ProgressBar.prototype,"statusIcon",2);t([s.property({type:Boolean,reflect:!0})],exports.ProgressBar.prototype,"indeterminate",2);t([d.query('[role="progressbar"]')],exports.ProgressBar.prototype,"_progressBar",2);exports.ProgressBar=t([S.customElement(P.IGDS_TAGS.progressBar)],exports.ProgressBar);
