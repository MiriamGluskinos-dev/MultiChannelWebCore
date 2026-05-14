"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs"),m=require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs"),x=require("../abstractions/angular-form-element.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),n=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),b=require("../constants/events.cjs"),g=require("../constants/tags.cjs"),l=require("./constants.cjs");require("../icon/icon.cjs");const C=require("../icon/icon-sizes.cjs"),k=require("@igds/icons");require("../error-box/default-error-box.cjs");const f=require("./checkbox.scss.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var v=Object.defineProperty,$=Object.getOwnPropertyDescriptor,i=(c,e,t,r)=>{for(var h=r>1?void 0:r?$(e,t):e,p=c.length-1,u;p>=0;p--)(u=c[p])&&(h=(r?u(e,t,h):u(h))||h);return r&&h&&v(e,t,h),h};exports.Checkbox=class extends x.AngularFormElement{constructor(){super(),this.componentId="checkbox",this.disabled=!1,this.required=!1,this.defaultValue=this.DEFAULT_VALUE,this.invalid=!1,this.indeterminate=!1,this.label=null,this.onChange=null,this.variant=l.IGDS_CHECKBOX_VARIANTS.default,this._internals=this.attachInternals()}get validity(){return this._internals.validity}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}applyInternalInputValidityOnComponent(e=this.input){e!=null&&this._internals.setValidity(e.validity,this.error||e.validationMessage||`${this.name} value is invalid`,e)}justifyInputPosition(){const e=this.getBoundingClientRect(),t=this.inputContainer?.getBoundingClientRect();t&&this.input&&(this.input.style.top=`${t.top-e.top}px`,this.input.style.left=`${t.left-e.left}px`)}firstUpdated(e){super.firstUpdated(e),this.justifyInputPosition(),this.applyInternalInputValidityOnComponent()}updated(e){super.updated(e),(e.has("error")||e.has("required"))&&this.applyInternalInputValidityOnComponent()}render(){return o.html`
      <label
        for=${this.componentId}
        class=${d.classMap({checkbox:!0,"checkbox--card":this.variant===l.IGDS_CHECKBOX_VARIANTS.card,"checkbox--disabled-card":this.variant===l.IGDS_CHECKBOX_VARIANTS.card&&this.disabled})}
      >
        <input
          type="checkbox"
          id=${this.componentId}
          class="checkbox__input"
          value=${s.ifDefined(this.value||this.defaultValue)}
          name=${s.ifDefined(this.name===null?void 0:this.name)}
          form=${s.ifDefined(this.form)}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          aria-invalid=${this.required}
          aria-errormessage="checkbox-error"
          aria-describedby=${s.ifDefined(this.ariaLabel?void 0:"help-message")}
          aria-label=${s.ifDefined(this.ariaLabel?this.ariaLabel:void 0)}
          tabindex="0"
          @change=${this.onChangeHandler}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        ${this.getCheckboxContainer()}
        ${a.when(this.imageSrc&&this.imageAlt,()=>o.html`
            <img
              src=${s.ifDefined(this.imageSrc)}
              alt=${s.ifDefined(this.imageAlt)}
              class="checkbox__image"
            />
          `)}
        <slot name="checkbox-label" class="checkbox__label-slot">
          ${this.getLabel()}
        </slot>
        ${a.when(this.description,()=>o.html`
            <span class="checkbox__description"> ${this.description} </span>
          `)}
        ${a.when(this.variant===l.IGDS_CHECKBOX_VARIANTS.withInput,()=>o.html`
            <input
              name=${s.ifDefined(this.name)}
              value=${s.ifDefined(this.value||"")}
              ?disabled=${this.disabled}
              @change=${this.onInputChange}
              @input=${this.onInput}
              class=${d.classMap({"checkbox__option-input":!0,"checkbox__option-input--invalid":this.invalid,"checkbox__option-input--disabled":!!this.disabled})}
              tabindex="0"
            />
          `)}
      </label>
      ${this.getHelpContainer()} ${this.getError()}
    `}onInputChange(e){const t=e.target;this.input&&(this.input.value=t.value,this.input.dispatchEvent(new Event("change")))}onInput(e){const t=e.target;t.value=t.value.replace(l.CHECKBOX_TEXT_ONLY_AND_SPACES_REGULAR_EXPRESSION,"")}onChangeHandler(e){const t=e.target,r=this.variant===l.IGDS_CHECKBOX_VARIANTS.withInput?this.textInput?.value??"":t.value;this.checked=t?.checked,this.value=r,this.setFormValue(t?.checked,r),this.applyInternalInputValidityOnComponent(t),e.currentTarget.value=r,this.onChange?.(e,this.checked?r:null),this.emit(b.IGDS_EVENTS.change,t.value,{checked:t.checked})}setFormValue(e,t){if(e){const r=this.variant===l.IGDS_CHECKBOX_VARIANTS.withInput?this.textInput?.value??"":t;this._internals.setFormValue(r)}else this._internals.setFormValue(null)}onFocus(e){const r=e.target.value;this.emit(b.IGDS_EVENTS.focus,r)}onBlur(e){const r=e.target.value;this.emit(b.IGDS_EVENTS.blur,r)}getCheckboxContainer(){return o.html`
      <div class="checkbox__container">
        <span class="checkbox__body">
          <slot name="checkbox-icon">
            <igds-icon
              node=${k.checkmark}
              size=${C.IGDS_ICON_SIZES.small}
              class="checkbox__icon"
            >
            </igds-icon>
          </slot>
        </span>
        <span class="checkbox__border"></span>
      </div>
    `}getLabel(){return o.html` ${a.when(this.label,()=>o.html`
        <span
          class=${d.classMap({checkbox__label:!0,"checkbox__label--card":this.variant===l.IGDS_CHECKBOX_VARIANTS.card})}
        >
          ${this.label}
        </span>
      `)}`}getHelpContainer(){return o.html` ${a.when(!this.error&&(this.helpIcon||this.helpText),()=>o.html`
        <div id="help-message" class="checkbox__help-box">
          ${this.getHelpIcon()} ${this.getHelpText()}
        </div>
      `)}`}getHelpIcon(){return o.html` ${a.when(this.helpIcon,()=>o.html`
        <igds-icon
          node=${this.helpIcon}
          arria-hidden=${!this.helpIcon}
          class="checkbox__help-icon"
        >
        </igds-icon>
      `)}`}getHelpText(){return o.html` ${a.when(this.helpText,()=>o.html` <span class="checkbox__help-text">${this.helpText}</span> `)}`}getError(){return o.html` ${a.when(this.error,()=>o.html`
        <igds-default-error-box
          id="checkbox-error"
          class="checkbox__error-container"
          errormessage=${s.ifDefined(this.error)}
        >
        </igds-default-error-box>
      `)}`}};exports.Checkbox.shadowRootOptions={...m.LitElement.shadowRootOptions,delegatesFocus:!0};exports.Checkbox.styles=I.unsafeCSS(f);exports.Checkbox.formAssociated=!0;i([n.property({type:String,attribute:"id"})],exports.Checkbox.prototype,"componentId",2);i([n.property({type:Boolean})],exports.Checkbox.prototype,"disabled",2);i([n.property({type:Boolean})],exports.Checkbox.prototype,"required",2);i([n.property({type:String})],exports.Checkbox.prototype,"form",2);i([n.property({type:String,attribute:"default-value"})],exports.Checkbox.prototype,"defaultValue",2);i([n.property({type:String,attribute:"help-text"})],exports.Checkbox.prototype,"helpText",2);i([n.property({type:String,attribute:"help-icon"})],exports.Checkbox.prototype,"helpIcon",2);i([n.property({type:Boolean})],exports.Checkbox.prototype,"invalid",2);i([n.property({type:Boolean,attribute:!1})],exports.Checkbox.prototype,"indeterminate",2);i([n.property({type:String,reflect:!0})],exports.Checkbox.prototype,"name",2);i([n.property({type:String})],exports.Checkbox.prototype,"label",2);i([n.property({type:String})],exports.Checkbox.prototype,"error",2);i([y.query(".checkbox__input")],exports.Checkbox.prototype,"input",2);i([y.query(".checkbox__option-input")],exports.Checkbox.prototype,"textInput",2);i([y.query(".container")],exports.Checkbox.prototype,"inputContainer",2);i([n.property({attribute:!1})],exports.Checkbox.prototype,"onChange",2);i([n.property({type:String})],exports.Checkbox.prototype,"variant",2);i([n.property({type:String,attribute:"image-src"})],exports.Checkbox.prototype,"imageSrc",2);i([n.property({type:String,attribute:"image-alt"})],exports.Checkbox.prototype,"imageAlt",2);i([n.property({type:String})],exports.Checkbox.prototype,"description",2);exports.Checkbox=i([_.customElement(g.IGDS_TAGS.checkbox)],exports.Checkbox);
