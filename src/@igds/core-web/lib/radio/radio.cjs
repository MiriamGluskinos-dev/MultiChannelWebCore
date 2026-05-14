"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),r=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),s=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),o=require("./constants.cjs"),_=require("../constants/events.cjs"),m=require("../constants/tags.cjs");require("../icon/icon.cjs");require("../error-box/default-error-box.cjs");const R=require("./radio.scss.cjs"),v=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var f=Object.defineProperty,$=Object.getOwnPropertyDescriptor,i=(u,t,e,a)=>{for(var p=a>1?void 0:a?$(t,e):t,h=u.length-1,c;h>=0;h--)(c=u[h])&&(p=(a?c(t,e,p):c(p))||p);return a&&p&&f(t,e,p),p};exports.RadioButton=class extends v.IGDSElement{constructor(){super(),this.checked=!1,this.componentId="radio",this.disabled=!1,this.required=!1,this.invalid=!1,this.variant=o.IGDS_RADIO_VARIANTS.default,this.onChange=null,this._internals=this.attachInternals()}get validity(){return this._internals.validity}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}justifyRadioInputPosition(){const t=this.getBoundingClientRect(),e=this.inputContainer?.getBoundingClientRect();e&&this.input&&(this.input.style.top=`${e.top-t.top}px`,this.input.style.left=`${e.left-t.left}px`)}firstUpdated(t){this.justifyRadioInputPosition(),super.firstUpdated(t),this.applyInternalInputValidityOnComponent(),this.variant===o.IGDS_RADIO_VARIANTS.textCard&&this.label&&(this.textCardTitle=this.label)}updated(t){super.updated(t),(t.has("error")||t.has("invalid"))&&this.applyInternalInputValidityOnComponent()}applyInternalInputValidityOnComponent(t=this.input){t!=null&&this._internals.setValidity(t.validity,this.error||t.validationMessage||`${this.name} value is invalid`,t)}render(){return n.html`
      <label
        for=${this.componentId}
        class=${d.classMap({radio:!0,"radio--text-card":this.variant===o.IGDS_RADIO_VARIANTS.textCard,"radio--image":this.variant===o.IGDS_RADIO_VARIANTS.image,"radio--disabled-text-card":this.variant===o.IGDS_RADIO_VARIANTS.textCard&&this.disabled,"radio--disabled-image":this.variant===o.IGDS_RADIO_VARIANTS.image&&this.disabled,"radio--with-input":this.variant===o.IGDS_RADIO_VARIANTS.withInput})}
        @keydown=${()=>{}}
      >
        <input
          type="radio"
          id=${this.componentId}
          class="radio__input"
          value=${this.value}
          name=${l.ifDefined(this.name)}
          form=${l.ifDefined(this.form)}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?required=${this.required}
          aria-required=${this.required}
          aria-invalid=${this.invalid}
          .checked=${this.checked}
          aria-errormessage="radio-error"
          aria-describedby="radio-help-message"
          tabindex="0"
          @change=${this.onChangeHandler}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        ${this.getRadioContainer()}
        ${s.when(this.imageSrc&&this.imageAlt,()=>n.html`
            <img
              src=${l.ifDefined(this.imageSrc)}
              alt=${l.ifDefined(this.imageAlt)}
              class="radio__image"
            />
          `)}
        ${this.getLabel()}
        ${s.when(this.description,()=>n.html`<span
              class=${d.classMap({radio__description:!0,"radio__description--disabled":this.disabled})}
              >${this.description}</span
            >`)}
        ${s.when(this.variant===o.IGDS_RADIO_VARIANTS.withInput,()=>n.html`
            <input
              name=${l.ifDefined(this.name)}
              value=${this.value||""}
              ?disabled=${this.disabled}
              @change=${this.onInputChange}
              @input=${this.onInput}
              tabindex="0"
              class=${d.classMap({"radio__option-input":!0,"radio__option-input--invalid":this.invalid,"radio__option-input--disabled":this.disabled})}
            />
          `)}
      </label>
      ${this.getHelpContainer()} ${this.getError()}
    `}onInputChange(t){const e=t.target;this.input&&(this.input.value=e.value,this.input.dispatchEvent(new Event("change")))}onInput(t){const e=t.target;e.value=e.value.replace(o.RADIO_TEXT_ONLY_AND_SPACES_REGULAR_EXPRESSION,"")}onChangeHandler(t){const e=t.target,a=this.variant===o.IGDS_RADIO_VARIANTS.withInput?this.optionInput?.value??"":e.value;this.checked=e?.checked,this.value=a,this.setFormValue(e.checked,a),t.currentTarget.value=a,e.checked&&this.dispatchEvent(new CustomEvent("radio-changed",{detail:{value:a}})),this.applyInternalInputValidityOnComponent(e),this.onChange?.(t,e?.checked?a:null),this.emit(_.IGDS_EVENTS.change,e.value,{checked:e.checked})}setFormValue(t,e){if(t){const a=this.variant===o.IGDS_RADIO_VARIANTS.withInput?this.optionInput?.value??"":e;this._internals.setFormValue(a)}else this._internals.setFormValue(null)}onFocus(t){const a=t.target.value;this.emit(_.IGDS_EVENTS.focus,a)}onBlur(t){const a=t.target.value;this.emit(_.IGDS_EVENTS.blur,a)}getRadioContainer(){return n.html`
      <div class="radio__container">
        <span class="radio__body">
          <span class="radio__icon"></span>
        </span>
        <span class="radio__border"></span>
      </div>
    `}getLabel(){return n.html`
      ${s.when(this.label,()=>n.html`
            <span
              class=${d.classMap({radio__label:!0,"radio__label--text-card":this.variant===o.IGDS_RADIO_VARIANTS.textCard,"radio__label--image":this.variant===o.IGDS_RADIO_VARIANTS.image})}
            >
              ${this.label}
            </span>
          `)}
    `}getHelpContainer(){return n.html`
      ${s.when(!this.error&&(this.helpIcon||this.helpText),()=>n.html`
          <div id="radio-help-message" class="radio__help-message">
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `}getHelpIcon(){return n.html`
      ${s.when(this.helpIcon,()=>n.html`
          <igds-icon
            node=${this.helpIcon}
            arria-hidden=${!this.helpIcon}
            class="radio__help-icon"
          >
          </igds-icon>
        `)}
    `}getHelpText(){return n.html`
      ${s.when(this.helpText,()=>n.html` <span class="radio__help-text">${this.helpText}</span> `)}
    `}getError(){return n.html`
      ${s.when(this.error||this.invalid,()=>n.html`
          <igds-default-error-box
            id="radio-error"
            class=${d.classMap({"radio__error-box":!0,"radio__error-box--with-input":this.variant===o.IGDS_RADIO_VARIANTS.withInput})}
            errormessage=${l.ifDefined(this.error)}
          ></igds-default-error-box>
        `)}
    `}};exports.RadioButton.styles=S.unsafeCSS(R);exports.RadioButton.formAssociated=!0;i([r.property({type:String})],exports.RadioButton.prototype,"value",2);i([r.property({type:Boolean})],exports.RadioButton.prototype,"checked",2);i([r.property({type:String,attribute:!1})],exports.RadioButton.prototype,"componentId",2);i([r.property({type:Boolean})],exports.RadioButton.prototype,"disabled",2);i([r.property({type:Boolean})],exports.RadioButton.prototype,"required",2);i([r.property({type:String})],exports.RadioButton.prototype,"form",2);i([r.property({type:String,attribute:"help-text"})],exports.RadioButton.prototype,"helpText",2);i([r.property({type:String,attribute:"help-icon"})],exports.RadioButton.prototype,"helpIcon",2);i([r.property({type:Boolean})],exports.RadioButton.prototype,"invalid",2);i([r.property({type:String,reflect:!0})],exports.RadioButton.prototype,"name",2);i([r.property({type:String})],exports.RadioButton.prototype,"label",2);i([r.property({type:String})],exports.RadioButton.prototype,"variant",2);i([r.property({type:String})],exports.RadioButton.prototype,"description",2);i([r.property({type:String,attribute:"image-src"})],exports.RadioButton.prototype,"imageSrc",2);i([r.property({type:String,attribute:"image-alt"})],exports.RadioButton.prototype,"imageAlt",2);i([r.property({type:String})],exports.RadioButton.prototype,"error",2);i([I.state()],exports.RadioButton.prototype,"textCardTitle",2);i([y.query(".radio__input")],exports.RadioButton.prototype,"input",2);i([y.query(".radio__option-input")],exports.RadioButton.prototype,"optionInput",2);i([y.query(".radio__container")],exports.RadioButton.prototype,"inputContainer",2);i([r.property({attribute:!1})],exports.RadioButton.prototype,"onChange",2);exports.RadioButton=i([g.customElement(m.IGDS_TAGS.radio)],exports.RadioButton);
