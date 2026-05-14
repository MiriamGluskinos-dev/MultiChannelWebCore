"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const G=require("../abstractions/angular-form-element.cjs"),v=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),a=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),A=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),f=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),I=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),S=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),R=require("../constants/events.cjs"),h=require("../constants/event-keys.cjs"),D=require("../constants/tags.cjs"),i=require("./constants.cjs"),_=require("@igds/icons"),m=require("../utils/common.cjs"),y=require("./rating.scss.cjs");require("../icon/icon.cjs");const E=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var b=Object.defineProperty,N=Object.getOwnPropertyDescriptor,n=(d,t,e,o)=>{for(var s=o>1?void 0:o?N(t,e):t,u=d.length-1,c;u>=0;u--)(c=d[u])&&(s=(o?c(t,e,s):c(s))||s);return o&&s&&b(t,e,s),s};exports.Rating=class extends G.AngularFormElement{constructor(){super(),this.componentId="rating",this.dir="rtl",this.variant=i.IGDS_RATING_VARIANTS.star,this.readonly=!1,this.label="",this.ratingGrade=[],this.onChange=null,this.isHovering=!1,this.hoverValue=0,this.iconMaxCount=5,this.highlightedIndex=null,this.selectedIndex=null,this._internals=this.attachInternals(),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this.handleDocumentMouseDown)}handleDocumentMouseDown(t){const e=t.composedPath();this&&!e.includes(this)&&this.resetHighlightedSelection()}updated(t){super.updated(t),this.initializeRatingGrade(t),this.handleValuePropChange(t)}initializeRatingGrade(t){(t.has("variant")||t.has("ratingGrade"))&&this.variant===i.IGDS_RATING_VARIANTS.face&&!this.ratingGrade.length&&(this.ratingGrade=i.IGDS_VERBAL_RATING_GRADES)}handleValuePropChange(t){!t.has("variant")||!t.has("value")||this.variant===i.IGDS_RATING_VARIANTS.face&&this.value&&(this.selectedIndex=this.ratingGrade.indexOf(this.value))}render(){return r.html`
      <div
        role="radiogroup"
        aria-label="Rating"
        class=${l.classMap({rating:!0,"rating--face":this.variant===i.IGDS_RATING_VARIANTS.face})}
        @focus=${this.onFocus}
        @keydown=${this.onKeyDown}
        tabindex="0"
      >
        ${this.variant===i.IGDS_RATING_VARIANTS.face?this.renderFaceRatingButtons():this.renderStarRatingButtons()}
      </div>
      ${I.when(this.label,()=>r.html`
            <label for=${this.componentId} class="rating__label"
              >${this.label}</label
            >
          `)}
      <input
        id=${this.componentId}
        name=${S.ifDefined(this.name)}
        form=${S.ifDefined(this.form)}
        class="rating__input"
        tabindex="-1"
        @change=${this.onChangeHandler}
      />
    `}onChangeHandler(t){this.onChange?.(t)}renderStarRatingButtons(){return r.html`
      ${p.repeat(Array(this.iconMaxCount),(t,e)=>r.html`
          <button
            role="radio"
            aria-label="Star button"
            aria-checked=${Number(this.value)>=e+1}
            @mouseenter=${()=>this.onMouseEnter(e)}
            @mouseleave=${this.onMouseLeave}
            @click=${()=>this.onStarRatingClick(e)}
            tabindex="-1"
            class=${l.classMap({rating__button:!0,"rating__button--readonly":this.readonly})}
          >
            <igds-icon
              node=${_.starOutlined}
              class="rating__star-icon"
            ></igds-icon>
            <igds-icon
              node=${_.starFilled}
              class=${l.classMap({"rating__star-icon":!0,"rating__star-icon--hovered":!0,"rating__star-icon--shown":this.isHovering&&this.hoverValue>=e+1})}
            ></igds-icon>
            <igds-icon
              node=${_.starFilled}
              class="rating__star-icon rating__star-icon--filled"
              class=${l.classMap({"rating__star-icon":!0,"rating__star-icon--filled":!0,"rating__star-icon--shown":Number(this.value)>=e+1})}
            ></igds-icon>
          </button>
        `)}
    `}getFaceButtonCssClasses(t){return l.classMap({rating__button:!0,"rating__button--face":!0,"rating__button--face-readonly":this.readonly,"rating__button--highlighted-bad-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[0]&&this.highlightedIndex===t,"rating__button--highlighted-not-good-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[1]&&this.highlightedIndex===t,"rating__button--highlighted-ok-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[2]&&this.highlightedIndex===t,"rating__button--highlighted-good-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[3]&&this.highlightedIndex===t,"rating__button--highlighted-excellent-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[4]&&this.highlightedIndex===t})}getFaceIconCssClasses(t){return l.classMap({"rating__face-icon":!0,"rating__face-icon--bad-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[0]&&this.selectedIndex===t,"rating__face-icon--not-good-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[1]&&this.selectedIndex===t,"rating__face-icon--ok-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[2]&&this.selectedIndex===t,"rating__face-icon--good-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[3]&&this.selectedIndex===t,"rating__face-icon--excellent-smile":this.value===i.IGDS_VERBAL_RATING_GRADES[4]&&this.selectedIndex===t})}renderFaceRatingButtons(){return r.html`
      ${p.repeat(i.IGDS_RATING_FACE_ICON_NAMES,(t,e)=>r.html`
          <div class="rating__box">
            <button
              role="radio"
              aria-label="Smile button"
              aria-checked=${this.selectedIndex===e}
              class=${this.getFaceButtonCssClasses(e)}
              tabindex="-1"
              @click=${()=>this.onFaceRatingClick(this.ratingGrade[e],e)}
            >
              <igds-icon
                node=${t}
                class=${this.getFaceIconCssClasses(e)}
              >
              </igds-icon>
            </button>
            ${I.when(this.ratingGrade?.length,()=>r.html`
                <span class="rating__grade">${this.ratingGrade[e]}</span>
              `)}
          </div>
        `)}
    `}onMouseEnter(t){this.readonly||(this.isHovering=!0,this.hoverValue=t+1,this.emit(R.IGDS_EVENTS.hover))}onMouseLeave(){this.isHovering=!1}onStarRatingClick(t){this.readonly||(this.resetHighlightedSelection(),this.value=(t+1).toString(),this.commitSelection())}resetHighlightedSelection(){(this.highlightedIndex||this.highlightedIndex===0)&&(this.removeHighlightedClass(),this.highlightedIndex=null)}removeHighlightedClass(){this.ratingButtons&&this.ratingButtons.forEach(t=>{t.classList.contains("rating__button--highlighted")&&t.classList.remove("rating__button--highlighted")})}onFaceRatingClick(t,e){this.readonly||(this.resetHighlightedSelection(),this.value=t,this.selectedIndex=e,this.commitSelection())}onFocus(t){!this.ratingButtons.length||this.readonly||!t.target.matches(":focus-visible")||(this.variant===i.IGDS_RATING_VARIANTS.face?(this.highlightedIndex=0,this.selectedIndex=this.highlightedIndex,this.value=this.ratingGrade[this.highlightedIndex]):(this.highlightedIndex=this.value&&Number(this.value)>0?Number(this.value)-1:0,this.value=this.highlightedIndex===0?"0":(this.highlightedIndex+1).toString()),this.ratingButtons[this.highlightedIndex].classList.add("rating__button--highlighted"),this.commitSelection())}onKeyDown(t){if(!this.ratingButtons.length||this.readonly)return;const e=this.handleTabKey(t);if(e===null)return;const{ArrowStart:o,ArrowEnd:s}=this.getDirectionKeys();this.isIncreaseKey(t.key,s)?this.handleIncrease(t):this.isDecreaseKey(t.key,o)&&this.handleDecrease(t),this.updateHighlightedElement(e),this.commitSelection()}handleTabKey(t){return t.key!==h.IGDS_EVENT_KEYS.Tab?!1:(this.removeHighlightedClass(),this.highlightedIndex===null?(t.preventDefault(),this.highlightedIndex=0,!1):!0)}getDirectionKeys(){const t=m.getDirection(this)==="rtl";return{ArrowStart:t?h.IGDS_EVENT_KEYS.ArrowRight:h.IGDS_EVENT_KEYS.ArrowLeft,ArrowEnd:t?h.IGDS_EVENT_KEYS.ArrowLeft:h.IGDS_EVENT_KEYS.ArrowRight}}isIncreaseKey(t,e){return[h.IGDS_EVENT_KEYS.ArrowUp,e].includes(t)}isDecreaseKey(t,e){return[h.IGDS_EVENT_KEYS.ArrowDown,e].includes(t)}handleIncrease(t){t.preventDefault();const e=this.highlightedIndex===null?0:this.highlightedIndex+1;this.highlightedIndex=m.clampNumber(e,0,this.iconMaxCount-1),this.updateValueForIncrease()}handleDecrease(t){t.preventDefault(),this.highlightedIndex=this.highlightedIndex?this.highlightedIndex-1:0,this.updateValueForDecrease()}updateValueForIncrease(){this.variant===i.IGDS_RATING_VARIANTS.face&&(this.selectedIndex=this.highlightedIndex),this.value=this.variant===i.IGDS_RATING_VARIANTS.star?(this.highlightedIndex+1).toString():this.ratingGrade[this.highlightedIndex]}updateValueForDecrease(){this.variant===i.IGDS_RATING_VARIANTS.face?(this.selectedIndex=this.highlightedIndex,this.value=this.ratingGrade[this.highlightedIndex]):this.value=this.highlightedIndex===0?"0":(this.highlightedIndex+1).toString()}updateHighlightedElement(t){this.removeHighlightedClass(),!t&&this.highlightedIndex!==null&&this.ratingButtons[this.highlightedIndex].classList.add("rating__button--highlighted")}commitSelection(){this.emit(R.IGDS_EVENTS.change,this.value??""),this._internals.setFormValue(this.value),this.ratingInput.value=this.value??"",this.ratingInput.dispatchEvent(new Event("change"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}};exports.Rating.formAssociated=!0;exports.Rating.styles=E.unsafeCSS(y);n([a.property({type:String,attribute:!1})],exports.Rating.prototype,"componentId",2);n([a.property({type:String,reflect:!0})],exports.Rating.prototype,"dir",2);n([a.property({type:String})],exports.Rating.prototype,"variant",2);n([a.property({type:Boolean})],exports.Rating.prototype,"readonly",2);n([a.property({type:String})],exports.Rating.prototype,"label",2);n([a.property({type:Array})],exports.Rating.prototype,"ratingGrade",2);n([a.property({type:String})],exports.Rating.prototype,"name",2);n([a.property({type:String})],exports.Rating.prototype,"form",2);n([a.property({attribute:!1})],exports.Rating.prototype,"onChange",2);n([g.state()],exports.Rating.prototype,"isHovering",2);n([g.state()],exports.Rating.prototype,"hoverValue",2);n([g.state()],exports.Rating.prototype,"iconMaxCount",2);n([g.state()],exports.Rating.prototype,"highlightedIndex",2);n([g.state()],exports.Rating.prototype,"selectedIndex",2);n([A.query(".rating")],exports.Rating.prototype,"ratingGroup",2);n([A.query(".rating__input")],exports.Rating.prototype,"ratingInput",2);n([f.queryAll(".rating__button")],exports.Rating.prototype,"ratingButtons",2);exports.Rating=n([v.customElement(D.IGDS_TAGS.rating)],exports.Rating);
