"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const u=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),l=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),h=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),g=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),d=require("../abstractions/angular-form-element.cjs"),p=require("../constants/events.cjs"),b=require("../constants/tags.cjs"),m=require("./toggle.scss.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,s=(i,t,e,o)=>{for(var r=o>1?void 0:o?_(t,e):t,n=i.length-1,a;n>=0;n--)(a=i[n])&&(r=(o?a(t,e,r):a(r))||r);return o&&r&&y(t,e,r),r};exports.Toggle=class extends d.AngularFormElement{constructor(){super(),this.componentId="toggle",this.defaultValue=this.DEFAULT_VALUE,this.disabled=!1,this.onChange=null,this.setAsAngularLibFormElement(),this._internals=this.attachInternals()}onChangeHandler(t){const e=t.target;e?.checked?this._internals.setFormValue(e.value):this._internals.setFormValue(null),this.checked=e.checked,this.onChange?.(t),this.emit(p.IGDS_EVENTS.change,e.value,{checked:e.checked})}onFocus(t){const e=t.target;this.emit(p.IGDS_EVENTS.focus,e.value)}onBlur(t){const e=t.target;this.emit(p.IGDS_EVENTS.blur,e.value)}getLabel(){return c.html`
      ${g.when(this.labelTitle||this.labelText,()=>c.html`
          <span class="switch__label-box">
            <span class="switch__label switch__label--strong"
              >${this.labelTitle}</span
            >
            <span class="switch__label">${this.labelText}</span>
          </span>
        `)}
    `}render(){return c.html`
      <label for=${this.componentId} class="switch">
        <input
          id=${this.componentId}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          .checked=${this.checked}
          name=${h.ifDefined(this.name)}
          form=${h.ifDefined(this.form)}
          value=${h.ifDefined(this.value||this.defaultValue)}
          role="switch"
          class="switch__input"
          aria-checked=${this.checked}
          @change=${this.onChangeHandler}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        ${this.getLabel()}
        <span class="switch__control">
          <span class="switch__thumb"></span>
        </span>
      </label>
    `}};exports.Toggle.styles=f.unsafeCSS(m);exports.Toggle.formAssociated=!0;s([l.property({type:String,attribute:!1})],exports.Toggle.prototype,"componentId",2);s([l.property({type:String,attribute:"label-title"})],exports.Toggle.prototype,"labelTitle",2);s([l.property({type:String,attribute:"label-text"})],exports.Toggle.prototype,"labelText",2);s([l.property({type:String})],exports.Toggle.prototype,"name",2);s([l.property({type:String})],exports.Toggle.prototype,"form",2);s([l.property({type:String,attribute:"default-value"})],exports.Toggle.prototype,"defaultValue",2);s([l.property({type:Boolean})],exports.Toggle.prototype,"disabled",2);s([l.property({attribute:!1})],exports.Toggle.prototype,"onChange",2);exports.Toggle=s([u.customElement(b.IGDS_TAGS.toggle)],exports.Toggle);
