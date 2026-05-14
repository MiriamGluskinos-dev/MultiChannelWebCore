"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.cjs");const l=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/lit-html.cjs");require("../node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.cjs");const g=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.cjs"),h=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.cjs"),x=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.cjs"),y=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.cjs"),o=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/when.cjs"),c=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/if-defined.cjs"),$=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/class-map.cjs"),b=require("../node_modules/.pnpm/lit-html@3.3.2/node_modules/lit-html/directives/repeat.cjs"),f=require("../checkbox/checkbox.cjs"),k=require("../abstractions/igds-element.cjs");require("../abstractions/angular-form-element.cjs");const u=require("../constants/events.cjs"),_=require("../constants/event-keys.cjs"),V=require("../constants/tags.cjs");require("../button/button.cjs");const v=require("../button/constants.cjs"),p=require("@igds/icons"),E=require("./vertical-filter.scss.cjs"),S=require("../node_modules/.pnpm/@lit_reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.cjs");var q=Object.defineProperty,D=Object.getOwnPropertyDescriptor,n=(d,e,t,s)=>{for(var i=s>1?void 0:s?D(e,t):e,r=d.length-1,a;r>=0;r--)(a=d[r])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&q(e,t,i),i};exports.VerticalFilter=class extends k.IGDSElement{constructor(){super(...arguments),this._filters=[],this.clearLabel="ניקוי סינון",this.formValues={}}set filters(e){if(!e){this._filters=[];return}this._filters=e.map(t=>({...t,subLevel:t.subLevel?.length?t.subLevel:[]}))}get filters(){return this._filters}firstUpdated(e){super.firstUpdated(e),this.setCheckboxValues()}setCheckboxValues(){this.filters.length&&this.filters.forEach(e=>{e.value&&this.setCheckboxValue(e),e.subLevel&&e.subLevel.forEach(t=>{t.value&&this.setCheckboxValue(t)})})}setCheckboxValue(e){const t=e.id?`checkbox-${e.id}`:"checkbox";e.value&&(this.formValues={...this.formValues,[t]:e.value})}render(){return l.html`
      <aside>${this.renderActionButtons()} ${this.renderFilters()}</aside>
    `}renderActionButtons(){return l.html`
      <header class="filter__action-buttons">
        <igds-button
          variant=${v.IGDS_BUTTON_VARIANTS.link}
          @click=${this.onClear}
        >
          ${this.clearLabel}
          <igds-icon slot="icon" node=${p.backspace}> </igds-icon>
        </igds-button>
        ${o.when(this.applyLabel,()=>l.html`
            <igds-button
              type=${v.IGDS_BUTTON_TYPES.submit}
              @click=${this.onApply}
              ?disabled=${this.disableSubmit}
            >
              ${this.applyLabel}
            </igds-button>
          `)}
      </header>
    `}onClear(){this.checkboxElements.length&&(this.checkboxElements.forEach(e=>{e instanceof f.Checkbox&&e.checked&&(e.checked=!1)}),this.formValues={},this.emit(u.IGDS_EVENTS.clear,this.formValues))}onApply(e){e.preventDefault(),this.emit(u.IGDS_EVENTS.apply,this.formValues)}renderFilters(){return l.html`
      <form>
        ${b.repeat(this.filters,({id:e})=>e,(e,t)=>l.html`
            <div
              class="filter__first-level-box"
              aria-expanded=${c.ifDefined(e.expanded)}
              aria-controls=${c.ifDefined(e.subLevel?.length?`content-${t+1}`:void 0)}
              @click=${s=>this.onExpand(s,t)}
              @keydown=${()=>{}}
            >
              ${o.when(e.label||e.value,()=>l.html`
                  <igds-checkbox
                    ?checked=${e.value}
                    label=${c.ifDefined(e.label)}
                    class="filter__checkbox"
                    @igds-change=${s=>this.handleCheckboxChange(s,e)}
                  >
                  </igds-checkbox>
                `)}
              ${o.when(e.subLevel?.length,()=>l.html`
                  <igds-icon
                    node=${e.expanded?p.chevronUp:p.chevronDown}
                    tabindex="0"
                    role="button"
                    aria-label="Expand icon"
                    @keydown=${s=>this.onExpandIconKeyDown(s,t)}
                    class="filter__expand-icon"
                  >
                  </igds-icon>
                `)}
              ${o.when(e.count,()=>l.html`
                  <span class="filter__count">
                    ${e.count?.toString().padStart(3,"0")}
                  </span>
                `)}
            </div>
            <igds-divider></igds-divider>
            ${o.when(e.subLevel?.length&&e.expanded,()=>this.renderSecondLevel(e.subLevel??[],t))}
          `)}
      </form>
    `}onExpandIconKeyDown(e,t){[_.IGDS_EVENT_KEYS.Enter,_.IGDS_EVENT_KEYS.Space].includes(e.key)&&this.onExpand(e,t)}renderSecondLevel(e,t){return l.html`
      <fieldset id=${`content-${t+1}`} class="filter__fieldset">
        ${b.repeat(e,s=>s.id,s=>l.html`
            <div
              class=${$.classMap({"filter__second-level-box":!0,"filter__second-level-box--ltr":this.dir==="ltr"})}
            >
              <igds-checkbox
                ?checked=${s.value}
                label=${c.ifDefined(s.label)}
                class="filter__checkbox"
                @igds-change=${i=>this.handleCheckboxChange(i,s,!0)}
              >
              </igds-checkbox>
              <span class="filter__count"> ${s.count} </span>
            </div>
          `)}
      </fieldset>
    `}handleCheckboxChange(e,t,s){e.stopPropagation();const i=t.id?`checkbox-${t.id}`:"checkbox";this.formValues={...this.formValues,[i]:e.detail.checked},t.value=!t.value,s?this.filters.forEach(r=>{r.subLevel?.length&&r.subLevel.forEach(a=>{a.id===t.id&&(a.value=!a.value)})}):this.filters.forEach(r=>{r.id===t.id&&(r.value=!r.value)}),this.emit(u.IGDS_EVENTS.filterChanged,this.formValues)}onExpand(e,t){e.target instanceof f.Checkbox||(this.filters[t].expanded=!this.filters[t].expanded,this.requestUpdate())}};exports.VerticalFilter.styles=[S.unsafeCSS(E)];n([h.property({type:Array})],exports.VerticalFilter.prototype,"filters",1);n([h.property({type:String,attribute:"clear-label"})],exports.VerticalFilter.prototype,"clearLabel",2);n([h.property({type:String,attribute:"apply-label"})],exports.VerticalFilter.prototype,"applyLabel",2);n([h.property({type:Boolean,attribute:"disable-submit"})],exports.VerticalFilter.prototype,"disableSubmit",2);n([y.queryAll(".filter__checkbox")],exports.VerticalFilter.prototype,"checkboxElements",2);n([x.state()],exports.VerticalFilter.prototype,"formValues",2);exports.VerticalFilter=n([g.customElement(V.IGDS_TAGS.verticalFilter)],exports.VerticalFilter);
