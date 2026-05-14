"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),s=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs");require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const m=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const S=require("../abstractions/angular-form-element.cjs"),y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),g=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),p=require("../constants/events.cjs"),_=require("../constants/tags.cjs"),o=require("./constants.cjs"),V=require("./slider.scss.cjs"),v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,t=(u,e,i,a)=>{for(var r=a>1?void 0:a?x(e,i):e,n=u.length-1,l;n>=0;n--)(l=u[n])&&(r=(a?l(e,i,r):l(r))||r);return a&&r&&f(e,i,r),r};exports.Slider=class extends S.AngularFormElement{constructor(){super(),this.componentId="slider",this.dir="rtl",this.variant=o.IGDS_SLIDER_VARIANTS.single,this.min=0,this.max=100,this.step=1,this.disabled=!1,this.required=!1,this.invalid=!1,this.onChange=null,this.setAsAngularLibFormElement(),this._internals=this.attachInternals()}firstUpdated(){this.variant===o.IGDS_SLIDER_VARIANTS.range?this.initRangeSlider():this.initSlider()}updated(){this.variant===o.IGDS_SLIDER_VARIANTS.range&&this.updateValuePositions()}initSlider(){if(this.sliderInputElement){if(this.value){const e=Number(this.value)/this.max*100,i=this.dir==="rtl"?"to left":"to right";this.sliderInputElement.style.background=`linear-gradient(${i}, #0068f5 ${e}%, #ced7e0 ${e}%)`}else this.value=this.min.toString();this._internals.setFormValue(this.value)}}initRangeSlider(){if(this.minValue=Number(this.minValueName),this.maxValue=Number(this.maxValueName),this.updateRangeBackground(),this.minValueName&&this.maxValueName){const e=new FormData;e.append("slider-min",this.minValueName),e.append("slider-max",this.maxValueName),this._internals.setFormValue(e)}setTimeout(()=>this.updateValuePositions(),0)}updateRangeBackground(){const e=(Number(this.minValue)-this.min)/(this.max-this.min)*100,i=(Number(this.maxValue)-this.min)/(this.max-this.min)*100,r=`linear-gradient(
      ${this.dir==="rtl"?"to left":"to right"},
      #ced7e0 0%,
      #ced7e0 ${Math.min(e,i)}%,
      #0068f5 ${Math.min(e,i)}%,
      #0068f5 ${Math.max(e,i)}%,
      #ced7e0 ${Math.max(e,i)}%,
      #ced7e0 100%
    )`;this.sliderMinInputElement&&(this.sliderMinInputElement.style.background=r)}updateValuePositions(){if(!this.sliderMinValueNameElement||!this.sliderMaxValueNameElement)return;const e=(Number(this.minValue)-this.min)/(this.max-this.min)*100,i=(Number(this.maxValue)-this.min)/(this.max-this.min)*100;this.dir==="rtl"?(this.sliderMinValueNameElement.style.right=`${e}%`,this.sliderMinValueNameElement.style.transform=`translateX(${e}%)`,this.sliderMaxValueNameElement.style.right=`${i}%`,this.sliderMaxValueNameElement.style.transform=`translateX(${i}%)`):(this.sliderMinValueNameElement.style.left=`${e}%`,this.sliderMinValueNameElement.style.transform=`translateX(${-e}%)`,this.sliderMaxValueNameElement.style.left=`${i}%`,this.sliderMaxValueNameElement.style.transform=`translateX(${-i}%)`)}render(){return this.variant===o.IGDS_SLIDER_VARIANTS.range?this.renderRangeSlider():this.renderSingleSlider()}renderSingleSlider(){return m.html`
      <div class="slider">
        <label for=${this.componentId} class="slider__label"
          >${this.label}</label
        >
        <div class="slider__box">
          ${g.when(this.icon,()=>m.html` <igds-icon node=${this.icon}></igds-icon> `)}
          <input
            id=${this.componentId}
            type="range"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            ?disabled=${this.disabled}
            value=${this.value??""}
            name=${y.ifDefined(this.name)}
            class="slider__input"
            @input=${this.onChangeHandler}
          />
          <span class="slider__value"
            >${`${this.value??o.INITIAL_SLIDER_VALUE}%`}</span
          >
        </div>
      </div>
    `}renderRangeSlider(){return m.html`
      <div class="slider slider--range">
        <label class="slider__label">${this.label}</label>
        <div class="slider__box slider__box--range">
          <span class="slider__value slider__value--range"
            >${`${this.min}`}</span
          >
          <div class="slider__range-container">
            <div class="slider__base"></div>
            <input
              type="range"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              ?disabled=${this.disabled}
              value=${this.minValue?.toString()}
              name="slider-min"
              class="slider__input slider__input-min"
              @input=${e=>this.onRangeValueChange(e,!0)}
            />
            <input
              type="range"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              ?disabled=${this.disabled}
              value=${this.maxValue?.toString()}
              name="slider-max"
              class="slider__input slider__input-max"
              @input=${e=>this.onRangeValueChange(e)}
            />
            <div class="slider__value-names-box">
              <span class="slider__min-value-name">${this.minValue}</span>
              <span class="slider__max-value-name">${this.maxValue}</span>
            </div>
          </div>
          <span class="slider__value slider__value--range"
            >${`${this.max}`}</span
          >
        </div>
      </div>
    `}onChangeHandler(e){const i=e.target;i?.value&&(this.value=i.value,this.initSlider(),this.onChange?.(e),this.emit(p.IGDS_EVENTS.change,this.value))}processFormDataAndEvents(e,i){const a=new Event("change",{bubbles:!0,composed:!0});i?this.sliderMinInputElement.dispatchEvent(a):this.sliderMaxInputElement.dispatchEvent(a);const r=new FormData;r.append("slider-min",this.minValue.toString()),r.append("slider-max",this.maxValue.toString()),this._internals.setFormValue(r),this.onChange?.(e),this.emit(p.IGDS_EVENTS.change,`${this.minValue}-${this.maxValue}`)}onRangeValueChange(e,i){const a=e.target;if(!a?.value)return;const r=Number(a.value),n=this.maxValue-this.offsetDistance,l=this.minValue+this.offsetDistance;i?this.minValue=r>=n?n:r:this.maxValue=r<=l?l:r,a.value=(i?this.minValue:this.maxValue).toString(),this.updateRangeBackground(),this.updateValuePositions(),this.processFormDataAndEvents(e,i)}get offsetDistance(){return Math.trunc((this.max-this.min)/100*o.RANGE_SLIDER_MIN_DISTANCE)}};exports.Slider.formAssociated=!0;exports.Slider.styles=v.unsafeCSS(V);t([s.property({type:String,attribute:!1})],exports.Slider.prototype,"componentId",2);t([s.property({type:String,reflect:!0})],exports.Slider.prototype,"dir",2);t([s.property({type:String})],exports.Slider.prototype,"label",2);t([s.property({type:String})],exports.Slider.prototype,"variant",2);t([s.property({type:Number})],exports.Slider.prototype,"min",2);t([s.property({type:Number})],exports.Slider.prototype,"max",2);t([s.property({type:Number})],exports.Slider.prototype,"step",2);t([s.property({type:Boolean})],exports.Slider.prototype,"disabled",2);t([s.property({type:String})],exports.Slider.prototype,"icon",2);t([s.property({type:String})],exports.Slider.prototype,"name",2);t([s.property({type:String})],exports.Slider.prototype,"form",2);t([s.property({type:String,attribute:"default-value"})],exports.Slider.prototype,"defaultValue",2);t([s.property({type:Boolean})],exports.Slider.prototype,"required",2);t([s.property({type:Boolean})],exports.Slider.prototype,"invalid",2);t([s.property({type:String})],exports.Slider.prototype,"error",2);t([s.property({type:String})],exports.Slider.prototype,"minValueName",2);t([s.property({type:String})],exports.Slider.prototype,"maxValueName",2);t([s.property({attribute:!1})],exports.Slider.prototype,"onChange",2);t([d.query(".slider__input")],exports.Slider.prototype,"sliderInputElement",2);t([d.query(".slider__input-min")],exports.Slider.prototype,"sliderMinInputElement",2);t([d.query(".slider__input-max")],exports.Slider.prototype,"sliderMaxInputElement",2);t([d.query(".slider__min-value-name")],exports.Slider.prototype,"sliderMinValueNameElement",2);t([d.query(".slider__max-value-name")],exports.Slider.prototype,"sliderMaxValueNameElement",2);t([h.state()],exports.Slider.prototype,"minValue",2);t([h.state()],exports.Slider.prototype,"maxValue",2);exports.Slider=t([c.customElement(_.IGDS_TAGS.slider)],exports.Slider);
