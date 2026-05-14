"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const g=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const k=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),C=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),p=require("../checkbox/checkbox.cjs"),d=require("../constants/events.cjs"),x=require("../constants/tags.cjs"),f=require("./checkbox-group.scss.cjs"),y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,o=(b,e,t,s)=>{for(var h=s>1?void 0:s?v(e,t):e,c=b.length-1,l;c>=0;c--)(l=b[c])&&(h=(s?l(e,t,h):l(h))||h);return s&&h&&m(e,t,h),h};exports.CheckboxGroup=class extends g.IGDSElement{constructor(){super(...arguments),this.disabled=!1,this.required=!1,this.invalid=!1,this.orientation="vertical",this.onGroupChange=null,this.checkboxStates=[]}firstUpdated(){this.addChangeEventListenerForCheckboxes()}addChangeEventListenerForCheckboxes(){const e=this.getAllCheckboxes();e.length&&e.forEach(t=>{t instanceof p.Checkbox&&t.addEventListener(d.IGDS_EVENTS.change,s=>this.onCheckboxChanged(s,t))})}onCheckboxChanged(e,t){const s=this.getAllCheckboxes(),h=s.filter(l=>l.checked).map(l=>l.value??"");this.onGroupChange?.(h);const c=s.indexOf(t);c!==-1&&(this.checkboxStates=[...this.checkboxStates.slice(0,c),e.detail.checked,...this.checkboxStates.slice(c+1)])}updated(e){super.updated(e),e.has("disabled")&&this.disableChildCheckboxes(),e.has("invalid")&&this.markChildCheckboxesAsInvalid()}disconnectedCallback(){super.disconnectedCallback(),this.removeChangeEventListenerForCheckboxes()}removeChangeEventListenerForCheckboxes(){const e=this.getAllCheckboxes();e.length&&e.forEach(t=>{t instanceof p.Checkbox&&t.removeEventListener(d.IGDS_EVENTS.change,s=>this.onCheckboxChanged(s,t))})}getAllCheckboxes(){return[...this.querySelectorAll(x.IGDS_TAGS.checkbox)]}disableChildCheckboxes(){const e=this.getAllCheckboxes();e.length&&e.forEach(t=>{t instanceof p.Checkbox&&(t.disabled=this.disabled)})}markChildCheckboxesAsInvalid(){const e=this.getAllCheckboxes();e.length&&e.forEach(t=>{t instanceof p.Checkbox&&(t.required=this.invalid)})}getLabel(){return r.html`
      ${n.when(this.label,()=>r.html`
          <legend
            id="checkboxGroupLabel"
            class=${u.classMap({"checkbox-group__label":!0,"checkbox-group__label--disabled":this.disabled,"checkbox-group__label--required":this.required})}
          >
            ${this.label}
          </legend>
        `)}
    `}getHelpIcon(){return r.html`
      ${n.when(this.helpIcon,()=>r.html`
          <igds-icon
            node=${this.helpIcon}
            arria-hidden=${!this.helpIcon}
            class="checkbox-group__help-icon"
          >
          </igds-icon>
        `)}
    `}getHelpText(){return r.html`
      ${n.when(this.helpText,()=>r.html`
            <span class="checkbox-group__help-text">${this.helpText}</span>
          `)}
    `}getHelpContainer(){return r.html`
      ${n.when(!this.error&&(this.helpIcon||this.helpText),()=>r.html`
          <div id="help-message" class="checkbox-group__help-box">
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `}getError(){return r.html`
      ${n.when(this.error,()=>r.html`
          <igds-default-error-box
            id="checkbox-group-error"
            class=${u.classMap({"checkbox-group__error-box":!0,"checkbox-group__error-box--hidden":this.isAllCheckboxesChecked()})}
            class="checkbox-group-error-container"
            errormessage=${a.ifDefined(this.error)}
          ></igds-default-error-box>
        `)}
    `}isAllCheckboxesChecked(){const e=this.getAllCheckboxes();return e.length?e.length===this.checkboxStates.length&&this.checkboxStates.every(t=>t):!0}getBottomBox(){return r.html`
      ${n.when(this.error||this.helpIcon||this.helpText,()=>r.html`
          <div class="checkbox-group__bottom-box">
            ${this.getHelpContainer()} ${this.getError()}
          </div>
        `)}
    `}render(){return r.html`
      <fieldset
        aria-labelledby=${a.ifDefined(this.label?"checkboxGroupLabel":void 0)}
        aria-describedby=${a.ifDefined(this.helpText?"help-message":void 0)}
        aria-errormessage=${a.ifDefined(this.error?"checkbox-group-error":void 0)}
        aria-required=${this.required}
        class=${u.classMap({"checkbox-group":!0,"checkbox-group--vertical":this.orientation==="vertical","checkbox-group--horizontal":this.orientation==="horizontal"})}
      >
        ${this.getLabel()}
        <slot></slot>
      </fieldset>
      ${this.getBottomBox()}
    `}};exports.CheckboxGroup.styles=y.unsafeCSS(f);o([i.property({type:String})],exports.CheckboxGroup.prototype,"label",2);o([i.property({type:String})],exports.CheckboxGroup.prototype,"form",2);o([i.property({type:Boolean})],exports.CheckboxGroup.prototype,"disabled",2);o([i.property({type:Boolean})],exports.CheckboxGroup.prototype,"required",2);o([i.property({type:Boolean})],exports.CheckboxGroup.prototype,"invalid",2);o([i.property({type:String})],exports.CheckboxGroup.prototype,"error",2);o([i.property({type:String,attribute:"help-icon"})],exports.CheckboxGroup.prototype,"helpIcon",2);o([i.property({type:String,attribute:"help-text"})],exports.CheckboxGroup.prototype,"helpText",2);o([i.property({type:String})],exports.CheckboxGroup.prototype,"orientation",2);o([i.property({attribute:!1})],exports.CheckboxGroup.prototype,"onGroupChange",2);o([C.state()],exports.CheckboxGroup.prototype,"checkboxStates",2);exports.CheckboxGroup=o([k.customElement(x.IGDS_TAGS.checkboxGroup)],exports.CheckboxGroup);
