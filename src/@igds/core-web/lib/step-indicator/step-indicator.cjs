"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const T=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),C=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/provide.cjs"),O=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/consume.cjs"),h=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),g=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),N=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/style-map.cjs"),m=require("../constants/events.cjs"),b=require("../constants/tags.cjs"),y=require("@igds/icons"),E=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const n=require("./constants.cjs"),$=require("./step-indicator.scss.cjs"),I=require("./context.cjs");require("../icon/icon.cjs");const f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var D=Object.defineProperty,q=Object.getOwnPropertyDescriptor,c=(d,t,s,r)=>{for(var e=r>1?void 0:r?q(t,s):t,i=d.length-1,a;i>=0;i--)(a=d[i])&&(e=(r?a(t,s,e):a(e))||e);return r&&e&&D(t,s,e),e};exports.StepIndicator=class extends E.IGDSElement{constructor(){super(...arguments),this.orientation=n.IGDS_STEP_INDICATOR_ORIENTATION.horizontal,this.current=1,this.flat=!1,this.context=new I.IgdsStepIndicatorContext,this.steps=this.context.getSteps()}onStepChanged(){this.emit(m.IGDS_EVENTS.change,"step-changed")}isCurrentStep(t,s){return t===s+1}connectedCallback(){super.connectedCallback(),this.context.onChange=()=>{this.parentContext&&(this.myParentStepId=this.parentContext?.registerSubSteps(this.context.getSteps(),this.current)),this.steps=this.context.getSteps(),this.style.setProperty("--igds-list-step-count",this.steps.length.toString())}}firstUpdated(t){super.firstUpdated(t),this.context.setOrientation(this.orientation??n.IGDS_STEP_INDICATOR_ORIENTATION.horizontal)}update(t){super.update(t),t.has("current")&&t.get("current")!==void 0&&this.onStepChanged(),this.parentContext&&t.has("current")&&this.parentContext.updateNestedCurrentStep(this.myParentStepId,this.current)}disconnectedCallback(){super.disconnectedCallback()}renderFlatStepIndicator(){return o.html`
      <nav class="step-indicator__flat-box">
        <div
          class="step-indicator step-indicator--flat"
          role="progressbar"
          aria-label=${this.ariaLabel??"Progress steps"}
          aria-valuemin="1"
          aria-valuemax=${this.steps.length}
          aria-valuenow=${this.current}
          aria-busy="true"
          aria-live="polite"
        >
          <span
            class="step-indicator__progress"
            style=${N.styleMap({width:`${100*this.current/this.steps.length}%`})}
          ></span>
        </div>
        <div class="step-indicator__status">
          ${this.current}/${this.steps.length}
        </div>
      </nav>
    `}renderHorizontalMobileHeader(){return l.when(this.orientation===n.IGDS_STEP_INDICATOR_ORIENTATION.horizontal,()=>o.html`
        ${h.repeat(this.steps,({id:t})=>t,({label:t},s)=>o.html`
            <div
              class=${u.classMap({"step-indicator__header":!0,"step-indicator__header--shown":this.isCurrentStep(this.current,s)})}
            >
              ${t}
            </div>
          `)}
      `)}renderStepItem({isNested:t,isCompleted:s,isCurrent:r,number:e,label:i,secondaryLabel:a,children:p,parentNumber:S}){return o.html`
      <li
        class=${u.classMap({"step-indicator__item":!0,"step-indicator__item--nested":t,"step-indicator__item--completed":s,"step-indicator__item--current":r})}
        aria-current=${g.ifDefined(r?"step":void 0)}
      >
        <div
          class="step-indicator__details"
          @click=${()=>this.emitClick({stepNumber:e,isNested:t,...S!==void 0?{parentNumber:S}:void 0})}
        >
          <span class="step-indicator__number">
            ${e}
            <igds-icon
              node=${y.checkmark}
              class="step-indicator__check-icon"
            ></igds-icon>
          </span>
          <div class="step-indicator__label-wrapper">
            <span class="step-indicator__label"> ${i} </span>
            ${l.when(a,()=>o.html`<span class="step-indicator__secondary-label">
                  ${a}
                </span>`)}
          </div>
        </div>
        ${p}
      </li>
    `}emitClick(t){this.emit(m.IGDS_EVENTS.click,t)}render(){return this.parentContext?null:o.html`
      ${l.when(!this.flat&&(this.orientation===n.IGDS_STEP_INDICATOR_ORIENTATION.vertical||this.orientation===n.IGDS_STEP_INDICATOR_ORIENTATION.horizontal&&this.steps.length<=n.MAX_HORIZONTAL_STEPS),()=>o.html`
          <nav
            class="step-indicator__box"
            aria-label=${this.ariaLabel??"Progress steps"}
          >
            <ol
              class=${u.classMap({"step-indicator":!0,"step-indicator--horizontal":this.orientation===n.IGDS_STEP_INDICATOR_ORIENTATION.horizontal,"step-indicator--vertical":this.orientation===n.IGDS_STEP_INDICATOR_ORIENTATION.vertical})}
            >
              ${h.repeat(this.steps,({id:t})=>t,({label:t,secondaryLabel:s,children:r},e)=>this.renderStepItem({isNested:!1,isCompleted:this.current>e+1,isCurrent:this.isCurrentStep(this.current,e),number:e+1,label:t,secondaryLabel:s,children:l.when(this.orientation===n.IGDS_STEP_INDICATOR_ORIENTATION.vertical&&r!==void 0&&r.items.length>0,()=>o.html`
                        <ol class="step-indicator__sub-steps">
                          ${h.repeat(r?.items??[],({id:i})=>i,({label:i,secondaryLabel:a},p)=>this.renderStepItem({isNested:!0,isCompleted:(r?.current??0)>p+1,isCurrent:this.isCurrentStep(r?.current,p),number:p+1,label:i,secondaryLabel:a,parentNumber:e}))}
                        </ol>
                      `)}))}
            </ol>
            ${this.renderHorizontalMobileHeader()}
          </nav>
        `,()=>this.renderFlatStepIndicator())}
    `}};exports.StepIndicator.styles=f.unsafeCSS($);c([_.property({type:String})],exports.StepIndicator.prototype,"orientation",2);c([_.property({type:Number})],exports.StepIndicator.prototype,"current",2);c([_.property({type:Boolean})],exports.StepIndicator.prototype,"flat",2);c([C.provide({context:I.igdsStepIndicatorContext})],exports.StepIndicator.prototype,"context",2);c([O.consume({context:I.igdsStepIndicatorContext})],exports.StepIndicator.prototype,"parentContext",2);c([v.state()],exports.StepIndicator.prototype,"steps",2);exports.StepIndicator=c([T.customElement(b.IGDS_TAGS.stepIndicator)],exports.StepIndicator);
