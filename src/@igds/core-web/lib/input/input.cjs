"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const m=require("../abstractions/angular-form-element.cjs"),b=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),e=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),y=require("../constants/events.cjs"),g=require("../constants/event-keys.cjs"),$=require("../constants/tags.cjs"),p=require("./constants.cjs");require("../icon/icon.cjs");const _=require("../icon/icon-sizes.cjs"),s=require("@igds/icons");require("../error-box/default-error-box.cjs");const x=require("./input.scss.cjs"),S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var T=Object.defineProperty,E=Object.getOwnPropertyDescriptor,t=(I,i,l,o)=>{for(var h=o>1?void 0:o?E(i,l):i,c=I.length-1,d;c>=0;c--)(d=I[c])&&(h=(o?d(i,l,h):d(h))||h);return o&&h&&T(i,l,h),h};exports.Input=class extends m.AngularFormElement{constructor(){super(),this.componentId="input",this.dir="rtl",this.type=p.IGDS_INPUT_TYPES.text,this.disabled=!1,this.required=!1,this.readonly=!1,this.iconPosition="left",this.invalid=!1,this.autoFocus=!1,this.autoComplete="off",this.autoCapitalize=p.IGDS_INPUT_AUTOCAPITALIZE_OPTIONS.off,this.autocorrect=!1,this.size=p.IGDS_TEXTAREA_SIZES.custom,this.onChange=null,this.setAsAngularLibFormElement(),this._internals=this.attachInternals()}get validity(){return this._internals.validity}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}firstUpdated(i){super.firstUpdated(i),this.applyInternalInputValidityOnComponent(),this.type===p.IGDS_INPUT_TYPES.textarea&&(this.componentId="textarea")}updated(i){super.updated(i),(i.has("error")||i.has("invalid"))&&this.applyInternalInputValidityOnComponent()}getTopBox(){return a.when(this.label||this.tooltipIcon||this.tooltipQuestion||this.tooltip,()=>r.html`
        <div class="input__top-box">
          ${this.getInputLabel()} ${this.getTooltipIcon()}
          ${this.getTooltipQuestion()}
        </div>
      `)}getInputLabel(){return a.when(this.label,()=>r.html`
        <label
          for=${n.ifDefined(this.componentId)}
          class=${u.classMap({input__label:!0,"input__label--disabled":this.disabled,"input__label--required":this.required,"input__label--invalid":this.invalid})}
        >
          ${a.when(this.labelIcon,()=>r.html`
              <igds-icon
                node=${this.labelIcon}
                size=${_.IGDS_ICON_SIZES.medium}
                class="input__label-icon"
                aria-hidden="true"
              ></igds-icon>
            `)}
          ${this.label}
        </label>
      `)}getTooltipIcon(){return a.when(this.tooltipIcon,()=>r.html`
        <igds-tooltip
          content=${this.tooltip??""}
          placement="inset-inline-end"
          class="input__tooltip"
        >
          <igds-icon
            node=${s.helpOutlined}
            class=${u.classMap({"input__tooltip-icon":!0,"input__tooltip-icon--disabled":this.disabled})}
          >
          </igds-icon>
        </igds-tooltip>
      `)}getTooltipQuestion(){return a.when(this.tooltipQuestion,()=>r.html`
        <igds-tooltip
          content=${this.tooltip??""}
          placement="inset-inline-end"
        >
          <span
            class=${u.classMap({"input__tooltip-question":!0,"input__tooltip-question--disabled":this.disabled})}
          >
            ${this.tooltipQuestion}
          </span>
        </igds-tooltip>
      `)}onInput(i){const o=i.target.value;this.value=o,this.defaultValue="",this._internals.setFormValue(o??null),this.emit(y.IGDS_EVENTS.input,o),this.applyInternalInputValidityOnComponent(i.target),this.onChange?.(i),this.updateTextareaHeight()}applyInternalInputValidityOnComponent(i=this.input){i!==null&&this._internals.setValidity(i.validity,this.error||`${this.name} value is invalid`,i)}onChangeHandler(i){const o=i.target.value;this.emit(y.IGDS_EVENTS.change,o)}onBlur(i){const o=i.target.value;this.emit(y.IGDS_EVENTS.blur,o)}onFocus(i){const o=i.target.value;this.emit(y.IGDS_EVENTS.focus,o),this.updateTextareaHeight()}updateTextareaHeight(){this.autoHeight&&this.textarea&&(this.textarea.style.height="auto",this.textarea.style.height=this.textarea.scrollHeight+"px")}getTextareaCssClass(){return u.classMap({"input__field-box":!0,"input__field-box--with-left-positioned-icon":!!this.icon&&this.iconPosition==="left"&&(this.dir==="rtl"||!this.dir),"input__field-box--with-left-positioned-icon-ltr":!!this.icon&&this.iconPosition==="left"&&this.dir==="ltr","input__field-box--with-right-positioned-icon":!!this.icon&&this.iconPosition==="right","input__field-box--auto-height":!!this.autoHeight})}getInputCssClass(){const i=!!this.icon,l=this.dir||"rtl",o=l==="ltr",h=l==="rtl",c=this.iconPosition==="left",d=this.iconPosition==="right";return i?u.classMap({"input__field-box":!0,"input__field-box--with-left-positioned-icon":c&&h,"input__field-box--with-left-positioned-icon-ltr":c&&o,"input__field-box--with-right-positioned-icon-ltr":d&&o,"input__field-box--with-right-positioned-icon":d&&h}):u.classMap({"input__field-box":!0})}getInputBox(){return this.type===p.IGDS_INPUT_TYPES.textarea?r.html`
        <textarea
          id=${this.componentId}
          ?autofocus=${this.autoFocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          aria-invalid=${this.invalid}
          aria-errormessage="input-error"
          aria-describedby="input-help-message"
          type=${this.type}
          rows=${n.ifDefined(this.getRows())}
          cols=${n.ifDefined(this.cols)}
          name=${n.ifDefined(this.name)}
          form=${n.ifDefined(this.form)}
          placeholder=${n.ifDefined(this.placeholder)}
          maxlength=${n.ifDefined(this.maxlength)}
          autocapitalize=${this.autoCapitalize}
          autocorrect=${this.autocorrect}
          class=${this.getTextareaCssClass()}
          @input=${this.onInput}
          @change=${this.onChangeHandler}
          @blur=${this.onBlur}
          @focus=${this.onFocus}
        >
${this.value||this.defaultValue}</textarea
        >
      `:r.html`
      <input
        id=${this.componentId}
        ?autofocus=${this.autoFocus}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        aria-invalid=${this.invalid}
        aria-label=${this.label?this.label:"Input"}
        aria-errormessage="input-error"
        aria-describedby="input-help-message"
        type=${this.type}
        name=${n.ifDefined(this.name)}
        form=${n.ifDefined(this.form)}
        placeholder=${n.ifDefined(this.placeholder)}
        maxlength=${n.ifDefined(this.maxlength)}
        .value=${(this.value||this.defaultValue)??""}
        step=${n.ifDefined(this.step)}
        min=${n.ifDefined(this.min)}
        max=${n.ifDefined(this.max)}
        pattern=${n.ifDefined(this.pattern)}
        autocomplete=${n.ifDefined(this.autoComplete)}
        autocapitalize=${this.autoCapitalize}
        autocorrect=${this.autocorrect}
        class=${this.getInputCssClass()}
        @input=${this.onInput}
        @change=${this.onChangeHandler}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
      />
    `}getRows(){if(!(this.type!==p.IGDS_INPUT_TYPES.textarea&&!this.rows))return this.size===p.IGDS_TEXTAREA_SIZES.large?p.IGDS_TEXTAREA_LARGE_SIZE_ROWS:this.rows}getMaxLengthContainer(){return a.when(this.type===p.IGDS_INPUT_TYPES.textarea&&this.maxlength,()=>r.html`
        <span class="input__max-length">
          ${this.getMaxLengthContainerContent()}
        </span>
      `)}getMaxLengthContainerContent(){return this.value?.length?`${this.padDigit(this.value.length)}/${this.maxlength}`:this.defaultValue?.length?`${this.padDigit(this.defaultValue.length)}/${this.maxlength}`:`${this.padDigit(0)}/${this.maxlength}`}padDigit(i){return i.toString().padStart(2,"0")}getHelpIcon(){return a.when(this.helpIcon,()=>r.html`
        <igds-icon node=${this.helpIcon} aria-hidden=${!this.helpIcon}>
        </igds-icon>
      `)}getHelpText(){return a.when(this.helpText,()=>r.html` <span class="input__help-text">${this.helpText}</span> `)}getHelpBox(){return a.when(!this.invalid&&this.helpText,()=>r.html`
        <div
          id="input-help-message"
          class=${u.classMap({"input__help-box":!0,"input__help-box--disabled":this.disabled})}
        >
          ${this.getHelpIcon()} ${this.getHelpText()}
        </div>
      `)}getError(){return a.when(this.invalid&&this.error,()=>r.html`
        <igds-default-error-box
          id="input-error"
          class="input__error-box"
          errormessage=${n.ifDefined(this.error)}
        >
        </igds-default-error-box>
      `)}render(){return r.html`
      ${this.getTopBox()}
      <div
        class=${u.classMap({input:!0,"input--textarea":this.type===p.IGDS_INPUT_TYPES.textarea,"input--with-right-positioned-icon":!!this.icon&&this.iconPosition==="right"})}
      >
        ${this.getInputBox()} ${this.getInputIcon()}
      </div>
      ${a.when(this.helpIcon&&this.helpText||this.error||this.maxlength,()=>r.html`
          <div class="input__bottom-box">
            ${this.getHelpBox()} ${this.getError()}
            ${this.getMaxLengthContainer()}
          </div>
        `)}
    `}getInputIconCssClass(){return u.classMap({input__icon:!0,"input__icon--textarea":this.type===p.IGDS_INPUT_TYPES.textarea,"input__icon--textarea-ltr":this.dir==="ltr"&&this.type===p.IGDS_INPUT_TYPES.textarea,"input__icon--ltr":this.dir==="ltr","input__icon--right":this.iconPosition==="right","input__icon--textarea-right":this.iconPosition==="right"&&this.type===p.IGDS_INPUT_TYPES.textarea,"input__icon--right-ltr":this.iconPosition==="right"&&this.dir==="ltr","input__icon--disabled":this.disabled,"input__icon--search":this.icon===s.search||this.icon===s.calendar&&!this.disabled})}getInputIcon(){return a.when(this.icon,()=>r.html`
        <igds-icon
          role=${n.ifDefined(this.icon===s.search||this.icon===s.calendar||this.icon===s.checkmark?"button":void 0)}
          tabindex=${n.ifDefined(this.getIconTabIndex())}
          aria-label=${n.ifDefined(this.getIconAriaLabel())}
          node=${this.icon}
          size=${_.IGDS_ICON_SIZES.medium}
          class=${this.getInputIconCssClass()}
          @click=${this.onIconClick}
          @keydown=${this.onIconKeyDown}
          aria-hidden=${!this.icon}
        >
        </igds-icon>
      `)}getIconAriaLabel(){if(this.icon)return this.icon===s.calendar?"Date picker icon":this.icon===s.checkmark?"Text cell icon":this.icon===s.search?"Search icon":"Input icon"}getIconTabIndex(){if(this.disabled)return-1;if(this.icon===s.search||this.icon===s.calendar||this.icon===s.checkmark)return 0}onIconClick(){(this.icon===s.search||this.icon===s.checkmark)&&this.emit(y.IGDS_EVENTS.inputIconClick,"clicked"),this.icon===s.calendar&&this.dispatchEvent(new CustomEvent("calendar-icon-click"))}onIconKeyDown(i){[g.IGDS_EVENT_KEYS.Space,g.IGDS_EVENT_KEYS.Enter].includes(i.key)&&this.onIconClick()}};exports.Input.formAssociated=!0;exports.Input.styles=S.unsafeCSS(x);t([e.property({type:String,attribute:!1})],exports.Input.prototype,"componentId",2);t([e.property({type:String,reflect:!0})],exports.Input.prototype,"dir",2);t([e.property({type:String})],exports.Input.prototype,"type",2);t([e.property({type:String})],exports.Input.prototype,"label",2);t([e.property({type:String,attribute:"label-icon"})],exports.Input.prototype,"labelIcon",2);t([e.property({type:String})],exports.Input.prototype,"name",2);t([e.property({type:String})],exports.Input.prototype,"form",2);t([e.property({type:String,attribute:"default-value"})],exports.Input.prototype,"defaultValue",2);t([e.property({type:String})],exports.Input.prototype,"placeholder",2);t([e.property({type:Boolean})],exports.Input.prototype,"disabled",2);t([e.property({type:Boolean})],exports.Input.prototype,"required",2);t([e.property({type:Boolean})],exports.Input.prototype,"readonly",2);t([e.property({type:Number})],exports.Input.prototype,"rows",2);t([e.property({type:Number})],exports.Input.prototype,"cols",2);t([e.property({type:Number})],exports.Input.prototype,"min",2);t([e.property({type:Number})],exports.Input.prototype,"max",2);t([e.property({type:String})],exports.Input.prototype,"pattern",2);t([e.property({type:Number,attribute:"maxlength"})],exports.Input.prototype,"maxlength",2);t([e.property({type:String})],exports.Input.prototype,"icon",2);t([e.property({type:String,attribute:"icon-position"})],exports.Input.prototype,"iconPosition",2);t([e.property({type:String,attribute:"help-text"})],exports.Input.prototype,"helpText",2);t([e.property({type:String,attribute:"help-icon"})],exports.Input.prototype,"helpIcon",2);t([e.property({type:String})],exports.Input.prototype,"tooltip",2);t([e.property({type:String,attribute:"tooltip-question"})],exports.Input.prototype,"tooltipQuestion",2);t([e.property({type:Boolean,attribute:"tooltip-icon"})],exports.Input.prototype,"tooltipIcon",2);t([e.property({type:Boolean})],exports.Input.prototype,"invalid",2);t([e.property({type:String})],exports.Input.prototype,"error",2);t([e.property({type:Boolean,attribute:"auto-focus"})],exports.Input.prototype,"autoFocus",2);t([e.property({type:String,attribute:"autocomplete"})],exports.Input.prototype,"autoComplete",2);t([e.property({type:String,attribute:"autocapitalize"})],exports.Input.prototype,"autoCapitalize",2);t([e.property({type:Boolean})],exports.Input.prototype,"autocorrect",2);t([e.property({type:Boolean,attribute:"autoheight"})],exports.Input.prototype,"autoHeight",2);t([e.property({type:Number})],exports.Input.prototype,"step",2);t([e.property({type:String})],exports.Input.prototype,"size",2);t([e.property({attribute:!1})],exports.Input.prototype,"onChange",2);t([f.query(".input")],exports.Input.prototype,"input",2);t([f.query("textarea")],exports.Input.prototype,"textarea",2);exports.Input=t([b.customElement($.IGDS_TAGS.input)],exports.Input);
