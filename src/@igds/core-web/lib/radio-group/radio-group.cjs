"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const f=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),l=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),h=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),d=require("../constants/event-keys.cjs"),g=require("../constants/tags.cjs"),m=require("./radio-group.scss.cjs"),b=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var R=Object.defineProperty,_=Object.getOwnPropertyDescriptor,s=(p,e,t,r)=>{for(var i=r>1?void 0:r?_(e,t):e,a=p.length-1,u;a>=0;a--)(u=p[a])&&(i=(r?u(e,t,i):u(i))||i);return r&&i&&R(e,t,i),i};exports.RadioGroup=class extends f.IGDSElement{constructor(){super(),this.defaultValue="",this.value="",this.disabled=!1,this.required=!1,this.orientation="vertical",this._internals=this.attachInternals(),this.onRadioChange=this.onRadioChange.bind(this)}firstUpdated(e){super.firstUpdated(e),this.initializeRadios()}initializeRadios(){this.getChildRadios().forEach(t=>{t.addEventListener("radio-changed",this.onRadioChange)})}onRadioChange(e){const t=e.target.closest(g.IGDS_TAGS.radio);if(e instanceof CustomEvent){const r=this.getChildRadios(),i=this.value;if(!t||t.disabled)return;this.value=e.detail.value,r.forEach(a=>{a.checked=a.value===this.value}),this.value!==i&&this._internals.setFormValue(e.detail.value)}}getChildRadios(){return[...this.querySelectorAll(g.IGDS_TAGS.radio)]}get isArrowKey(){return[d.IGDS_EVENT_KEYS.ArrowUp,d.IGDS_EVENT_KEYS.ArrowDown,d.IGDS_EVENT_KEYS.ArrowLeft,d.IGDS_EVENT_KEYS.ArrowRight]}shouldHandleArrowKey(e){return this.isArrowKey.includes(e.key)}isNonRadioInputFocused(){const e=document.activeElement?.shadowRoot?.activeElement;return e instanceof HTMLInputElement&&e.type!=="radio"}getEnabledRadios(){return this.getChildRadios().filter(e=>!e.disabled)}getArrowIncrement(e){return[d.IGDS_EVENT_KEYS.ArrowUp,d.IGDS_EVENT_KEYS.ArrowLeft].includes(e)?-1:1}getNextIndex(e,t){const r=e.find(u=>u.checked)??e[0],i=this.getArrowIncrement(t);let a=e.indexOf(r)+i;return a<0&&(a=e.length-1),a>=e.length&&(a=0),a}focusAndCheckRadio(e){const t=e.shadowRoot?.querySelector(".radio__input");t&&(t.focus(),t.checked||(t.checked=!0,t.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))))}moveSelectionByArrowKey(e){if(!this.shouldHandleArrowKey(e)||this.isNonRadioInputFocused())return;const t=this.getEnabledRadios();if(!t.length)return;e.preventDefault();const r=this.getNextIndex(t,e.key),i=t[r];this.focusAndCheckRadio(i)}updated(e){super.updated(e),e.has("defaultValue")&&this.defaultValue&&this.setDefaultValue(),e.has("disabled")&&this.disableChildRadios()}setDefaultValue(){this.getChildRadios().forEach(t=>{const r=t.value===this.defaultValue;r&&(this.value=this.defaultValue,this._internals.setFormValue(this.defaultValue),t.checked=r)})}disableChildRadios(){this.getChildRadios().forEach(t=>t.disabled=this.disabled)}getLabel(){return o.html`
      ${n.when(this.label,()=>o.html`
          <legend
            id="radioGroupLabel"
            class=${c.classMap({"radio-group__label":!0,"radio-group__label--required":this.required})}
          >
            ${this.label}
          </legend>
        `)}
    `}getHelpIcon(){return o.html`
      ${n.when(this.helpIcon,()=>o.html`
          <igds-icon
            node=${this.helpIcon}
            arria-hidden=${!this.helpIcon}
            class="radio-group__help-icon"
          >
          </igds-icon>
        `)}
    `}getHelpText(){return o.html`
      ${n.when(this.helpText,()=>o.html` <span class="radio-group__help-text">${this.helpText}</span> `)}
    `}getHelpContainer(){return o.html`
      ${n.when(!this.error&&(this.helpIcon||this.helpText),()=>o.html`
          <div id="radio-group-help-message" class="radio-group__help-box">
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `}getError(){return o.html`
      ${n.when(this.error,()=>o.html`
          <igds-default-error-box
            class=${c.classMap({"radio-group__error-box":!0,"radio-group__error-box--hidden":!!this.value})}
            id="radio-group-error"
            errormessage=${h.ifDefined(this.error)}
          ></igds-default-error-box>
        `)}
    `}getBottomContainer(){return o.html`
      ${n.when(this.error||this.helpIcon||this.helpText,()=>o.html`
          <div class="radio-group__footer">
            ${this.getHelpContainer()} ${this.getError()}
          </div>
        `)}
    `}render(){return o.html`
      <fieldset
        aria-labelledby=${h.ifDefined(this.label?"radioGroupLabel":void 0)}
        aria-describedby=${h.ifDefined(this.helpText?"radio-group-help-message":void 0)}
        aria-errormessage=${h.ifDefined(this.error?"radio-group-error":void 0)}
        aria-required=${this.required}
        class=${c.classMap({"radio-group":!0,"radio-group--horizontal":this.orientation==="horizontal","radio-group--vertical":this.orientation==="vertical"})}
      >
        ${this.getLabel()}
        <slot @keydown=${this.moveSelectionByArrowKey}></slot>
      </fieldset>
      ${this.getBottomContainer()}
    `}};exports.RadioGroup.formAssociated=!0;exports.RadioGroup.styles=b.unsafeCSS(m);s([l.property({type:String})],exports.RadioGroup.prototype,"label",2);s([l.property({type:String})],exports.RadioGroup.prototype,"name",2);s([l.property({type:String})],exports.RadioGroup.prototype,"form",2);s([l.property({type:String,attribute:"default-value"})],exports.RadioGroup.prototype,"defaultValue",2);s([l.property({type:String,reflect:!0,attribute:!1})],exports.RadioGroup.prototype,"value",2);s([l.property({type:Boolean})],exports.RadioGroup.prototype,"disabled",2);s([l.property({type:Boolean})],exports.RadioGroup.prototype,"required",2);s([l.property({type:String})],exports.RadioGroup.prototype,"error",2);s([l.property({type:String,attribute:"help-icon"})],exports.RadioGroup.prototype,"helpIcon",2);s([l.property({type:String,attribute:"help-text"})],exports.RadioGroup.prototype,"helpText",2);s([l.property({type:String})],exports.RadioGroup.prototype,"orientation",2);exports.RadioGroup=s([y.customElement(g.IGDS_TAGS.radioGroup)],exports.RadioGroup);
