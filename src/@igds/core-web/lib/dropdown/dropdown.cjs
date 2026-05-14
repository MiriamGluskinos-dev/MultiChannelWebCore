"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const $=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),w=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.cjs"),x=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),y=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),p=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),D=require("../node_modules/.pnpm/@floating-ui_dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.cjs"),V=require("../abstractions/angular-form-element.cjs"),b=require("../utils/common.cjs"),S=require("../utils/menu-params.cjs"),v=require("./constants.cjs"),c=require("../constants/events.cjs"),o=require("../constants/event-keys.cjs"),_=require("../constants/tags.cjs");require("../icon/icon.cjs");const T=require("../icon/icon-sizes.cjs");require("../button/button.cjs");const E=require("../button/constants.cjs"),I=require("@igds/icons"),N=require("./dropdown.scss.cjs"),P=require("./dropdown-popup.scss.cjs");require("../input/input.cjs");require("../checkbox/checkbox.cjs");const O=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var G=Object.defineProperty,A=Object.getOwnPropertyDescriptor,r=(g,e,t,i)=>{for(var s=i>1?void 0:i?A(e,t):e,n=g.length-1,d;n>=0;n--)(d=g[n])&&(s=(i?d(e,t,s):d(s))||s);return i&&s&&G(e,t,s),s};exports.Dropdown=class extends V.AngularFormElement{constructor(){super(),this.isPopupOpen=!1,this.noOptions=!1,this.filterText="",this.highlightedId=null,this.treeFocusedIndex=0,this.valueIcon=null,this.multiple=!1,this.treeView=!1,this.selected=[],this.disabled=!1,this.required=!1,this.filterable=!1,this.invalid=!1,this.dir="rtl",this.onChange=null,this.treeNodes=[],this._options=[],this._scrollHandler=()=>this.setPopupPositionWhenOpen(),this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&(this.isPopupOpen=!1,this.highlightedId=null,this.removeHighlightedClass())},this.resizeHandler=b.throttle(()=>{this.setPopupPositionWhenOpen()},v.DELAY_BEFORE_RECALCULATE_POPUP_POSITION),this.setAsAngularLibFormElement(),this._internals=this.attachInternals(),this.setPopupPosition=this.setPopupPosition.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.onClearFilter=this.onClearFilter.bind(this)}set options(e){if(!e){this._options=[];return}this._options=e.map(t=>({id:t.id.toString()??"",label:t.label??"",icon:t.icon,checked:t.checked,disabled:t.disabled??!1}))}get options(){return this._options}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.resizeHandler),document.addEventListener("mousedown",this.handleDocumentMouseDown)}firstUpdated(){this.filterable&&(this.multiple=!1),this.multiple&&(this.filterable=!1),this.selected.length&&this.setSelectedOptions()}updated(e){super.updated(e),e.has("noOptions")&&this.setPopupPosition(),e.has("selected")&&this.handleSelectedChange()}handleSelectedChange(){this.selected.length?this.setSelectedOptions():(this.value="",this.filterText="",this.valueIcon=null,this.setFormValue(null))}setSelectedOptions(){if(this.multiple){this.setMultiSelectedOptions();return}if(this.treeView){this.setTreeViewSelectedNode();return}this.setSingleSelectedOption()}setMultiSelectedOptions(){const e=this.getDropdownOptions();if(!e)return;e.forEach((i,s)=>{const n=i.querySelector(_.IGDS_TAGS.checkbox);n&&this.selected.includes(i.id)&&(n.checked=!0,this.select.options[s].selected=!0)}),this.select.dispatchEvent(new Event("change"));const t="בחרת";this.value=`${t} ${this.selected.length} ${this.label}`,this.setFormValue()}clearSingleSelectionState(){this.value="",this.valueIcon=null,this.filterText="",this.setFormValue(null)}syncSelectElementToOption(e){if(!this.select)return;Array.from(this.select.options).forEach((i,s)=>{this.select.options[s].selected=!1});const t=Array.from(this.select.options).findIndex(i=>i.value===e);t>=0&&this.select.options[t]&&(this.select.options[t].selected=!0),this.select.dispatchEvent(new Event("change"))}setSingleSelectedOption(){const e=this.selected[0];if(!e){this.clearSingleSelectionState();return}const t=this.options.find(i=>i.id===e);t&&(this.value=t.label,this.valueIcon=t.icon??null,this.filterText=this.value,this.setFormValue(this.value),this.syncSelectElementToOption(e))}setTreeViewSelectedNode(){if(!this.selected[0]){this.value="",this.select.dispatchEvent(new Event("change")),this.setFormValue(this.value);return}const e=this.selected[0],t=this.findNodeById(this.treeNodes??[],e);this.value=t?.label??"",this.select.dispatchEvent(new Event("change")),this.setFormValue(this.value)}findNodeById(e,t){for(const i of e){if(i.id===t)return i;if(i.children?.length){const s=this.findNodeById(i.children,t);if(s)return s}}return null}onClearFilter(){this.filterText=""}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.stopScrollListener()}startScrollListener(){window.addEventListener("scroll",this._scrollHandler,{passive:!0,capture:!0})}stopScrollListener(){window.removeEventListener("scroll",this._scrollHandler,{capture:!0})}isExtraDoublePaddingLtr(){return this.filterable&&this.filterText&&this.dir==="ltr"}isExtraDoublePaddingRtr(){return this.filterable&&this.filterText&&(this.dir==="rtl"||!this.dir)}render(){return l.html`
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-controls="popup"
        aria-expanded=${this.isPopupOpen}
        aria-label=${a.ifDefined(this.label?this.label:void 0)}
        aria-invalid=${this.invalid}
        aria-required=${this.required}
        class="dropdown"
      >
        <div class="dropdown__input-box">
          ${this.getInputValueIcon()} ${this.getClearIcon()}
          <igds-input
            class=${u.classMap({dropdown__input:!0,"dropdown__input-with-extra-double-end-padding-ltr":this.isExtraDoublePaddingLtr(),"dropdown__input-with-extra-double-end-padding":this.isExtraDoublePaddingRtr(),"dropdown__input-with-extra-start-padding":!!this.valueIcon&&(this.dir==="rtl"||!this.dir),"dropdown__input-with-extra-start-padding-ltr":!!this.valueIcon&&this.dir==="ltr"})}
            ?readonly=${!this.filterable}
            ?required=${this.required}
            ?disabled=${this.disabled}
            ?invalid=${this.invalid}
            ?tooltip-icon=${this.tooltipIcon}
            dir=${a.ifDefined(this.dir)}
            label=${a.ifDefined(this.label)}
            label-icon=${a.ifDefined(this.labelIcon)}
            icon=${this.isPopupOpen?I.chevronUp:I.chevronDown}
            name=${a.ifDefined(this.name)}
            form=${a.ifDefined(this.form)}
            placeholder=${a.ifDefined(this.placeholder)}
            .value=${this.filterable?this.filterText:this.value}
            tooltip=${a.ifDefined(this.tooltip)}
            tooltip-question=${a.ifDefined(this.tooltipQuestion)}
            @click=${this.togglePopup}
            @keydown=${this.onKeyDown}
            @igds-input=${this.setFilterText}
            @igds-blur=${this.onBlur}
            @igds-focus=${this.onFocus}
          >
          </igds-input>
        </div>
        <select
          class="dropdown__select"
          ?disabled=${this.disabled}
          ?multiple=${this.multiple}
          name=${a.ifDefined(this.name)}
          id="dropdown"
          aria-label="Select label"
          @change=${this.onChangeHandler}
          tabindex="-1"
        >
          ${y.repeat(this.getOptions(),e=>e.id,e=>l.html` <option value=${e.id}>
              ${e.label}
            </option>`)}
        </select>
        <div
          role="listbox"
          id="popup"
          aria-label="dropdown-popup"
          class=${u.classMap({"dropdown-popup":!0,"dropdown-popup--open":this.isPopupOpen})}
        >
          ${this.getPopupActions()} ${this.renderDropdownOptions()}
          ${this.renderNoOptions()}
        </div>
        ${this.getError()} ${this.getHelpContainer()}
      </div>
    `}getInputValueIcon(){return l.html`
      ${p.when(this.valueIcon,()=>l.html`
          <igds-icon
            id="value-icon"
            tabindex="-1"
            role="button"
            aria-label="Dropdown value icon"
            class=${u.classMap({"dropdown__value-icon":!0,"dropdown__value-icon--ltr":this.dir==="ltr"})}
            node=${this.valueIcon}
            size=${T.IGDS_ICON_SIZES.medium}
          >
          </igds-icon>
        `)}
    `}getClearIcon(){return l.html`
      ${p.when(this.filterable&&this.filterText,()=>l.html`
          <igds-icon
            id="clear-icon"
            tabindex="0"
            role="button"
            aria-label="Dropdown clear icon"
            class=${u.classMap({"dropdown__clear-icon":!0,"dropdown__clear-icon--ltr":this.dir==="ltr"})}
            node=${I.close}
            size=${T.IGDS_ICON_SIZES.medium}
            @click=${this.onClear}
            @keydown=${this.onClearIconKeyDown}
          >
          </igds-icon>
        `)}
    `}onClear(){this.filterText="",this.value="",this.valueIcon=null,this.selected=[],this.emit(c.IGDS_EVENTS.clear,""),this.setFormValue(null)}onClearIconKeyDown(e){[o.IGDS_EVENT_KEYS.Enter,o.IGDS_EVENT_KEYS.Space].includes(e.key)&&this.onClear()}togglePopup(){this.isPopupOpen=!this.isPopupOpen,this.isPopupOpen?(this.setPopupPosition(),this.startScrollListener()):(this.stopScrollListener(),this.removeHighlightedClass())}removeHighlightedClass(){const e=this.getDropdownOptions();e&&e.forEach(t=>{t.classList.contains("dropdown-popup__option--highlighted")&&t.classList.remove("dropdown-popup__option--highlighted")})}onKeyDown(e){if(!(![o.IGDS_EVENT_KEYS.ArrowDown,o.IGDS_EVENT_KEYS.ArrowUp,o.IGDS_EVENT_KEYS.ArrowLeft,o.IGDS_EVENT_KEYS.ArrowRight,o.IGDS_EVENT_KEYS.Enter,o.IGDS_EVENT_KEYS.Escape,o.IGDS_EVENT_KEYS.Space].includes(e.key)||this.disabled)){if(this.filterable){this.onKeyDownForFilterableDropdown(e);return}if(this.multiple){this.onKeyDownForMultipleChoicesDropdown(e);return}if(this.treeNodes?.length){this.onKeyDownForTreeViewDropdown(e);return}this.onKeyDownForSingleChoiceDropdown(e)}}processOptionIndex(e){const t=e.findIndex(i=>i.id===this.highlightedId);if(t||t===0){this.select.options[t].selected=!0;const i=this.getOptions().find(s=>s.id===this.selected[0]);this.value=i?.label??"",this.valueIcon=i?.icon??null,this.select.dispatchEvent(new Event("change")),this.filterText=this.value,this.setFormValue(this.value),this.emit(c.IGDS_EVENTS.keydown,this.value),this.removeHighlightedClass()}}selectHighlightedOption(e){return e.find(i=>i.id===this.highlightedId)?(this.selected=[this.highlightedId],Array.from(this.select.options).forEach((i,s)=>this.select.options[s].selected=!1),this.processOptionIndex(e),!1):!0}handleEnterOrHighlightedSpace(e){return this.isPopupOpen=!this.isPopupOpen,!this.highlightedId||!e?.length?!1:this.selectHighlightedOption(e)}handleSpaceWithoutHighlight(){return this.isPopupOpen?!1:(this.isPopupOpen=!0,!0)}handleEnterOrSpaceDown(e,t){return[o.IGDS_EVENT_KEYS.Space,o.IGDS_EVENT_KEYS.Enter].includes(e)?e===o.IGDS_EVENT_KEYS.Enter||this.highlightedId?this.handleEnterOrHighlightedSpace(t):e===o.IGDS_EVENT_KEYS.Space&&!this.highlightedId?this.handleSpaceWithoutHighlight():!1:!1}handleEscapeDown(e){e===o.IGDS_EVENT_KEYS.Escape&&(this.isPopupOpen=!1)}handleArrowKeysDown(e,t){if([o.IGDS_EVENT_KEYS.ArrowDown,o.IGDS_EVENT_KEYS.ArrowUp,o.IGDS_EVENT_KEYS.ArrowRight,o.IGDS_EVENT_KEYS.ArrowLeft].includes(e)&&t?.length){const i=t.find(d=>d.classList.contains("dropdown-popup__option--highlighted")),s=b.calculateIndexIncrement(e);let n=i?t.indexOf(i)+s:0;n<0&&(n=t.length-1),n>t.length-1&&(n=0),t.forEach(d=>{d.classList.contains("dropdown-popup__option--highlighted")&&d.classList.remove("dropdown-popup__option--highlighted")}),t[n].classList.add("dropdown-popup__option--highlighted"),t[n].scrollIntoView({behavior:"smooth",block:"nearest"}),this.highlightedId=t[n].id}}onKeyDownForFilterableDropdown(e){const t=this.getDropdownOptions();this.handleEnterOrSpaceDown(e.key,t)||(this.setPopupPositionWhenOpen(),this.handleEscapeDown(e.key),this.handleArrowKeysDown(e.key,t))}processCheckboxChecked(e,t,i){e.checked=!e.checked;const s=i.indexOf(t);if(e.checked)this.selected=[...this.selected,this.highlightedId],this.select.options[s].selected=!0;else{const n=this.selected.indexOf(this.highlightedId);this.selected=this.selected.filter((d,f)=>f!==n),this.select.options[s].selected=!1}}emitComponentEvents(){this.select.dispatchEvent(new Event("change"));const e="בחרת";this.value=this.selected.length?`${e} ${this.selected.length} ${this.label}`:"",this.emit(c.IGDS_EVENTS.keydown,this.value),this.setFormValue()}handleEnterOrSpaceDownForMultipleChoicesDropdown(e){if(![o.IGDS_EVENT_KEYS.Space,o.IGDS_EVENT_KEYS.Enter].includes(e.key))return;if(!this.highlightedId){this.isPopupOpen=!this.isPopupOpen;return}e.stopPropagation(),e.preventDefault();const t=this.getDropdownOptions();if(!t?.length)return;const i=t.find(n=>n.id===this.highlightedId);if(!i)return;const s=i.querySelector(_.IGDS_TAGS.checkbox);s&&(this.processCheckboxChecked(s,i,t),this.emitComponentEvents())}handleArrowsDownForMultipleChoiceDropdown(e){if(![o.IGDS_EVENT_KEYS.ArrowUp,o.IGDS_EVENT_KEYS.ArrowDown,o.IGDS_EVENT_KEYS.ArrowLeft,o.IGDS_EVENT_KEYS.ArrowRight].includes(e))return;const t=this.getDropdownOptions();if(!t)return;const i=t.find(d=>d.classList.contains("dropdown-popup__option--highlighted")),s=this.calculateIndexIncrement(e);let n=i?t.indexOf(i)+s:0;n<0&&(n=t.length-1),n>t.length-1&&(n=0),t.forEach(d=>{d.classList.contains("dropdown-popup__option--highlighted")&&d.classList.remove("dropdown-popup__option--highlighted")}),t[n].classList.add("dropdown-popup__option--highlighted"),t[n].scrollIntoView({behavior:"smooth",block:"nearest"}),this.highlightedId=t[n].id}onKeyDownForMultipleChoicesDropdown(e){this.handleEnterOrSpaceDownForMultipleChoicesDropdown(e),this.handleEscapeDown(e.key),this.setPopupPositionWhenOpen(),this.handleArrowsDownForMultipleChoiceDropdown(e.key)}handleEnterOrSpaceDownForTreeViewDropdown(e){if([o.IGDS_EVENT_KEYS.Space,o.IGDS_EVENT_KEYS.Enter].includes(e.key)&&(e.stopPropagation(),e.preventDefault(),this.isPopupOpen=!this.isPopupOpen,!this.isPopupOpen&&this.highlightedId)){const t=this.treeNodes?.find(i=>i.id===this.highlightedId);t&&(this.selected=[this.highlightedId],this.value=t?.label??"",this.select.dispatchEvent(new Event("change")),this.setFormValue(this.value),this.emit(c.IGDS_EVENTS.keydown,this.value))}}onKeyDownForTreeViewDropdown(e){this.handleEnterOrSpaceDownForTreeViewDropdown(e),this.handleEscapeDown(e.key),this.setPopupPositionWhenOpen(),this.isPopupOpen&&(e.key===o.IGDS_EVENT_KEYS.ArrowDown&&(this.treeFocusedIndex+=1),e.key===o.IGDS_EVENT_KEYS.ArrowUp&&(this.treeFocusedIndex-=1),e.key===o.IGDS_EVENT_KEYS.ArrowRight&&(this.treeExpandedId=this.highlightedId??""),e.key===o.IGDS_EVENT_KEYS.ArrowLeft&&(this.treeCollapsedId=this.highlightedId??""))}scrollToIndexWhenMoveDown(e){(e-5)*S.MENU_ITEM_HEIGHT-this.listElement.scrollTop<0||this.listElement.scrollTo(0,(e-4)*S.MENU_ITEM_HEIGHT)}scrollToIndexWhenMoveUp(e){e*S.MENU_ITEM_HEIGHT-this.listElement.scrollTop>0||this.listElement.scrollTo(0,e*S.MENU_ITEM_HEIGHT)}handleEnterOrSpaceDownForSingleChoiceDropdown(e){[o.IGDS_EVENT_KEYS.Space,o.IGDS_EVENT_KEYS.Enter].includes(e)&&(this.isPopupOpen=!this.isPopupOpen)}findSingleChoiceIndex(e,t){const i=e.find(d=>d.classList.contains("dropdown-popup__option--selected")),s=this.calculateIndexIncrement(t);let n=i?e.indexOf(i)+s:0;return n<0&&(n=e.length-1),n>e.length-1&&(n=0),n}processSingleChoiceDropdownOptions(e,t){e.forEach(s=>{s.classList.remove("dropdown-popup__option--selected")}),e[t].classList.add("dropdown-popup__option--selected"),e[t].scrollIntoView({behavior:"smooth",block:"nearest"}),this.selected=[e[t].id],Array.from(this.select.options).forEach((s,n)=>this.select.options[n].selected=!1),this.select.options[t].selected=!0;const i=this.getOptions().find(s=>s.id===this.selected[0]);this.value=i?.label??"",this.valueIcon=i?.icon??null,this.select.dispatchEvent(new Event("change")),this.filterText=this.filterable?this.value:""}handleArrowsDownForSingleChoiceDropdown(e){if(![o.IGDS_EVENT_KEYS.ArrowDown,o.IGDS_EVENT_KEYS.ArrowUp,o.IGDS_EVENT_KEYS.ArrowRight,o.IGDS_EVENT_KEYS.ArrowLeft].includes(e))return;const t=this.getDropdownOptions();if(!t)return;const i=this.findSingleChoiceIndex(t,e);this.processSingleChoiceDropdownOptions(t,i),this.emit(c.IGDS_EVENTS.keydown,this.value)}onKeyDownForSingleChoiceDropdown(e){this.handleEnterOrSpaceDownForSingleChoiceDropdown(e.key),this.isPopupOpen&&this.setPopupPosition(),this.handleEscapeDown(e.key),this.handleArrowsDownForSingleChoiceDropdown(e.key),this.selected&&this.value&&this.setFormValue(this.value)}async setPopupPosition(){if(!this.trigger)return;const e=this.shadowRoot?.getElementById("popup");if(!e)return;const t=this.trigger.clientWidth,{x:i,y:s}=await D.computePosition(this.trigger,e,{placement:"bottom-start",strategy:"fixed",middleware:[D.offset(2),D.size({apply(){Object.assign(e.style,{width:`${t}px`,maxHeight:`${v.DROPDOWN_POPUP_MAX_HEIGHT}px`})},padding:5})]});Object.assign(e.style,{left:`${i}px`,top:`${s}px`})}setPopupPositionWhenOpen(){this.isPopupOpen&&this.setPopupPosition()}getDropdownOptions(){return this.dropdownOptionElements?[...this.dropdownOptionElements]:null}setFilterText(e){const t=e.target;this.filterText=t.value,this.value=this.filterText}onBlur(e){const i=e.target.value;this.emit(c.IGDS_EVENTS.blur,i)}onFocus(e){const i=e.target.value;this.emit(c.IGDS_EVENTS.focus,i)}onChangeHandler(e){const i=e.target.value;this.emit(c.IGDS_EVENTS.change,this.multiple?this.selected:i),this.onChange?.(e)}calculateIndexIncrement(e){return[o.IGDS_EVENT_KEYS.ArrowUp,o.IGDS_EVENT_KEYS.ArrowLeft].includes(e)?-1:[o.IGDS_EVENT_KEYS.ArrowDown,o.IGDS_EVENT_KEYS.ArrowRight].includes(e)?1:0}getPopupActions(){return l.html`
      ${p.when(this.multiple&&this.getOptions().length,()=>l.html`
          <div class="dropdown-popup__actions-box">
            <igds-button
              type=${E.IGDS_BUTTON_TYPES.button}
              variant=${E.IGDS_BUTTON_VARIANTS.link}
              size=${E.IGDS_BUTTON_SIZES.medium}
              @igds-click=${this.selectAllHandler}
            >
              בחירת הכל
            </igds-button>
            <igds-button
              type=${E.IGDS_BUTTON_TYPES.button}
              variant=${E.IGDS_BUTTON_VARIANTS.link}
              size=${E.IGDS_BUTTON_SIZES.medium}
              @igds-click=${this.resetAllHandler}
            >
              הסרת הכל
            </igds-button>
          </div>
          <igds-divider></igds-divider>
        `)}
    `}selectAllHandler(){const e=this.getDropdownOptions();if(!e)return;const t=[...this.selected];e.forEach((s,n)=>{const d=s.querySelector(_.IGDS_TAGS.checkbox);return d&&!d.checked&&!d.disabled&&(d.checked=!0,this.select.options[n].selected=!0,t.push(s.id)),s}),this.selected=t,this.select.dispatchEvent(new Event("change"));const i="בחרת";this.value=`${i} ${this.selected.length} ${this.label}`,this.setFormValue()}getFormValue(e){if(typeof e=="string")return e;const t=new FormData;return e.forEach(i=>{t.append(this.name,i)}),t}resetAllHandler(){const e=this.getDropdownOptions();e&&(e.forEach((t,i)=>{const s=t.querySelector(_.IGDS_TAGS.checkbox);return s&&s.checked&&(s.checked=!1,this.select.options[i].selected=!1),t}),this.selected=[],this.select.dispatchEvent(new Event("change")),this.value="",this.setFormValue(null))}renderDropdownOptions(){return l.html`
      ${p.when(this.getOptions().length&&!this.treeNodes?.length,()=>l.html`
          <div
            role="list"
            class="dropdown-popup__options-list"
            part="scrollable"
          >
            ${y.repeat(this.getOptions(),e=>e.id,(e,t)=>l.html`
                <div
                  id=${e.id}
                  role="option"
                  aria-selected=${this.selected.includes(e.id)}
                  class=${u.classMap({"dropdown-popup__option":!0,"dropdown-popup__option--selected":!this.multiple&&this.selected&&this.selected[0]===e.id,"dropdown-popup__option--disabled":e.disabled??!1})}
                  aria-disabled=${e.disabled??!1}
                  @click=${()=>this.onSelect(e,t)}
                  @keydown=${()=>{}}
                >
                  ${p.when(this.multiple,()=>l.html`
                      <igds-checkbox
                        ?checked=${e.checked}
                        ?disabled=${e.disabled}
                        class="dropdown-popup__option-checkbox"
                      >
                      </igds-checkbox>
                    `)}
                  ${p.when(e.icon,()=>l.html`
                      <igds-icon
                        node=${e.icon}
                        aria-hidden=${!e.icon}
                        class=${u.classMap({"dropdown-popup__option-icon":!0,"dropdown-popup__option-icon--disabled":e.disabled??!1})}
                      >
                      </igds-icon>
                    `)}
                  <span
                    class=${u.classMap({"dropdown-popup__option-label":!0,"dropdown-popup__option-label--disabled":e.disabled??!1})}
                  >
                    ${e.label}
                  </span>
                </div>
              `)}
          </div>
        `,()=>l.html`${this.renderDropdownTreeView()}`)}
    `}renderDropdownTreeView(){return l.html`
      ${p.when(this.treeNodes?.length,()=>l.html`
          <div
            role="list"
            class="dropdown-popup__options-list"
            part="scrollable"
          >
            <igds-tree-view
              .nodes=${this.treeNodes}
              selected-node-id=${this.selected[0]}
              focused-index=${this.treeFocusedIndex}
              collapsed-id=${this.treeCollapsedId??""}
              expanded-id=${this.treeExpandedId??""}
              @igds-click=${this.onTreeNodeClick}
              @igds-focused-item-changed=${this.onTreeNodeFocusChanged}
              @igds-collapsed-item-changed=${this.resetTreeCollapsedIds}
            ></igds-tree-view>
          </div>
        `)}
    `}renderNoOptions(){return l.html`
      ${p.when(!this.getOptions().length&&this.treeNodes?.length===0,()=>l.html`
          <div class="dropdown-popup__no-options">לא נמצאו אפשרויות</div>
        `)}
    `}getOptions(){return this.filterable?this.filteredOptions:this.options}get filteredOptions(){if(!this.filterText)return this.noOptions=!1,this.options;const e=this.options.filter(t=>t.label.includes(this.filterText));return e.length||(this.noOptions=!0),e}onSelect(e,t){e.disabled||(this.multiple?this.onMultiSelect(e,t):this.onSingleSelect(e,t),this.value&&!this.multiple&&this.emit(c.IGDS_EVENTS.change,this.value),this.multiple&&this.emit(c.IGDS_EVENTS.change,this.selected))}onMultiSelect(e,t){const i=this.getDropdownOptions();if(i){const f=i[t].querySelector(_.IGDS_TAGS.checkbox);f&&(f.checked=!f.checked)}const s=this.selected.indexOf(e.id);s===-1?this.selected=[...this.selected,e.id]:this.selected=this.selected.filter((d,f)=>f!==s),this.select.options[t].selected=!this.select.options[t].selected,this.select.dispatchEvent(new Event("change"));const n="בחרת";this.value=this.selected.length?`${n} ${this.selected.length} ${this.label}`:"",this.setFormValue()}setFormValue(e){if(e!==void 0){this._internals.setFormValue(e);return}this.selected.length>0?this._internals.setFormValue(this.getFormValue(this.selected)):this._internals.setFormValue(null)}onSingleSelect(e,t){Array.from(this.select.options).forEach((i,s)=>{this.select.options[s].selected=!1}),this.select.options[t].selected=!0,this.selected=[e.id],this.value=e.label,this.valueIcon=e.icon??null,this.select.dispatchEvent(new Event("change")),this.filterText=this.value,this.setFormValue(this.value),this.isPopupOpen=!1}onTreeNodeClick(e){const t=e.detail.value.label;this.selected=e.detail.value.id,this.value=t,this.setFormValue(this.value),this.isPopupOpen=!1,this.value&&this.emit(c.IGDS_EVENTS.change,this.value)}onTreeNodeFocusChanged(e){this.highlightedId=e.detail.value.id,e.detail.value.index<1&&(this.treeFocusedIndex=0),e.detail.value.index>=e.detail.value.maxItems&&(this.treeFocusedIndex=e.detail.value.maxItems-1),e.detail.value.direction==="down"?this.scrollToIndexWhenMoveDown(e.detail.value.index):this.scrollToIndexWhenMoveUp(e.detail.value.index)}resetTreeCollapsedIds(){this.treeCollapsedId="",this.treeExpandedId=""}getError(){return l.html`
      ${p.when(this.invalid&&this.error,()=>l.html`
          <igds-default-error-box
            id="dropdown-error"
            class="dropdown__error"
            errormessage=${a.ifDefined(this.error)}
          >
          </igds-default-error-box>
        `)}
    `}getHelpContainer(){return l.html`${p.when(!this.error&&(this.helpIcon||this.helpText),()=>l.html`
        <div id="dropdown-help-message" class="dropdown__help-message">
          ${this.getHelpIcon()} ${this.getHelpText()}
        </div>
      `)}`}getHelpIcon(){return l.html`${p.when(this.helpIcon,()=>l.html`
        <igds-icon
          node=${this.helpIcon}
          aria-hidden=${!this.helpIcon}
          class=${u.classMap({"dropdown__help-icon":!0,"dropdown__help-icon--disabled":this.disabled})}
        >
        </igds-icon>
      `)}`}getHelpText(){return l.html`
      ${p.when(this.helpText,()=>l.html`<span
            class=${u.classMap({"dropdown__help-text":!0,"dropdown__help-text--disabled":this.disabled})}
            >${this.helpText}</span
          >`)}
    `}};exports.Dropdown.formAssociated=!0;exports.Dropdown.styles=[O.unsafeCSS(N),O.unsafeCSS(P)];r([m.query(".dropdown__input")],exports.Dropdown.prototype,"trigger",2);r([m.query("#dropdown")],exports.Dropdown.prototype,"select",2);r([x.queryAll(".dropdown-popup__option")],exports.Dropdown.prototype,"dropdownOptionElements",2);r([m.query(".dropdown-popup__options-list")],exports.Dropdown.prototype,"listElement",2);r([w.state()],exports.Dropdown.prototype,"isPopupOpen",2);r([w.state()],exports.Dropdown.prototype,"noOptions",2);r([w.state()],exports.Dropdown.prototype,"filterText",2);r([w.state()],exports.Dropdown.prototype,"highlightedId",2);r([w.state()],exports.Dropdown.prototype,"treeCollapsedId",2);r([w.state()],exports.Dropdown.prototype,"treeExpandedId",2);r([w.state()],exports.Dropdown.prototype,"treeFocusedIndex",2);r([w.state()],exports.Dropdown.prototype,"valueIcon",2);r([h.property({type:String})],exports.Dropdown.prototype,"label",2);r([h.property({type:String,attribute:"label-icon"})],exports.Dropdown.prototype,"labelIcon",2);r([h.property({type:String})],exports.Dropdown.prototype,"name",2);r([h.property({type:Boolean})],exports.Dropdown.prototype,"multiple",2);r([h.property({type:Boolean})],exports.Dropdown.prototype,"treeView",2);r([h.property({type:String})],exports.Dropdown.prototype,"form",2);r([h.property({type:Array,converter:g=>Array.isArray(g)?g:g?JSON.parse(g):[]})],exports.Dropdown.prototype,"selected",2);r([h.property({type:String})],exports.Dropdown.prototype,"defaultValue",2);r([h.property({type:String})],exports.Dropdown.prototype,"placeholder",2);r([h.property({type:Boolean})],exports.Dropdown.prototype,"disabled",2);r([h.property({type:Boolean})],exports.Dropdown.prototype,"required",2);r([h.property({type:Array})],exports.Dropdown.prototype,"options",1);r([h.property({type:Boolean})],exports.Dropdown.prototype,"filterable",2);r([h.property({type:String,attribute:"help-text"})],exports.Dropdown.prototype,"helpText",2);r([h.property({type:String,attribute:"help-icon"})],exports.Dropdown.prototype,"helpIcon",2);r([h.property({type:String})],exports.Dropdown.prototype,"tooltip",2);r([h.property({type:String,attribute:"tooltip-question"})],exports.Dropdown.prototype,"tooltipQuestion",2);r([h.property({type:Boolean,attribute:"tooltip-icon"})],exports.Dropdown.prototype,"tooltipIcon",2);r([h.property({type:Boolean})],exports.Dropdown.prototype,"invalid",2);r([h.property({type:String})],exports.Dropdown.prototype,"error",2);r([h.property({type:String})],exports.Dropdown.prototype,"dir",2);r([h.property({attribute:!1})],exports.Dropdown.prototype,"onChange",2);r([h.property({type:Array})],exports.Dropdown.prototype,"treeNodes",2);exports.Dropdown=r([$.customElement(_.IGDS_TAGS.dropdown)],exports.Dropdown);
