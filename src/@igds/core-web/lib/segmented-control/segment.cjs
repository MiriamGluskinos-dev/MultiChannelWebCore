"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),c=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),r=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),p=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),g=require("../node_modules/.pnpm/@lit_context@1.1.6/node_modules/@lit/context/lib/decorators/consume.cjs");require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const b=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),h=require("../constants/common.cjs"),S=require("../constants/tags.cjs"),x=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const f=require("./context.cjs"),u=require("../utils/common.cjs"),T=require("./segment.scss.cjs"),v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var _=Object.defineProperty,y=Object.getOwnPropertyDescriptor,t=(a,e,i,o)=>{for(var s=o>1?void 0:o?y(e,i):e,n=a.length-1,l;n>=0;n--)(l=a[n])&&(s=(o?l(e,i,s):l(s))||s);return o&&s&&_(e,i,s),s};exports.Segment=class extends x.IGDSElement{constructor(){super(...arguments),this.isFirstRender=!0,this.id=u.generateId(),this.isOverflowed=!1,this.resizeHandler=u.throttle(()=>{this.checkTruncated()},h.DELAY_BEFORE_CHECKING_TRUNCATED)}firstUpdated(e){super.firstUpdated(e),window.addEventListener("resize",this.resizeHandler),setTimeout(()=>{this.checkTruncated()},h.DELAY_BEFORE_CHECKING_TRUNCATED)}update(e){super.update(e),e.has("selected")&&(this.isFirstRender?(this.contextData?.updateSelectedId(this.id,{skipEvent:!0}),this.isFirstRender=!1):this.contextData?.updateSelectedId(this.id))}disconnectedCallback(){super.disconnectedCallback(),this.contextData?.selectedId===this.id&&this.contextData?.updateSelectedId(void 0,{skipEvent:!0}),window.removeEventListener("resize",this.resizeHandler)}checkTruncated(){this.isOverflowed=this.label.scrollWidth>this.label.clientWidth}handleClick(){this.contextData?.updateSelectedId(this.contextData?.selectedId===this.id?void 0:this.id)}handleChangeIcon(e){if(!e.target)return;const i=e.target.assignedNodes({flatten:!0});this.hasIcon=i.length>0}handleChangeText(e){if(!e.target)return;const o=e.target.assignedNodes({flatten:!0}).reduce((s,n)=>s+n.textContent?.trim(),"");this.labelText=o,this.contextData?.reportAboutTextSegment(this.id,o!==""),this.hasNoText=o===""}showTooltip(){this.isOverflowed&&this.tooltip.setAttribute("shown","true")}hideTooltip(){this.isOverflowed&&this.tooltip.removeAttribute("shown")}render(){return b.html`
      <button
        aria-pressed=${!!this.selected}
        ?disabled=${!!this.disabled||this.contextData?.disabled}
        class=${d.classMap({segment:!0,[`segment--${this.contextData?.size}`]:!0,"segment--selected":this.contextData?.selectedId===this.id})}
        @click=${()=>this.handleClick()}
        @mouseenter=${this.showTooltip}
        @mouseleave=${this.hideTooltip}
        @focus=${this.showTooltip}
        @blur=${this.hideTooltip}
      >
        <div
          class=${d.classMap({segment__icon:!0,"segment__icon--shown":!!this.hasIcon})}
        >
          <slot name="icon" @slotchange=${this.handleChangeIcon}></slot>
        </div>
        <div
          class=${d.classMap({segment__label:!0,"segment__label--no-text":!!this.hasNoText})}
        >
          <slot @slotchange=${this.handleChangeText}></slot>
        </div>
      </button>
      <igds-tooltip
        class="segment__tooltip"
        content=${this.labelText}
        placement="bottom"
      ></igds-tooltip>
    `}};exports.Segment.styles=v.unsafeCSS(T);t([c.property({type:Boolean})],exports.Segment.prototype,"selected",2);t([c.property({type:Boolean})],exports.Segment.prototype,"disabled",2);t([c.property({type:String})],exports.Segment.prototype,"id",2);t([g.consume({context:f.segmentContext,subscribe:!0})],exports.Segment.prototype,"contextData",2);t([r.state()],exports.Segment.prototype,"hasIcon",2);t([r.state()],exports.Segment.prototype,"hasNoText",2);t([r.state()],exports.Segment.prototype,"isOverflowed",2);t([r.state()],exports.Segment.prototype,"labelText",2);t([p.query(".segment__label")],exports.Segment.prototype,"label",2);t([p.query("igds-tooltip")],exports.Segment.prototype,"tooltip",2);exports.Segment=t([m.customElement(S.IGDS_TAGS.segment)],exports.Segment);
