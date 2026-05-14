"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const x=require("../abstractions/angular-form-element.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),e=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),n=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),b=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),a=require("../constants/events.cjs"),S=require("../constants/placements.cjs"),y=require("../constants/tags.cjs"),u=require("./constants.cjs"),m=require("@igds/icons"),v=require("./spin-box.scss.cjs"),$=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var I=Object.defineProperty,B=Object.getOwnPropertyDescriptor,t=(h,i,s,p)=>{for(var r=p>1?void 0:p?B(i,s):i,c=h.length-1,d;c>=0;c--)(d=h[c])&&(r=(p?d(i,s,r):d(r))||r);return p&&r&&I(i,s,r),r};exports.SpinBox=class extends x.AngularFormElement{constructor(){super(),this.componentId="spin-box",this.size=u.IGDS_SPIN_BOX_SIZES.big,this.disabled=!1,this.required=!1,this.min=0,this.max=1/0,this.tooltipIcon=!1,this.invalid=!1,this.autoFocus=!1,this.onChange=null,this.onAdd=()=>{const s=Number(this.value)+1;this.value=s.toString(),this._internals.setFormValue(this.value),this.inputElement.value=this.value,this.inputElement.dispatchEvent(new Event("change"))},this.onSubtract=()=>{const s=Number(this.value)-1;this.value=s.toString(),this._internals.setFormValue(this.value),this.inputElement.value=this.value,this.inputElement.dispatchEvent(new Event("change"))},this.setAsAngularLibFormElement(),this._internals=this.attachInternals()}firstUpdated(i){super.firstUpdated(i),this.value||(this.value="0"),this.min&&(this.value=this.min.toString())}render(){return o.html`
      <div role="group" class="spin-box">
        <div class="spin-box__top-container">
          ${l.when(this.label,()=>o.html`
              <label
                for=${this.componentId}
                class=${n.classMap({"spin-box__label-box":!0,"spin-box__label-box--disabled":this.disabled})}
              >
                <span
                  class=${n.classMap({"spin-box__label":!0,"spin-box__label--required":this.required,"spin-box__label--disabled":this.disabled})}
                >
                  ${this.label}
                </span>
              </label>
            `)}
          ${this.getTooltipIcon()} ${this.getTooltipQuestion()}
        </div>
        <div
          class=${n.classMap({"spin-box__group":!0,"spin-box__group--disabled":this.disabled,"spin-box__group--small":this.size===u.IGDS_SPIN_BOX_SIZES.small})}
        >
          <igds-button
            ?disabled=${this.isAddButtonDisabled()}
            class=${n.classMap({"spin-box__action-button":!0,"spin-box__action-button--small":this.size===u.IGDS_SPIN_BOX_SIZES.small})}
            @igds-click=${this.onAdd}
          >
            <igds-icon slot="icon" node=${m.plus}></igds-icon>
          </igds-button>
          <input
            id=${this.componentId}
            type="number"
            .value=${this.value??""}
            ?disabled=${this.disabled}
            name=${b.ifDefined(this.name)}
            form=${b.ifDefined(this.form)}
            class=${n.classMap({"spin-box__input":!0,"spin-box__input--disabled":this.disabled,"spin-box__input--invalid":this.invalid})}
            aria-invalid=${this.invalid}
            aria-errormessage="spin-box-error"
            aria-describedby="spin-box-help-message"
            aria-live="polite"
            @change=${this.onInputChange}
            @input=${this.onInput}
            @focus=${this.onInputFocus}
            @blur=${this.onInputBlur}
          />
          <igds-button
            ?disabled=${this.isSubtractButtonDisabled()}
            class=${n.classMap({"spin-box__action-button":!0,"spin-box__action-button--small":this.size===u.IGDS_SPIN_BOX_SIZES.small})}
            @igds-click=${this.onSubtract}
          >
            <igds-icon slot="icon" node=${m.minus}></igds-icon>
          </igds-button>
        </div>
        ${this.getError()} ${this.getHelpBox()}
      </div>
    `}getTooltipIcon(){return o.html`
      ${l.when(this.tooltipIcon,()=>o.html`
          <igds-tooltip
            content=${this.tooltip??""}
            placement=${S.IGDS_PLACEMENTS.insetInlineStartTop}
            class="spin-box__tooltip"
          >
            <igds-icon
              node=${m.helpOutlined}
              class=${n.classMap({"spin-box__tooltip-icon":!0,"spin-box__tooltip-icon--disabled":this.disabled})}
            >
            </igds-icon>
          </igds-tooltip>
        `)}
    `}getTooltipQuestion(){return o.html`
      ${l.when(this.tooltipQuestion,()=>o.html`
          <igds-tooltip
            content=${this.tooltip??""}
            placement=${S.IGDS_PLACEMENTS.insetInlineStartTop}
            class="spin-box__tooltip-container"
          >
            <span
              class=${n.classMap({"spin-box__tooltip-question":!0,"spin-box__tooltip-question--disabled":this.disabled})}
            >
              ${this.tooltipQuestion}
            </span>
          </igds-tooltip>
        `)}
    `}isAddButtonDisabled(){return this.disabled||Number(this.value)>=this.max}onInputChange(i){const s=i.target,p=s.value;Number(p)<=this.min?(this.value=this.min.toString(),s.value=this.value):Number(p)>=this.max?(this.value=this.max.toString(),s.value=this.value):this.value=p,this._internals.setFormValue(this.value),this.onChange?.(i),this.emit(a.IGDS_EVENTS.change,this.value)}onInput(i){const s=i.target;this.emit(a.IGDS_EVENTS.input,s.value)}onInputFocus(i){const s=i.target;this.emit(a.IGDS_EVENTS.focus,s.value)}onInputBlur(i){const s=i.target;this.emit(a.IGDS_EVENTS.blur,s.value)}isSubtractButtonDisabled(){return this.disabled||this.value==="0"||Number(this.value)<=this.min}getError(){return o.html`
      ${l.when(this.invalid&&this.error,()=>o.html`
          <igds-default-error-box
            id="spin-box-error"
            errormessage=${b.ifDefined(this.error)}
          >
          </igds-default-error-box>
        `)}
    `}getHelpBox(){return o.html`
      ${l.when(this.helpIcon&&this.helpText,()=>o.html`
          <div
            id="spin-box-help-message"
            class=${n.classMap({"spin-box__help-box":!0,"spin-box__help-box--disabled":this.disabled})}
          >
            ${this.getHelpIcon()} ${this.getHelpText()}
          </div>
        `)}
    `}getHelpIcon(){return o.html`
      ${l.when(this.helpIcon,()=>o.html`
          <igds-icon node=${this.helpIcon} aria-hidden=${!this.helpIcon}>
          </igds-icon>
        `)}
    `}getHelpText(){return o.html`
      ${l.when(this.helpText,()=>o.html` <span class="spin-box__help-text">${this.helpText}</span> `)}
    `}};exports.SpinBox.formAssociated=!0;exports.SpinBox.styles=$.unsafeCSS(v);t([e.property({type:String,attribute:!1})],exports.SpinBox.prototype,"componentId",2);t([e.property({type:String})],exports.SpinBox.prototype,"size",2);t([e.property({type:String})],exports.SpinBox.prototype,"label",2);t([e.property({type:String})],exports.SpinBox.prototype,"name",2);t([e.property({type:String})],exports.SpinBox.prototype,"form",2);t([e.property({type:String})],exports.SpinBox.prototype,"defaultValue",2);t([e.property({type:Boolean})],exports.SpinBox.prototype,"disabled",2);t([e.property({type:Boolean})],exports.SpinBox.prototype,"required",2);t([e.property({type:Number})],exports.SpinBox.prototype,"min",2);t([e.property({type:Number})],exports.SpinBox.prototype,"max",2);t([e.property({type:String})],exports.SpinBox.prototype,"helpText",2);t([e.property({type:String})],exports.SpinBox.prototype,"helpIcon",2);t([e.property({type:String})],exports.SpinBox.prototype,"tooltip",2);t([e.property({type:String})],exports.SpinBox.prototype,"tooltipQuestion",2);t([e.property({type:Boolean})],exports.SpinBox.prototype,"tooltipIcon",2);t([e.property({type:Boolean})],exports.SpinBox.prototype,"invalid",2);t([e.property({type:String})],exports.SpinBox.prototype,"error",2);t([e.property({type:Boolean})],exports.SpinBox.prototype,"autoFocus",2);t([e.property({attribute:!1})],exports.SpinBox.prototype,"onChange",2);t([g.query(".spin-box__input")],exports.SpinBox.prototype,"inputElement",2);exports.SpinBox=t([_.customElement(y.IGDS_TAGS.spinBox)],exports.SpinBox);
