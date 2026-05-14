"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),m=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs");require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const a=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const F=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const u=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),E=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),d=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),f=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),S=require("../checkbox/checkbox.cjs"),D=require("../dropdown/dropdown.cjs");require("../dropdown/tree-view/tree-view.cjs");const c=require("../constants/events.cjs"),T=require("../constants/tags.cjs"),i=require("./constants.cjs");require("../button/button.cjs");const b=require("../button/constants.cjs"),$=require("@igds/icons"),k=require("./horizontal-filter.scss.cjs"),I=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var x=Object.defineProperty,V=Object.getOwnPropertyDescriptor,s=(p,e,r,t)=>{for(var o=t>1?void 0:t?V(e,r):e,l=p.length-1,n;l>=0;l--)(n=p[l])&&(o=(t?n(e,r,o):n(o))||o);return t&&o&&x(e,r,o),o};exports.HorizontalFilter=class extends F.IGDSElement{constructor(){super(),this.filters=[],this.clearLabel="ניקוי סינון",this.dir="rtl",this.formValues={},this.onApply=this.onApply.bind(this)}firstUpdated(e){super.firstUpdated(e),this.setCheckboxValues()}setCheckboxValues(){const e=this.checkboxFilters;if(!e)return;e.items.forEach(t=>{if(t.value){const o=t.id?`${i.IGDS_FILTER_TYPE.checkbox}-${t.id}`:i.IGDS_FILTER_TYPE.checkbox;this.formValues={...this.formValues,[o]:t.value}}})}render(){return a.html`
      <form class="filter" .onsubmit=${this.onApply}>
        ${this.renderDropdownFilters()} ${this.renderCheckboxFilters()}
        ${this.renderActionButtons()}
      </form>
    `}onApply(e){e.preventDefault(),this.emit(c.IGDS_EVENTS.apply,this.formValues)}get dropdownFilters(){return this.filters.find(e=>e.type===`${i.IGDS_FILTER_TYPE.dropdown}`)}renderDropdownFilters(){const e=this.dropdownFilters,r=e?e.items:[];return a.html`
      <div
        class=${f.classMap({"filter__dropdowns-group":!0})}
      >
        ${u.repeat(r,({id:t})=>t,({id:t,label:o,options:l,placeholder:n})=>a.html`
            <igds-dropdown
              filterable
              dir=${d.ifDefined(this.dir)}
              exportparts="scrollable"
              class=${f.classMap({filter__dropdown:!0})}
              label=${d.ifDefined(o)}
              placeholder=${d.ifDefined(n)}
              .options=${l?.length?l:[]}
              @igds-change=${_=>this.handleDropdownChange(_,t)}
              @igds-clear=${()=>this.handleDropdownClear(t)}
            >
            </igds-dropdown>
          `)}
      </div>
    `}handleDropdownChange(e,r){const t=r?`${i.IGDS_FILTER_TYPE.dropdown}-${r}`:i.IGDS_FILTER_TYPE.dropdown;this.formValues={...this.formValues,[t]:e.detail.value},this.emit(c.IGDS_EVENTS.filterChanged,this.formValues)}handleDropdownClear(e){const r=e?`${i.IGDS_FILTER_TYPE.dropdown}-${e}`:i.IGDS_FILTER_TYPE.dropdown;if(this.formValues[r]){const{[r]:t,...o}=this.formValues;this.formValues=o}this.emit(c.IGDS_EVENTS.filterChanged,this.formValues)}get checkboxFilters(){return this.filters.find(e=>e.type===`${i.IGDS_FILTER_TYPE.checkbox}`)}renderCheckboxFilters(){const e=this.checkboxFilters,r=e?e.items:[];return a.html`
      <div class="filter__checkboxes-group">
        <igds-checkbox-group orientation="horizontal">
          ${u.repeat(r,({id:t})=>t,({id:t,label:o,value:l})=>a.html`
              <igds-checkbox
                id="filter-checkbox"
                label=${d.ifDefined(o)}
                ?checked=${!!l}
                @igds-change=${n=>this.handleCheckboxChange(n,t)}
              >
              </igds-checkbox>
            `)}
        </igds-checkbox-group>
      </div>
    `}handleCheckboxChange(e,r){const t=r?`${i.IGDS_FILTER_TYPE.checkbox}-${r}`:i.IGDS_FILTER_TYPE.checkbox;this.formValues={...this.formValues,[t]:e.detail.checked},this.emit(c.IGDS_EVENTS.filterChanged,this.formValues)}renderActionButtons(){return a.html`
      <div class="filter__action-buttons">
        <igds-button
          variant=${b.IGDS_BUTTON_VARIANTS.link}
          @click=${this.onClear}
        >
          ${this.clearLabel}
          <igds-icon slot="icon" node=${$.backspace}></igds-icon>
        </igds-button>
        ${E.when(this.applyLabel,()=>a.html`
            <igds-button
              type=${b.IGDS_BUTTON_TYPES.submit}
              ?disabled=${this.disableSubmit}
            >
              ${this.applyLabel}
            </igds-button>
          `)}
      </div>
    `}onClear(){this.onDropdownsClear(),this.onCheckboxesClear(),this.formValues={},this.emit(c.IGDS_EVENTS.clear,this.formValues),this.emit(c.IGDS_EVENTS.filterChanged,this.formValues)}onDropdownsClear(){this.dropdownElements.length&&this.dropdownElements.forEach(e=>{e instanceof D.Dropdown&&e.selected.length&&e.value&&(e.selected=[],e.value="",e.valueIcon=null,e.filterText="")})}onCheckboxesClear(){this.checkboxElements.length&&this.checkboxElements.forEach(e=>{e instanceof S.Checkbox&&e.checked&&(e.checked=!1)})}};exports.HorizontalFilter.styles=[I.unsafeCSS(k)];s([h.property({type:Array})],exports.HorizontalFilter.prototype,"filters",2);s([h.property({type:String,attribute:"clear-label"})],exports.HorizontalFilter.prototype,"clearLabel",2);s([h.property({type:String,attribute:"apply-label"})],exports.HorizontalFilter.prototype,"applyLabel",2);s([h.property({type:String})],exports.HorizontalFilter.prototype,"dir",2);s([h.property({type:Boolean,attribute:"disable-submit"})],exports.HorizontalFilter.prototype,"disableSubmit",2);s([y.state()],exports.HorizontalFilter.prototype,"formValues",2);s([m.queryAll(".filter__dropdown")],exports.HorizontalFilter.prototype,"dropdownElements",2);s([m.queryAll("#filter-checkbox")],exports.HorizontalFilter.prototype,"checkboxElements",2);exports.HorizontalFilter=s([g.customElement(T.IGDS_TAGS.horizontalFilter)],exports.HorizontalFilter);
