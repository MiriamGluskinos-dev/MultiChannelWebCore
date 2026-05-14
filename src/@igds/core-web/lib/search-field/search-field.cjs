"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const r=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const f=require("../node_modules/.pnpm/@floating-ui_dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.cjs"),D=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),d=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),_=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),h=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),w=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const A=require("../utils/common.cjs");require("../icon/icon.cjs");const v=require("../icon/icon-sizes.cjs");require("../divider/divider.cjs");const F=require("../divider/constants.cjs"),u=require("../constants/events.cjs"),l=require("../constants/event-keys.cjs"),$=require("../constants/tags.cjs"),n=require("./constants.cjs"),P=require("./search-field.scss.cjs"),V=require("./search-field-popup.scss.cjs");require("../input/input.cjs");require("../button/button.cjs");const S=require("@igds/icons"),b=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var T=Object.defineProperty,L=Object.getOwnPropertyDescriptor,a=(E,e,t,i)=>{for(var s=i>1?void 0:i?L(e,t):e,o=E.length-1,g;o>=0;o--)(g=E[o])&&(s=(i?g(e,t,s):g(s))||s);return i&&s&&T(e,t,s),s};exports.SearchField=class extends w.IGDSElement{constructor(){super(),this.isPopupOpen=!1,this.isFilterPopupOpen=!1,this.isFirstInputToggled=!1,this.firstInputValue="",this.lastInputValue="",this.highlightedId=null,this.value="",this.filterPlaceholder="כל הגופים",this.variant=n.IGDS_SEARCH_FIELD_VARIANTS.default,this.disabled=!1,this.clearable=!0,this.voiceSearch=!1,this.dir="rtl",this.filters=[],this.showEmptyResultsMessage=!0,this._suggestions=[],this._filterSuggestions=[],this._suggestionsProvided=!1,this.resizeHandler=A.throttle(()=>{(this.isPopupOpen||this.isFilterPopupOpen)&&this.setPopupPosition(this.isFilterPopupOpen?"filter-popup":"popup")},n.DELAY_BEFORE_RECALCULATE_POPUP_POSITION),this._scrollHandler=()=>{(this.isPopupOpen||this.isFilterPopupOpen)&&this.setPopupPosition(this.isFilterPopupOpen?"filter-popup":"popup")},this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.onLastInputSearch=this.onLastInputSearch.bind(this)}set suggestions(e){if(!e){this._suggestions=[],this._suggestionsProvided=!1;return}this._suggestionsProvided=!0,this._suggestions=e.map(t=>({id:t.id.toString()??"",label:t.label??"",icon:t.icon,value:t.value??"",disabled:t.disabled??!1}))}get suggestions(){return this._suggestions}set filterSuggestions(e){if(!e){this._filterSuggestions=[];return}this._filterSuggestions=e.map(t=>({id:t.id.toString()??"",label:t.label??"",icon:t.icon,value:t.value??"",disabled:t.disabled??!1}))}get filterSuggestions(){return this._filterSuggestions}handleDocumentMouseDown(e){const t=e.composedPath();this&&!t.includes(this)&&(this.isPopupOpen=!1,this.isFilterPopupOpen=!1,window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener(),this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch&&(this.isFirstInputToggled=!1))}onAudioRecorderStop(e){e instanceof CustomEvent&&this.playAudio(e.detail.audio)}playAudio(e){if(!this.audioElement||!this.sourceElement)return;const t=new FileReader;t.onload=i=>{const s=i.target.result;this.sourceElement.src=s,this.sourceElement.type=e.type,this.audioElement.load(),this.audioElement.play.call(this.audioElement)},t.readAsDataURL(e)}startScrollListener(){window.addEventListener("scroll",this._scrollHandler,{passive:!0,capture:!0})}stopScrollListener(){window.removeEventListener("scroll",this._scrollHandler,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleDocumentMouseDown),window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener()}render(){return r.html`
      <div class="search" role="search">
        ${p.when(this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch,()=>this.renderDividedSearchField(),()=>this.renderDefaultOrHeroSearchField())}
        <div
          id="popup"
          class=${h.classMap({"search-popup":!0,"search-popup--open":this.isPopupOpen})}
          role="listbox"
          aria-live="polite"
          aria-label="search-popup"
          part="scrollable"
        >
          ${this.renderSuggestions()}
        </div>
        ${p.when(this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.searchFilter,()=>r.html`
            <igds-horizontal-filter
              dir=${c.ifDefined(this.dir)}
              id="filter-popup"
              class=${h.classMap({"search-popup":!0,"search-popup--filter":!0,"search-popup--open":this.isFilterPopupOpen})}
              apply-label="החל סינון"
              .filters=${this.filters}
              @igds-apply=${this.onApply}
            ></igds-horizontal-filter>
          `)}
      </div>
    `}onApply(e){this.isFilterPopupOpen=!1,e.preventDefault(),window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener()}getInputIcon(){return this.isFirstInputToggled&&this.isPopupOpen?S.chevronUp:S.chevronDown}getInputCssClasses(){return h.classMap({"search__positioned-input":!0,"search__positioned-input--disabled":this.disabled,"search__input--divided-with-extra-double-end-padding":this.clearable&&this.firstInputValue&&(this.dir==="rtl"||!this.dir),"search__input--divided-with-extra-double-end-padding-ltr":this.clearable&&this.firstInputValue&&this.dir==="ltr","search__input--disabled-transparent-border":this.disabled})}renderClearIcon({ariaLabel:e,onClick:t,onKeyDown:i,tabIndex:s=0}){return r.html`
      <igds-icon
        node=${S.close}
        size=${v.IGDS_ICON_SIZES.medium}
        role="button"
        tabindex="${s}"
        aria-label="${e}"
        class=${h.classMap({"search__clear-icon":!0,"search__clear-icon--disabled":this.disabled})}
        @click=${t}
        @keydown=${i}
      >
      </igds-icon>
    `}renderFirstPart(){return r.html`
      <div class="search__part">
        <igds-input
          role="searchbox"
          aria-label="first-search-input"
          ?disabled=${this.disabled}
          dir=${c.ifDefined(this.dir)}
          placeholder=${this.filterPlaceholder}
          icon=${this.getInputIcon()}
          .value=${this.firstInputValue}
          @focus=${this.toggleSuggestionPopupByFirstInput}
          @keydown=${e=>this.onKeyDown(e,!0)}
          @igds-input=${this.onFirstInputChange}
          class=${this.getInputCssClasses()}
        >
        </igds-input>
        ${p.when(this.clearable&&this.firstInputValue,()=>r.html`
            <div class="search__icons-box search__icons-box--clear">
              ${this.renderClearIcon({ariaLabel:"נקה את שדה הקלט הראשון",onClick:e=>this.onClear(e,!0),onKeyDown:e=>this.onClearIconKeyDown(e,!0)})}
            </div>
          `)}
      </div>
    `}renderSecondPart(){return r.html`
      <div class="search__part">
        <igds-input
          id="search-last-input"
          role="searchbox"
          aria-label="last-search-input"
          ?disabled=${this.disabled}
          dir=${c.ifDefined(this.dir)}
          placeholder=${c.ifDefined(this.placeholder)}
          icon=${S.search}
          .value=${this.lastInputValue}
          @focus=${this.toggleSuggestionPopup}
          @keydown=${this.onKeyDown}
          @igds-input=${this.onLastInputChange}
          @igds-input-icon-click=${this.onLastInputSearch}
          class=${h.classMap({"search__positioned-input":!0,"search__positioned-input--disabled":this.disabled,"search__input--divided-with-extra-double-end-padding":this.clearable&&this.lastInputValue&&(this.dir==="rtl"||!this.dir),"search__input--divided-with-extra-double-end-padding-ltr":this.clearable&&this.lastInputValue&&this.dir==="ltr","search__input--disabled-transparent-border":this.disabled})}
        >
        </igds-input>
        ${p.when(this.clearable&&this.lastInputValue,()=>r.html`
            <div class="search__icons-box search__icons-box--clear">
              ${this.renderClearIcon({ariaLabel:"נקה את שדה הקלט האחרון",onClick:this.onClear,onKeyDown:this.onClearIconKeyDown})}
            </div>
          `)}
      </div>
    `}renderDividedSearchField(){return r.html`
      <div
        class=${h.classMap({"search--divided":!0,"search--divided-disabled":this.disabled})}
      >
        ${this.renderFirstPart()}
        <igds-divider
          class="search__divider"
          orientation=${F.IGDS_DIVIDER_ORIENTATIONS.vertical}
        >
        </igds-divider>
        ${this.renderSecondPart()}
      </div>
    `}isLtrHero(){return this.dir==="ltr"&&this.variant!==n.IGDS_SEARCH_FIELD_VARIANTS.hero}isRtlHero(){return this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.hero&&(this.dir==="rtl"||!this.dir)}isLtlHero(){return this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.hero&&this.dir==="ltr"}isRtlHeroWithDoubleEndPadding(){return this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.hero&&this.clearable&&!!this.value&&(this.dir==="rtl"||!this.dir)}isLtlHeroWithDoubleEndPadding(){return this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.hero&&this.clearable&&this.dir==="ltr"}hasExtraEndPadding(){return(this.clearable&&this.value||this.voiceSearch)&&this.variant!==n.IGDS_SEARCH_FIELD_VARIANTS.hero}hasExtraDoubleEndPadding(e){return this.clearable&&this.value&&this.voiceSearch&&this.dir===e}renderDefaultOrHeroSearchField(){return r.html`
      <igds-input
        role="searchbox"
        aria-label="search-input"
        icon=${c.ifDefined(this.variant!==n.IGDS_SEARCH_FIELD_VARIANTS.hero?S.search:void 0)}
        icon-position="right"
        ?disabled=${this.disabled}
        dir=${c.ifDefined(this.dir)}
        placeholder=${c.ifDefined(this.placeholder)}
        .value=${this.value}
        class=${h.classMap({search__input:!0,"search__input--ltr":this.isLtrHero(),"search__input--large":this.isRtlHero(),"search__input--large-ltr":this.isLtlHero(),"search__input--large-with-extra-double-end-padding":this.isRtlHeroWithDoubleEndPadding(),"search__input--large-with-extra-double-end-padding-ltr":this.isLtlHeroWithDoubleEndPadding(),"search__input--with-extra-end-padding":this.hasExtraEndPadding(),"search__input--with-extra-double-end-padding":this.hasExtraDoubleEndPadding("rtl"),"search__input--with-extra-double-end-padding-ltr":this.hasExtraDoubleEndPadding("ltr")})}
        @click=${this.toggleSuggestionPopup}
        @igds-input-icon-click=${this.onSearch}
        @keydown=${this.onKeyDown}
        @igds-input=${this.onInput}
      >
      </igds-input>
      ${this.getIconsAndAudioRecorderBox()}
    `}isRelevantKey(e){return[l.IGDS_EVENT_KEYS.ArrowDown,l.IGDS_EVENT_KEYS.ArrowUp,l.IGDS_EVENT_KEYS.ArrowLeft,l.IGDS_EVENT_KEYS.ArrowRight,l.IGDS_EVENT_KEYS.Enter,l.IGDS_EVENT_KEYS.Escape,l.IGDS_EVENT_KEYS.Space].includes(e)}handleEnterOrSpaceDown(e,t){if([l.IGDS_EVENT_KEYS.Enter,l.IGDS_EVENT_KEYS.Space].includes(e)){if(this.isPopupOpen=!this.isPopupOpen,this.highlightedId){const i=this.getSuggestions();if(!i?.length)return!0;const s=i?.find(o=>o.id===this.highlightedId);if(!s)return!0;this.setValue(s,t),this.highlightedId=null}e===l.IGDS_EVENT_KEYS.Enter&&this.onSearch(),this.removeHighlightedClass(),t&&(this.isFirstInputToggled=!this.isFirstInputToggled)}return!1}handleEscapeDown(e){e===l.IGDS_EVENT_KEYS.Escape&&(this.isPopupOpen=!1,this.isFirstInputToggled=!1,window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener())}getHighlightedIndex(e,t,i){const s=this.calculateIndexIncrement(e);let o=i?t.indexOf(i)+s:0;return o<0&&(o=t.length-1),o>t.length-1&&(o=0),o}processHighlightedIndex(e,t,i){this.removeHighlightedClass(),e[i].classList.add("search-popup__option--highlighted"),e[i].scrollIntoView({behavior:"smooth",block:"nearest"});const s=t?this.getSuggestions().find((o,g)=>g===i):this.getSuggestions()[0];s&&(this.highlightedId=s.id)}handleArrowKeysDown(e){if(![l.IGDS_EVENT_KEYS.ArrowDown,l.IGDS_EVENT_KEYS.ArrowUp,l.IGDS_EVENT_KEYS.ArrowRight,l.IGDS_EVENT_KEYS.ArrowLeft].includes(e)||!this.isPopupOpen)return;const t=this.getSearchSuggestions();if(!t?.length)return;const i=t.find(o=>o.classList.contains("search-popup__option--highlighted")),s=this.getHighlightedIndex(e,t,i);this.processHighlightedIndex(t,i,s)}onKeyDown(e,t){!this.isRelevantKey(e.key)||this.disabled||this.handleEnterOrSpaceDown(e.key,t)||(this.isPopupOpen&&(this.setPopupPosition(),setTimeout(()=>{document.addEventListener("click",this.handleDocumentMouseDown,{once:!0})})),this.handleEscapeDown(e.key),this.handleArrowKeysDown(e.key))}setValue(e,t){const i=(e.value||e.label)??"";if(this.variant!==n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch){this.value=i;return}t?this.firstInputValue=i:this.lastInputValue=i}getSearchSuggestions(){return this.searchPopupElements?[...this.searchPopupElements]:null}calculateIndexIncrement(e){return[l.IGDS_EVENT_KEYS.ArrowUp,l.IGDS_EVENT_KEYS.ArrowLeft].includes(e)?-1:[l.IGDS_EVENT_KEYS.ArrowDown,l.IGDS_EVENT_KEYS.ArrowRight].includes(e)?1:0}removeHighlightedClass(){this.getSearchSuggestions()?.forEach(t=>{t.classList.contains("search-popup__option--highlighted")&&t.classList.remove("search-popup__option--highlighted")})}toggleSuggestionPopupByFirstInput(){this.toggleSuggestionPopup(),this.isFirstInputToggled=!this.isFirstInputToggled}toggleSuggestionPopup(){this.setPopupPosition(),this.isFilterPopupOpen=!1,this.isPopupOpen=!0,this.isPopupOpen&&(setTimeout(()=>{document.addEventListener("click",this.handleDocumentMouseDown,{once:!0})}),window.addEventListener("resize",this.resizeHandler),this.startScrollListener()),this.isFirstInputToggled=!1,this.removeHighlightedClass()}async setPopupPosition(e="popup"){const t=this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch?this.searchGroupElement.clientWidth:this.searchInputElement.clientWidth,i=this.shadowRoot?.getElementById(e);if(!i)return;const{x:s,y:o}=await f.computePosition(this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch?this.searchGroupElement:this.searchInputElement,i,{placement:"bottom-start",strategy:"fixed",middleware:[f.offset(2),f.size({apply(){Object.assign(i.style,{width:`${t}px`,maxHeight:`${n.SEARCH_FIELD_POPUP_MAX_HEIGHT}px`})},padding:5})]});Object.assign(i.style,{left:`${s}px`,top:`${o}px`})}onInput(e){const t=e.target;this.value=t.value,this.emit(u.IGDS_EVENTS.input,this.value)}onFirstInputChange(e){const t=e.target;this.firstInputValue=t.value,this.emit(u.IGDS_EVENTS.input,this.firstInputValue)}onLastInputChange(e){const t=e.target;this.lastInputValue=t.value,this.emit(u.IGDS_EVENTS.input,this.lastInputValue)}onSearch(){this.emit(u.IGDS_EVENTS.search,this.value)}onLastInputSearch(){this.emit(u.IGDS_EVENTS.search,this.lastInputValue)}getSuggestions(){return this.variant!==n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch?this.getSearchedSuggestions(this.value):this.filterSuggestions.length>0&&this.isFirstInputToggled?this.getSearchedSuggestions(this.firstInputValue,"filter"):this.getSearchedSuggestions(this.isFirstInputToggled?this.firstInputValue:this.lastInputValue)}getSearchedSuggestions(e,t="typical"){const i=t==="typical"?this.suggestions:this.filterSuggestions;return e?i.filter(s=>s.value?.toLowerCase().indexOf(e.toLowerCase())!==-1||s.label?.toLowerCase().indexOf(e.toLowerCase())!==-1):i}getIconsAndAudioRecorderBox(){return r.html`
      ${p.when(this.clearable||this.voiceSearch||this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.hero,()=>r.html`
          <div
            class=${h.classMap({"search__icons-box":!0,"search__icons-box--ltr":this.dir==="ltr"})}
          >
            ${this.getClearIcon()} ${this.getSearchIconButton()}
            ${this.getAudioRecorder()} ${this.getSettingsIcon()}
          </div>
        `)}
    `}getClearIcon(){return r.html`
      ${p.when(this.clearable&&this.value||this.clearable&&this.showClear,()=>this.renderClearIcon({ariaLabel:"נקה",onClick:this.onClear,onKeyDown:this.onClearIconKeyDown,tabIndex:this.getIconTabIndex()}))}
    `}getSettingsIcon(){return r.html`
      ${p.when(this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.searchFilter,()=>r.html`
          <igds-icon
            node=${S.optionsHoriz}
            size=${v.IGDS_ICON_SIZES.medium}
            role="button"
            tabindex=${this.getSettingsIconTabIndex()}
            aria-label="Search filter"
            class=${h.classMap({"search__filter-icon":!0,"search__filter-icon--disabled":this.disabled})}
            @click=${this.onFilterToggle}
            @keydown=${this.onFilterIconKeyDown}
          >
          </igds-icon>
        `)}
    `}onClearIconKeyDown(e,t){e.key===l.IGDS_EVENT_KEYS.Enter&&this.onClear(e,t)}onClear(e,t){this.disabled||(e.stopPropagation(),this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch?t?(this.firstInputValue="",this.emit(u.IGDS_EVENTS.clear,this.firstInputValue)):(this.lastInputValue="",this.emit(u.IGDS_EVENTS.clear,this.lastInputValue)):(this.value="",this.emit(u.IGDS_EVENTS.clear,this.value)))}onFilterIconKeyDown(e){e.key===l.IGDS_EVENT_KEYS.Enter&&this.onFilterToggle(e)}onFilterToggle(e){this.disabled||(this.isPopupOpen=!1,this.setPopupPosition("filter-popup"),this.isFilterPopupOpen=!this.isFilterPopupOpen,this.isFilterPopupOpen?(document.addEventListener("click",this.handleDocumentMouseDown),window.addEventListener("resize",this.resizeHandler),this.startScrollListener()):(window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener()),e.stopPropagation())}getSearchIconButton(){return r.html`
      ${p.when(this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.hero,()=>r.html`
          <igds-button
            ?disabled=${this.disabled}
            class=${h.classMap({search__button:!0,"search__button--disabled":this.disabled})}
            @click=${this.onSearch}
            label="Search"
          >
            <igds-icon slot="icon" node=${S.search}></igds-icon>
          </igds-button>
        `)}
    `}getAudioRecorder(){return r.html`
      ${p.when(this.voiceSearch&&this.variant!==n.IGDS_SEARCH_FIELD_VARIANTS.hero,()=>r.html`
          <igds-audio-recorder
            ?disabled=${this.disabled}
            class="search__audio-recorder"
            @igds-stop=${this.onAudioRecorderStop}
          >
          </igds-audio-recorder>
          <audio controls class="search__audio-element" hidden>
            <source class="search__source-element" />
          </audio>
        `)}
    `}renderSuggestions(){return r.html`${p.when(this.getSuggestions().length,()=>r.html`
        ${y.repeat(this.getSuggestions(),e=>e.id,e=>r.html`
            <div
              id=${e.id}
              role="option"
              aria-selected="false"
              class=${h.classMap({"search-popup__option":!0,"search-popup__option--disabled":e.disabled??!1})}
              aria-disabled=${e.disabled??!1}
              @click=${()=>this.onSelect(e)}
              @keydown=${()=>{}}
            >
              ${p.when(e.icon,()=>r.html`
                  <igds-icon
                    class=${h.classMap({"search-popup__option-icon":!0,"search-popup__option-icon--disabled":e.disabled??!1})}
                    node=${c.ifDefined(e.icon)}
                    aria-hidden=${!e.icon}
                  >
                  </igds-icon>
                `)}
              <span class="search-popup__option-content">
                <span
                  class=${h.classMap({"search-popup__option-label":!0,"search-popup__option-label--disabled":e.disabled??!1})}
                >
                  ${e.label}
                </span>
                ${p.when(e.value,()=>r.html`
                    <span
                      class=${h.classMap({"search-popup__option-value":!0,"search-popup__option-value--disabled":e.disabled??!1})}
                    >
                      ${e.value}
                    </span>
                  `)}
              </span>
            </div>
          `)}
      `,()=>this.showEmptyResultsMessage&&this._suggestionsProvided?r.html`
              <div class="search-popup__no-options">לא נמצאו אפשרויות</div>
            `:r.html``)}`}setDividedSearchInputValue(e){this.isFirstInputToggled?(this.firstInputValue=e.value?e.value:e.label??"",this.isFirstInputToggled=!1):this.lastInputValue=e.value?e.value:e.label??""}onSelect(e){e.disabled||(this.variant===n.IGDS_SEARCH_FIELD_VARIANTS.dividedSearch?this.setDividedSearchInputValue(e):this.value=(e.value||e.label)??"",this.emit(u.IGDS_EVENTS.select,{label:e.label,id:e.id,value:e.value}),this.isPopupOpen=!1,window.removeEventListener("resize",this.resizeHandler),this.stopScrollListener())}getSettingsIconTabIndex(){return this.disabled?-1:0}getIconTabIndex(){return this.disabled?-1:0}};exports.SearchField.styles=[b.unsafeCSS(P),b.unsafeCSS(V)];a([I.query(".search__input")],exports.SearchField.prototype,"searchInputElement",2);a([I.query(".search--divided")],exports.SearchField.prototype,"searchGroupElement",2);a([I.query(".search__audio-element")],exports.SearchField.prototype,"audioElement",2);a([I.query(".search__source-element")],exports.SearchField.prototype,"sourceElement",2);a([m.queryAll(".search-popup__option")],exports.SearchField.prototype,"searchPopupElements",2);a([_.state()],exports.SearchField.prototype,"isPopupOpen",2);a([_.state()],exports.SearchField.prototype,"isFilterPopupOpen",2);a([_.state()],exports.SearchField.prototype,"isFirstInputToggled",2);a([_.state()],exports.SearchField.prototype,"firstInputValue",2);a([_.state()],exports.SearchField.prototype,"lastInputValue",2);a([_.state()],exports.SearchField.prototype,"highlightedId",2);a([d.property({type:String})],exports.SearchField.prototype,"value",2);a([d.property({type:Array})],exports.SearchField.prototype,"suggestions",1);a([d.property({type:Array,attribute:"filter-suggestions"})],exports.SearchField.prototype,"filterSuggestions",1);a([d.property({type:String})],exports.SearchField.prototype,"placeholder",2);a([d.property({type:String,attribute:"filter-placeholder"})],exports.SearchField.prototype,"filterPlaceholder",2);a([d.property({type:String})],exports.SearchField.prototype,"variant",2);a([d.property({type:Boolean})],exports.SearchField.prototype,"disabled",2);a([d.property({type:Boolean,attribute:"show-clear"})],exports.SearchField.prototype,"showClear",2);a([d.property({type:Boolean})],exports.SearchField.prototype,"clearable",2);a([d.property({type:Boolean,attribute:"voice-search"})],exports.SearchField.prototype,"voiceSearch",2);a([d.property({type:String,reflect:!0})],exports.SearchField.prototype,"dir",2);a([d.property({type:Array})],exports.SearchField.prototype,"filters",2);a([d.property({type:Boolean,attribute:"show-empty-results-message"})],exports.SearchField.prototype,"showEmptyResultsMessage",2);exports.SearchField=a([D.customElement($.IGDS_TAGS.searchField)],exports.SearchField);
